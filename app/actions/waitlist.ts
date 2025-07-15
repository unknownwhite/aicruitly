"use server"

import { redirect } from "next/navigation"
import { createServerClient } from "../../lib/supabase"
import { sendWelcomeEmail, sendInternalNotification } from "../../lib/email"

export interface WaitlistFormData {
  firstName: string
  lastName: string
  email: string
  company: string
  jobTitle: string
  teamSize: string
  currentTool: string
  painPoints: string[]
  interests: string[]
}

export async function joinWaitlist(formData: FormData) {
  // Extract form data
  const data: WaitlistFormData = {
    firstName: formData.get("firstName") as string,
    lastName: formData.get("lastName") as string,
    email: formData.get("email") as string,
    company: formData.get("company") as string,
    jobTitle: formData.get("jobTitle") as string,
    teamSize: formData.get("teamSize") as string,
    currentTool: formData.get("currentTool") as string,
    painPoints: formData.getAll("painPoints") as string[],
    interests: formData.getAll("interests") as string[],
  }

  // Validate required fields
  if (!data.firstName || !data.lastName || !data.email || !data.company) {
    throw new Error("Please fill in all required fields")
  }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error("Please enter a valid email address")
  }

  try {
    // Create Supabase client
    const supabase = createServerClient()

    // Check if email already exists
    const { data: existingUser, error: checkError } = await supabase
      .from("waitlist")
      .select("email")
      .eq("email", data.email)
      .single()

    if (existingUser) {
      throw new Error("This email is already on our waitlist. Check your inbox for your welcome email!")
    }

    // Insert new waitlist signup
    const { data: insertedData, error: insertError } = await supabase
      .from("waitlist")
      .insert({
        first_name: data.firstName,
        last_name: data.lastName,
        email: data.email,
        company: data.company,
        job_title: data.jobTitle || null,
        team_size: data.teamSize || null,
        current_tool: data.currentTool || null,
        pain_points: data.painPoints.length > 0 ? data.painPoints : null,
        interests: data.interests.length > 0 ? data.interests : null,
      })
      .select()
      .single()

    if (insertError) {
      console.error("Supabase insert error:", insertError)
      throw new Error("Failed to save your information. Please try again.")
    }

    console.log("Successfully saved to database:", insertedData)

    // Send welcome email
    try {
      await sendWelcomeEmail(data)
      console.log("Welcome email sent successfully")
    } catch (emailError) {
      console.error("Failed to send welcome email:", emailError)
      // Don't throw error here - user is still signed up
    }

    // Send internal notification
    try {
      await sendInternalNotification(data)
      console.log("Internal notification sent successfully")
    } catch (notificationError) {
      console.error("Failed to send internal notification:", notificationError)
      // Don't throw error here - user is still signed up
    }

    // Redirect to success page
    redirect("/success")
  } catch (error) {
    console.error("Waitlist signup error:", error)

    if (error instanceof Error) {
      throw error
    }

    throw new Error("Something went wrong. Please try again.")
  }
}

// Function to get waitlist stats (for admin use)
export async function getWaitlistStats() {
  try {
    const supabase = createServerClient()

    const { count, error } = await supabase.from("waitlist").select("*", { count: "exact", head: true })

    if (error) {
      console.error("Error fetching waitlist stats:", error)
      return { count: 0 }
    }

    return { count: count || 0 }
  } catch (error) {
    console.error("Error in getWaitlistStats:", error)
    return { count: 0 }
  }
}

// Function to get recent signups (for admin use)
export async function getRecentSignups(limit = 10) {
  try {
    const supabase = createServerClient()

    const { data, error } = await supabase
      .from("waitlist")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(limit)

    if (error) {
      console.error("Error fetching recent signups:", error)
      return []
    }

    return data || []
  } catch (error) {
    console.error("Error in getRecentSignups:", error)
    return []
  }
}

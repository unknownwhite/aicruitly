"use server"

import { redirect } from "next/navigation"

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

  // Simulate email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) {
    throw new Error("Please enter a valid email address")
  }

  // Simulate saving to database
  console.log("Saving waitlist signup:", data)

  // Simulate sending welcome email
  await sendWelcomeEmail(data)

  // Simulate sending internal notification
  await sendInternalNotification(data)

  // Redirect to success page
  redirect("/success")
}

async function sendWelcomeEmail(data: WaitlistFormData) {
  // Simulate email sending delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  console.log(`Sending welcome email to ${data.email}`)

  // In a real application, you would use a service like:
  // - Resend
  // - SendGrid
  // - AWS SES
  // - Nodemailer

  const emailContent = {
    to: data.email,
    subject: "Welcome to Aicruitly Waitlist! 🚀",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); padding: 40px 20px; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Aicruitly!</h1>
        </div>
        
        <div style="padding: 40px 20px; background: #f8f9fa;">
          <h2 style="color: #1f2937;">Hi ${data.firstName}! 👋</h2>
          
          <p style="color: #4b5563; line-height: 1.6;">
            Thank you for joining the Aicruitly waitlist! We're thrilled to have you on board as we prepare to revolutionize the hiring process with AI.
          </p>
          
          <div style="background: white; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #1f2937; margin-top: 0;">What's Next?</h3>
            <ul style="color: #4b5563; line-height: 1.8;">
              <li>🎯 You're now on our exclusive early access list</li>
              <li>💰 You'll get 50% off for the first 6 months</li>
              <li>📧 We'll notify you as soon as beta access is available</li>
              <li>🚀 Expected launch: Q2 2024</li>
            </ul>
          </div>
          
          <p style="color: #4b5563; line-height: 1.6;">
            In the meantime, follow us on social media for updates and hiring tips!
          </p>
          
          <div style="text-align: center; margin: 30px 0;">
            <a href="https://aicruitly.com" style="background: linear-gradient(135deg, #3B82F6, #8B5CF6); color: white; padding: 12px 24px; text-decoration: none; border-radius: 25px; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
        </div>
        
        <div style="padding: 20px; text-align: center; color: #6b7280; font-size: 14px;">
          <p>© 2024 Aicruitly. All rights reserved.</p>
          <p>You're receiving this because you signed up for our waitlist.</p>
        </div>
      </div>
    `,
  }

  console.log("Email sent successfully:", emailContent)
}

async function sendInternalNotification(data: WaitlistFormData) {
  // Simulate internal notification
  await new Promise((resolve) => setTimeout(resolve, 500))

  console.log("Internal notification sent:", {
    type: "new_waitlist_signup",
    user: `${data.firstName} ${data.lastName}`,
    email: data.email,
    company: data.company,
    teamSize: data.teamSize,
    timestamp: new Date().toISOString(),
  })
}

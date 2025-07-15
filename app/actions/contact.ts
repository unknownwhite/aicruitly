"use server"

import { z } from "zod"

const ContactFormSchema = z.object({
  firstName: z.string().min(1, "First name is required").trim(),
  lastName: z.string().min(1, "Last name is required").trim(),
  email: z.string().email("Please enter a valid email address").trim(),
  company: z.string().optional(),
  subject: z.string().min(1, "Subject is required").trim(),
  message: z.string().min(10, "Message must be at least 10 characters long").trim(),
})

export type ContactFormState = {
  errors?: {
    firstName?: string[]
    lastName?: string[]
    email?: string[]
    subject?: string[]
    message?: string[]
  }
  message?: string
  success?: boolean
}

export async function submitContactForm(
  prevState: ContactFormState | undefined,
  formData: FormData,
): Promise<ContactFormState> {
  // Validate form fields
  const validatedFields = ContactFormSchema.safeParse({
    firstName: formData.get("firstName"),
    lastName: formData.get("lastName"),
    email: formData.get("email"),
    company: formData.get("company"),
    subject: formData.get("subject"),
    message: formData.get("message"),
  })

  // If validation fails, return errors
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    }
  }

  const { firstName, lastName, email, company, subject, message } = validatedFields.data

  try {
    // Simulate processing delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Add to CRM system

    console.log("Contact form submission:", {
      firstName,
      lastName,
      email,
      company,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate sending email
    const emailContent = `
      New contact form submission from ${firstName} ${lastName}
      
      Email: ${email}
      Company: ${company || "Not provided"}
      Subject: ${subject}
      
      Message:
      ${message}
      
      Submitted at: ${new Date().toLocaleString()}
    `

    console.log("Email sent to admin:", emailContent)

    // Send confirmation email to user
    const confirmationEmail = `
      Hi ${firstName},
      
      Thank you for contacting Aicruitly! We've received your message about "${subject}" and will get back to you within 24 hours.
      
      Best regards,
      The Aicruitly Team
    `

    console.log("Confirmation email sent to user:", confirmationEmail)

    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon.",
    }
  } catch (error) {
    console.error("Contact form error:", error)
    return {
      message: "Something went wrong. Please try again later.",
    }
  }
}

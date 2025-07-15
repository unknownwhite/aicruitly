import { Resend } from 'resend'
import { WaitlistFormData } from '../app/actions/waitlist'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendWelcomeEmail(data: WaitlistFormData) {
  const emailContent = {
    to: data.email,
    subject: "Welcome to Aicruitly Waitlist! 🚀",
    html: generateWelcomeEmailHTML(data),
  }

  try {
    await resend.emails.send({
      from: 'Aicruitly <contact@aicruitly.com>',
      to: emailContent.to,
      subject: emailContent.subject,
      html: emailContent.html,
    })

    return { success: true, message: "Welcome email sent successfully" }
  } catch (error) {
    console.error("Failed to send welcome email:", error)
    return { success: false, message: "Email sending failed" }
  }
}

function generateWelcomeEmailHTML(data: WaitlistFormData): string {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to Aicruitly!</title>
      <style>
        body {
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 600px;
          margin: 0 auto;
          background-color: #f8f9fa;
        }
        .container {
          background: white;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .header {
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          padding: 40px 20px;
          text-align: center;
          color: white;
        }
        .header h1 {
          margin: 0;
          font-size: 28px;
          font-weight: bold;
        }
        .content {
          padding: 40px 30px;
        }
        .welcome-box {
          background: #f8f9ff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 20px;
          margin: 20px 0;
        }
        .benefits {
          list-style: none;
          padding: 0;
        }
        .benefits li {
          padding: 8px 0;
          border-bottom: 1px solid #f3f4f6;
        }
        .benefits li:last-child {
          border-bottom: none;
        }
        .cta-button {
          display: inline-block;
          background: linear-gradient(135deg, #3B82F6, #8B5CF6);
          color: white;
          padding: 12px 24px;
          text-decoration: none;
          border-radius: 25px;
          font-weight: bold;
          margin: 20px 0;
        }
        .footer {
          background: #f8f9fa;
          padding: 20px;
          text-align: center;
          color: #6b7280;
          font-size: 14px;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          display: inline-block;
          margin: 0 10px;
          color: #3B82F6;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>🚀 Welcome to Aicruitly!</h1>
        </div>
        
        <div class="content">
          <h2>Hi ${data.firstName}! 👋</h2>
          <p>Thank you for joining the Aicruitly waitlist! We're thrilled to have <strong>${data.company}</strong> on board.</p>
          <div class="welcome-box">
            <h3>🎯 What's Next?</h3>
            <ul class="benefits">
              <li>✨ Early access secured</li>
              <li>💰 50% off for 6 months</li>
              <li>📧 Beta launch updates</li>
              <li>🚀 Launch ETA: <strong>Q2 2024</strong></li>
              <li>🎁 Priority founder support</li>
            </ul>
          </div>
          <p>We’ll reach out soon with more updates!</p>
          <div style="text-align: center;">
            <a href="https://aicruitly.com" class="cta-button">Visit Our Website</a>
          </div>
          <div class="social-links" style="text-align: center;">
            <a href="#">Twitter</a> |
            <a href="#">LinkedIn</a> |
            <a href="#">Blog</a>
          </div>
          <p>– The Aicruitly Team</p>
        </div>
        <div class="footer">
          <p>© 2024 Aicruitly</p>
        </div>
      </div>
    </body>
    </html>
  `
}

export async function sendInternalNotification(data: WaitlistFormData) {
  const internalRecipients = ['rahul@aicruitly.com', 'admin@aicruitly.com']

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
      <h2>📥 New Waitlist Signup</h2>
      <table>
        <tr><td><strong>Name:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
        <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
        <tr><td><strong>Company:</strong></td><td>${data.company}</td></tr>
        <tr><td><strong>Job Title:</strong></td><td>${data.jobTitle}</td></tr>
        <tr><td><strong>Team Size:</strong></td><td>${data.teamSize}</td></tr>
        <tr><td><strong>Current Tool:</strong></td><td>${data.currentTool}</td></tr>
        <tr><td><strong>Interests:</strong></td><td>${data.interests?.join(', ') || '—'}</td></tr>
        <tr><td><strong>Pain Points:</strong></td><td>${data.painPoints?.join(', ') || '—'}</td></tr>
        <tr><td><strong>Submitted At:</strong></td><td>${new Date().toLocaleString()}</td></tr>
      </table>
    </div>
  `

  try {
    await resend.emails.send({
      from: 'Aicruitly Alerts <contact@aicruitly.com>',
      to: internalRecipients,
      subject: `🧠 New Waitlist Signup: ${data.firstName} (${data.company})`,
      html,
    })

    return { success: true }
  } catch (error) {
    console.error("Failed to send internal notification:", error)
    return { success: false }
  }
}

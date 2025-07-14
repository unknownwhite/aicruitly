import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Aicruitly — AI-Powered Hiring Platform',
  description: 'Automate recruitment with AI. Streamline your hiring process, save time, and hire smarter with Aicruitly.',
  generator: 'Aicruitly - Built with V0.dev',
  keywords: ['AI hiring', 'recruitment automation', 'hiring platform', 'AI for HR', 'Aicruitly'],
  authors: [{ name: 'Rahul Chaudhari', url: 'https://www.aicruitly.com' }],
  openGraph: {
    title: 'Aicruitly — AI-Powered Hiring Platform',
    description: 'Revolutionize hiring with AI. Get matched with the best candidates instantly.',
    url: 'https://www.aicruitly.com',
    siteName: 'Aicruitly',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.aicruitly.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Aicruitly Landing Page'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicruitly — AI-Powered Hiring Platform',
    description: 'Smart hiring. Instant results. AI at the core.',
    site: '@yourTwitterHandle',
    images: ['https://www.aicruitly.com/og-image.png']
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}

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
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aicruitly — AI-Powered Hiring Platform',
    description: 'Smart hiring. Instant results. AI at the core.',
    site: '@yourTwitterHandle',
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

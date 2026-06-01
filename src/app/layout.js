import { Inter } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.samyukt.co.in'),
  title: 'Samyukt — Digital Solutions for Modern Education',
  description:
    'Samyukt provides digital tools and professional services for educational institutions. Streamline operations, improve communication, and accelerate digital transformation with modern software solutions.',
  keywords: [
    'educational technology',
    'EdTech',
    'school management',
    'college management',
    'university software',
    'education software',
    'digital transformation',
    'Samyukt',
  ],
  authors: [{ name: 'Samyukt' }],
  openGraph: {
    title: 'Samyukt — Digital Solutions for Modern Education',
    description:
      'Helping educational institutions streamline operations, improve efficiency, and embrace digital transformation through powerful software tools and expert services.',
    url: 'https://www.samyukt.co.in',
    siteName: 'Samyukt',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Samyukt — Digital Solutions for Modern Education',
    description:
      'Helping educational institutions streamline operations, improve efficiency, and embrace digital transformation.',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://www.samyukt.co.in',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}

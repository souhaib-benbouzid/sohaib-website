import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const openSans = Open_Sans({
  variable: '--font-open_sans',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Souhaib Benbouzid',
  description: 'Souhaib Benbouzid is an Elite Software Engineer',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' data-theme='dark'>
      <body className={`${openSans.variable} `}>{children}</body>
    </html>
  );
}

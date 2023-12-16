import type { Metadata } from 'next';
import localFont from 'next/font/local';

import './globals.css';

const open_sans = localFont({
  src: [
    {
      path: './static/fonts/OpenSans-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: './static/fonts/OpenSans-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './static/fonts/OpenSans-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: './static/fonts/OpenSans-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: './static/fonts/OpenSans-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
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
      <body className={`${open_sans.className}`}>{children}</body>
    </html>
  );
}

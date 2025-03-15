import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

import Header from '@/components/layout/header';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin'] });

const title = 'Papu Sethi | Frontend Developer From India.';
const description = 'A frontend developer who turns ideas into interactive experiences.';
const url = 'https://portfolio-ad24.onrender.com/';

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title,
  description,
  keywords: ['Frontend Developer', 'React Developer', 'Next.js Developer'],
  creator: 'Papu Sethi'
};

export default function RootLayout({ children }: { readonly children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} flex justify-center w-full flex-col`}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

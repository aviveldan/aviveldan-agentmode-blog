import './globals.css';
import React from 'react';
import { ThemeProvider } from '../components/ThemeContext';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Aviv Eldan – Blog',
  description: 'Personal blog and portfolio for Aviv Eldan, a software engineer at Microsoft.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          <Header />
          <main className="container mx-auto px-4 py-8 min-h-screen">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

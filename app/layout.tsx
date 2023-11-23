import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/nav';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Hack App',
  description: 'This is Hack App',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = async ({ children }: RootLayoutProps) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav user={data.session?.user} />
        {children}
      </body>
    </html>
  );
};

export default RootLayout;

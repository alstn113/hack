import Link from 'next/link';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const supabase = createServerComponentClient({ cookies });
  const { data } = await supabase.auth.getSession();

  if (data.session) {
    redirect('/');
  }

  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href="/signup">Sign up</Link>
        <Link href="/login">Login</Link>
      </nav>
      {children}
    </>
  );
};

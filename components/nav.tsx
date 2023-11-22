import Link from 'next/link';
import LogoutButton from './logout-button';
import LoginButton from './login-button';
import { User } from '@supabase/supabase-js';

interface NavProps {
  user: User | undefined;
}

const Nav = ({ user }: NavProps) => {
  return (
    <nav className="flex gap-2 p-4">
      <h1>Hack</h1>
      <Link href="/">Home</Link>
      <Link href="/posts" className="mr-auto">
        Posts
      </Link>
      {user ? (
        <>
          <span>Hello, {user.email}</span>
          <LogoutButton />
        </>
      ) : (
        <LoginButton />
      )}
    </nav>
  );
};

export default Nav;

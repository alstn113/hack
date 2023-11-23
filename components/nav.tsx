import Link from 'next/link';
import LogoutButton from './logout-button';
import LoginButton from './login-button';
import { User } from '@supabase/supabase-js';

interface NavProps {
  user: User | undefined;
}

const Nav = ({ user }: NavProps) => {
  return (
    <nav className="flex items-center justify-between p-4 bg-blue-500 text-white">
      <h1 className="text-xl font-bold">Hack</h1>
      <div className="flex items-center gap-2">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/posts" className="hover:underline">
          Posts
        </Link>
      </div>
      <div className="flex items-center gap-2">
        {user ? (
          <>
            <span className="mr-2">Hello, {user.email}</span>
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </div>
    </nav>
  );
};

export default Nav;

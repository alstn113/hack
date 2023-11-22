'use client';

import { useRouter } from 'next/navigation';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const LogoutButton = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signOut();

    if (!error) {
      router.push('/');
      router.refresh();
    }
  };

  return (
    <button className="btn-secondary" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;

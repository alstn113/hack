'use client';

import { BASE_URL } from '@/constants';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const LoginButton = () => {
  const handleLogin = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${BASE_URL}/auth/callback`,
      },
    });

    if (error) console.log(error);
  };

  return (
    <div>
      <button onClick={handleLogin}>Github Login</button>
    </div>
  );
};

export default LoginButton;

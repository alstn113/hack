'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const LoginButton = () => {
  const handleLogin = async () => {
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'github',
      // options -> redirectTo 이거 안통함. supabase URL Configuration에서 설정해야함.
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

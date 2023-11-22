'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';

const LoginPage = () => {
  const supabase = createClientComponentClient();

  const handleGithubLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: '/',
      },
    });
  };

  return (
    <div>
      <button onClick={handleGithubLogin}>github login</button>
    </div>
  );
};

export default LoginPage;

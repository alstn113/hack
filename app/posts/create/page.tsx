import CreatePostForm from '@/app/posts/create/create-post-form';
import { Database } from '@/lib/schema';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import {redirect} from 'next/navigation'
import { cookies } from 'next/headers';

const CreatePostPage = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    redirect('/');
  }

  return (
    <div>
      <div>Create Post Page</div>
      <CreatePostForm />
    </div>
  );
};

export default CreatePostPage;

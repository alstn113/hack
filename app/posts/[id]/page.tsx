import { notFound } from 'next/navigation';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/schema';

export const dynamicParams = true;

interface PostDetailProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PostDetailProps) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data: post } = await supabase
    .from('post')
    .select()
    .eq('id', params.id)
    .single();

  return {
    title: `Hack | ${post?.title || 'Post not Found'}`,
  };
}

async function getPost(id: string) {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data } = await supabase.from('post').select().eq('id', id).single();

  if (!data) {
    notFound();
  }

  return data;
}

export default async function PostDetails({ params }: PostDetailProps) {
  const post = await getPost(params.id);

  const supabase = createServerComponentClient<Database>({ cookies });
  const { data } = await supabase.auth.getSession();

  return (
    <main className="container mx-auto p-4">
      <nav className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Post Details</h2>
        </div>
        <div className="ml-auto">
          {data.session?.user.id === post.user_id && (
            <div className="text-red-500">delete</div>
          )}
        </div>
      </nav>
      <div className="card p-6">
        <h3 className="text-2xl font-bold mb-4">{post.title}</h3>
        <small className="text-gray-500">Created by {post.user_id}</small>
        <p className="mt-2">{post.content}</p>
      </div>
    </main>
  );
}

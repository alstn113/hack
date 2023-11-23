import Link from 'next/link';
import { cookies } from 'next/headers';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { Database } from '@/lib/schema';

const getPosts = async () => {
  const supabase = createServerComponentClient<Database>({ cookies });

  const { data, error } = await supabase.from('post').select();

  if (error) {
    console.log(error.message);
  }

  return data;
};

const PostList = async () => {
  const posts = await getPosts();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts?.map((post) => (
        <div
          key={post.id}
          className="card my-5 p-4 bg-white shadow-md transition-transform transform hover:scale-105 cursor-pointer"
        >
          <Link href={`/posts/${post.id}`}>
            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">User ID: {post.user_id}</p>
          </Link>
        </div>
      ))}
      {posts?.length === 0 && (
        <p className="text-center">There are no open posts, yay!</p>
      )}
    </div>
  );
};

export default PostList;

import { Suspense } from 'react';
import Loading from '@/app/posts/loading';
import Link from 'next/link';
import PostList from './post-list';

export const metadata = {
  title: 'Hack | Posts',
};

const PostsPage = () => {
  return (
    <main className="container mx-auto p-4">
      <nav className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-3xl font-bold">Posts</h2>
        </div>
        <Link href="/posts/create" className="btn-primary">
          New Post
        </Link>
      </nav>
      <Suspense fallback={<Loading />}>
        <PostList />
      </Suspense>
    </main>
  );
};

export default PostsPage;

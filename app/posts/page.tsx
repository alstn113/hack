import Link from 'next/link';
import prisma from '@/lib/primsa';

const getPosts = async () => {
  const posts = await prisma.post.findMany();
  return posts;
};

const PostListPage = async () => {
  const posts = await getPosts();

  return (
    <div>
      <h1>Post List Page</h1>
      <ul className="flex flex-col gap-2 p-2">
        {posts?.map((post) => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <div className="text-blue-500 hover:underline">{post.title}</div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostListPage;

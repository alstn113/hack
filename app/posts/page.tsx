import Link from 'next/link';
import { Post } from '@prisma/client';
import { BASE_URL } from '@/constants';

const PostListPage = async () => {
  const postList: Post[] = await fetch(`${BASE_URL}/posts`, {
    cache: 'no-store',
  }).then((res) => res.json());

  return (
    <div>
      <h1>Post List Page</h1>
      <ul className="flex flex-col gap-2 p-2">
        {postList.map((post) => (
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

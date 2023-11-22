import Link from 'next/link';
import { Post } from '@prisma/client';
import { BASE_URL } from '@/constants';

const fetchPosts = async () => {
  // const posts: Post[] = await fetch(`${BASE_URL}/posts`, {
  //   cache: 'no-store',
  // }).then((res) => res.json());

  const datas: {
    id: number;
    title: string;
  }[] = await fetch('https://jsonplaceholder.typicode.com/todos', {
    cache: 'no-store',
  }).then((res) => res.json());

  return datas;
};

const PostListPage = async () => {
  const posts = await fetchPosts();

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

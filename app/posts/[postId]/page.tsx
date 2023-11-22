import { notFound } from 'next/navigation';
import prisma from '@/lib/primsa';

interface PostDetailPageProps {
  params: {
    postId: string;
  };
}

export const dynamicParams = true;

const getPost = async (postId: string) => {
  const post = await prisma.post.findUnique({
    where: {
      id: postId,
    },
  });

  return post;
};

const PostDetailPage = async ({ params }: PostDetailPageProps) => {
  const { postId } = params;

  const post = await getPost(postId);

  if (!post) {
    return notFound();
  }

  return (
    <div>
      <h1>Post Detail Page</h1>
      <h2>Post ID: {postId}</h2>
      <p>Post Title: {post.title}</p>
      <p>Post Content: {post.content}</p>
    </div>
  );
};

export default PostDetailPage;

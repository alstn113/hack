import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/primsa';

export const PATCH = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  }
) => {
  try {
    const { title, content } = await req.json();

    const post = await prisma.post.update({
      where: {
        id: params.postId,
      },
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(post, { status: 200 });
  } catch (error) {
    console.log('[POSTS_PATCH]', error);
    return new NextResponse('Internal server error', { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  {
    params,
  }: {
    params: {
      postId: string;
    };
  }
) => {
  try {
    await prisma.post.delete({
      where: {
        id: params.postId,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.log('[POSTS_DELETE]', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};

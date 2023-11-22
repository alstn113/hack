import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/primsa';

export const GET = async () => {
  try {
    const posts = await prisma.post.findMany();

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    console.log('[POSTS_GET]', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const res = await req.json();

    const { title, content } = res;

    if (!title || !content) {
      return NextResponse.json(
        {
          message: 'Title and content are required',
        },
        {
          status: 400,
        }
      );
    }

    const post = await prisma.post.create({
      data: {
        title,
        content,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log('[POSTS_POST]', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};

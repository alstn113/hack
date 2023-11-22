import { NextRequest, NextResponse } from 'next/server';

import prisma from '@/lib/primsa';

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

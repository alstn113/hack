import { Database } from '@/lib/schema';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

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

    const supabase = createRouteHandlerClient<Database>({ cookies });
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (!session) {
      return NextResponse.json(
        {
          message: 'Unauthorized',
        },
        {
          status: 401,
        }
      );
    }

    const post = await supabase
      .from('post')
      .insert({ title, content, user_id: session.user.id })
      .select();

    console.log('[POSTS_POST]', post);

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    console.log('[POSTS_POST]', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};

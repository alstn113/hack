'use client';

import Link from 'next/link';

const Nav = () => {
  return (
    <div className="flex gap-2 text-cyan-500">
      <Link href={'/'} className="hover:underline">
        Home
      </Link>
      <Link href={'/posts'} className="hover:underline">
        Post List
      </Link>
      <Link href={'/posts/create'} className="hover:underline">
        Create Post
      </Link>
    </div>
  );
};

export default Nav;

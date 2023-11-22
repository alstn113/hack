#hack

vercel setting -> function -> seoul
vercel .env 수정

pnpm add -D prisma
pnpm dlx prisma init
.env에 DATABASE_URL 추가
build script 변경 -> "build": "prisma generate && next build"
prisma model 작성
"pnpm dlx primsa db push" or "pnpm dlx prisma migrate dev --name init"
lib/prisma.ts prisma singleton 생성

pnpm add axios @hookform/resolvers react-hook-form zod

pnpm add @supabase/auth-helpers-nextjs
supabase의 provider에 github client_id, client_secret 추가, callback_url 복사
callback_url을 github auth의 authorization callback url에 추가

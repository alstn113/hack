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

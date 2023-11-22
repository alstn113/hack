#hack

pnpm add -D prisma
pnpm dlx prisma init
.env에 DATABASE_URL 추가
prisma model 작성
pnpm dlx prisma migrate dev --name init
or pnpm dlx primsa db push

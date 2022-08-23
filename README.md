inside /api:
- run "npm install"
- run "npx prisma migrate dev"
- run "node server.js"

inside /front:
- run npm install
- copy sample.env.local to env.local
- run "npm run dev"
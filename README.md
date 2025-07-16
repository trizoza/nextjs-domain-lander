# Dynamic landing page for all your unused domains

## Features:
1. Super fast, server side rendered domain landing page written in [NextJS](https://nextjs.org/), optimized for desktops and mobile screens
2. It uses request headers to automatically populate domain name, therefore can be reused for unlimited number of domains under one project
3. It uses `COFFEE_URL` environment variable to allow setting your own buy me a coffee link without touching the code (or alternatively fork it and overwrite `export const COFFEE_URL` in [constants.ts](https://github.com/trizoza/nextjs-domain-lander/blob/main/app/constants.ts) file)

## How does it look?

<img width="1709" height="1067" alt="Screenshot 2025-07-16 at 23 43 28" src="https://github.com/user-attachments/assets/982eb959-7ccd-414f-8a1c-fcea28783b18" />

## How does it work?

<img width="1710" height="1026" alt="Screenshot 2025-07-16 at 23 29 56" src="https://github.com/user-attachments/assets/6b14f9d0-eb53-4d76-bda9-cb0a20b7a356" />

## Show me!

Visit [readwriterepeat.com](https://readwriterepeat.com) to see it in action

## To run locally
```bash
npm install && npm run dev
```

## Deploy on Vercel (free)

The easiest way to deploy Next.js app is to use the [Vercel Platform](https://vercel.com/)
They are the creators of Next.js and have massively generous free tier
Check out [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

Made with ❤️ by [Trizo](https://ko-fi.com/trizo)

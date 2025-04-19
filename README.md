## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
Run prettier:

`prettier --write components`

Run linting:

`next lint --dir components --dir app`

Opens to [http://localhost:3000](http://localhost:3000)

## Architecture

* This is a [Next.js](https://nextjs.org) project
* [Shadcn Component Library](https://ui.shadcn.com/docs/)

## Docker

* Added docker support from [Vercel repo](https://github.com/vercel/next.js/tree/canary/examples/with-docker)
* [Next JS Docs for docker deploy](https://nextjs.org/docs/app/building-your-application/deploying#docker-image)

Build Container:
`docker build -t dashboard-docker .`

Run Container:
`docker run -p 3000:3000 dashboard-docker`


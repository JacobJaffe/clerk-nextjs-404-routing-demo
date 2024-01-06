# Demo of ClerkProvider breaking 404 routing

To reproduce:

1. add a `.env.local` with `CLERK_SECRET_KEY` and `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
2. Build and serve the app:

```
yarn
yarn build
yarn start
```

3. Click the link to go to 404 page.
4. From the 404 page, attempt to go back to the `/` root via the `<Link>` in the navbar

It will not work -- the address will change, but the page won't reload.

![2024-01-06 15 34 33](https://github.com/JacobJaffe/clerk-nextjs-404-routing-demo/assets/25315679/65581158-b7b9-4e10-895a-c93c09c7d83b)

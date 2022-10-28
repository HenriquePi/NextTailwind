# Developer Information

## Created With HenriquePi NextTailwind start
- [Found here](https://github.com/HenriquePi/NextTailwind)

## Node
node version 16.18.0

## CSS
- app is set up with tailwind
- most style can be written in /styles/tailwind.css
- you can target class & tags with this syntax:
  ```css
    .your-class {
      @apply py-2 px-4 bg-blue-500;
    }
    ```
  - tailwind is mobile first, so write mobile classes:
    ```html
    <div className="p-2"/>
    ```
  - followed by breakpoint & upper class
    ```html 
    <div className="p-2 md:p-4"/>
    ```
- fonts are in `/styles/font`
  - fonts are initialized in tailwind.css

## Typography
- font size is set to 62.5%
- use rem for font sizes (e.g 12px - 1.2rem)
- default font is set in tailwind.css

## project structure
- layout (header/footer) are in `/components/layout`
- project is modular
- page specific components are in `/components/[pagename]`
- global components are in /components
  - global sub-components are in `/components/[component]`

## Assets
- assets are located in `/assets`
- sub folders are based on `page/brand` `resources/generic` use
- import assets like other files
  ```js 
    import AnyImageName from "/assets/brand/logo.png"
    import Image from "next/image";
  ```
  - Then use [next/image](https://nextjs.org/docs/api-reference/next/image) element to display
  ```html 
    <Image src={AnyImage} alt="Any Image">
  ```
## Types
- custom object types are in the `/type folder`

## Forms
- forms are handled using React Hook Form
  - [documentation](https://react-hook-form.com/)

# NextJS starter README
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
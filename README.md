# Aviv Eldan – Personal Blog & Portfolio

Welcome to the source code for my personal blog and portfolio website built with
**Next.js**, **TypeScript** and **Tailwind CSS**. This project serves as a
foundation for sharing articles, showcasing projects and providing an easy way to
get in touch.

## Features

- **Homepage** – introduces who I am, what I do at Microsoft and highlights the
  latest posts.
- **Blog** – lists all blog posts stored as Markdown files with front matter.
- **Individual post pages** – converted from Markdown to HTML using
  [remark](https://github.com/remarkjs/remark) with SEO‑friendly metadata.
- **Projects** – showcases a selection of projects with descriptions,
  technologies and links to their repositories.
- **Contact** – simple form that opens the user's email client via `mailto:`.
- **Dark/Light mode** – toggle between themes with a button; the preference is
  saved in localStorage.
- **Responsive design** – built mobile‑first and scales gracefully across
  devices.

## Getting Started

To run the project locally you'll need [Node.js](https://nodejs.org/) installed.

```bash
git clone https://github.com/aviveldan/aviveldan-agentmode-blog.git
cd aviveldan-agentmode-blog
npm install
npm run dev
```

Visit `http://localhost:3000` in your browser to view the site. Modify the
content in the `content/posts` and `lib/projects.ts` files to customize
your posts and projects. Feel free to adjust the styling by editing the
components and the Tailwind configuration.

## Deploying

This project is ready to deploy on [Vercel](https://vercel.com/). Click the
button below to create a new deployment straight from this repository:

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https://github.com/aviveldan/aviveldan-agentmode-blog)

Alternatively, run the following command to build the application locally:

```bash
npm run build
npm start
```

## License

This project is open source and available under the [MIT License](LICENSE).

---

*Created by Aviv Eldan. Feel free to fork and adapt this site for your own use!*

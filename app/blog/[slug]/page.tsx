import React from 'react';
import { getAllPosts, getPostBySlug } from '../../../lib/posts';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';

interface Params {
  slug: string;
}

/**
 * Generate static params so Next.js knows which blog pages to pre-render.
 */
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Generate SEO metadata dynamically for each blog post using its title
 * and excerpt. This information will populate the appropriate meta tags
 * in the document head.
 */
export async function generateMetadata({ params }: { params: Params }) {
  const { meta } = getPostBySlug(params.slug);
  return {
    title: `${meta.title} – Aviv Eldan`,
    description: meta.excerpt,
  };
}

/**
 * The page component for an individual blog post. It converts the
 * markdown content to HTML using remark and outputs it using
 * dangerouslySetInnerHTML. When editing posts, make sure your
 * markdown content is sanitized if you accept user input.
 */
export default async function PostPage({ params }: { params: Params }) {
  const { meta, content } = getPostBySlug(params.slug);
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();
  const formattedDate = new Date(meta.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  return (
    <article className="prose dark:prose-invert max-w-none">
      <h1 className="mt-0 mb-2">{meta.title}</h1>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{formattedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      <div className="mt-8">
        <Link href="/blog" className="text-indigo-600 dark:text-indigo-400 hover:underline">
          \u2190 Back to all posts
        </Link>
      </div>
    </article>
  );
}
https://github.com/aviveldan/aviveldan-agentmode-blog/upload/main/app/blog/%5Bslug%5D

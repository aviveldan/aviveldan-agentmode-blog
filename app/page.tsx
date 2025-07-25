import React from 'react';
import Link from 'next/link';
import { getAllPosts } from '../lib/posts';
import PostCard from '../components/PostCard';

/**
 * The home page introduces Aviv, provides a brief biography and
 * displays a few of the most recent blog posts. Use this as a
 * starting point for customizing the look and feel of your site.
 */
export default async function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <section>
      {/* Hero section */}
      <div className="mb-12 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Hi, I'm Aviv Eldan</h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          I'm a software engineer at Microsoft passionate about building scalable web
          applications, exploring new technologies and sharing my knowledge with the
          community. Welcome to my personal blog and portfolio.
        </p>
      </div>
      {/* Latest posts */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Latest Posts</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
      <div className="flex justify-center space-x-4 mt-4">
        <Link
          href="/blog"
          className="px-5 py-2 bg-indigo-600 dark:bg-indigo-500 text-white rounded hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors"
        >
          View all posts
        </Link>
        <Link
          href="/projects"
          className="px-5 py-2 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors"
        >
          Explore projects
        </Link>
      </div>
    </section>
  );
}

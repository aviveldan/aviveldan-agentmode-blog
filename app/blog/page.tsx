import React from 'react';
import { getAllPosts } from '../../lib/posts';
import PostCard from '../../components/PostCard';

/**
 * Blog index page that lists all posts. Posts are sorted by date in
 * descending order. If you wish to fetch your posts from an API or CMS
 * instead of the filesystem you can modify getAllPosts accordingly.
 */
export const metadata = {
  title: 'Blog – Aviv Eldan',
  description: 'Read the latest posts and tutorials from Aviv Eldan.',
};

export default async function BlogPage() {
  const posts = getAllPosts();
  return (
    <section>
      <h1 className="text-3xl font-bold mb-6">Blog</h1>
      {posts.length === 0 ? (
        <p>No posts found. Check back later!</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
    </section>
  );
}

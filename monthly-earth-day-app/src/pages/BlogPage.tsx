import React, { useEffect, useState } from 'react';
import HeroSection from '/home/runner/monthly-earth-day-app/src/components/HeroSection'; // Assuming absolute path from root
import Card from '/home/runner/monthly-earth-day-app/src/components/Card';
import { fetchBlogPosts } from '/home/runner/monthly-earth-day-app/src/api';
import styles from './BlogPage.module.css'; // Assuming you'll create a CSS module for the page

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  author: string;
  date: Date;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const getBlogPosts = async () => {
      const posts = await fetchBlogPosts();
      setBlogPosts(posts);
    };

    getBlogPosts();
  }, []);

  return (
    <div className={styles.blogPageContainer}>
      <HeroSection title="Our Blog" subtitle="Stay updated with the latest news and articles." />
      
      <section className={styles.latestPostsSection}>
        <h2>Latest Posts</h2>
        <div className={styles.blogPostsGrid}>
          {blogPosts.map((post) => (
            <Card key={post.id}>
              <img src={post.imageUrl} alt={post.title} className={styles.blogPostImage} />
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              {/* You can add more post details here like author, date, tags */}
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
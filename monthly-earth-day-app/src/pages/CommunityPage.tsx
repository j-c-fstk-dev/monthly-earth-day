import React, { useEffect, useState } from 'react';
import HeroSection from '../components/HeroSection';
import { fetchCommunityPosts } from '../api';
import CommunityPost from '../components/CommunityPost';
import styles from './CommunityPage.module.css'; // Assuming a CSS module for styling

interface CommunityPost {
  id: string;
  author: string;
  content: string;
  simulatedMediaUrl: string | null;
  likes: number;
  comments: number;
}

const CommunityPage: React.FC = () => {
  const [communityPosts, setCommunityPosts] = useState<CommunityPost[]>([]);

  useEffect(() => {
    const getCommunityPosts = async () => {
      const posts = await fetchCommunityPosts();
      setCommunityPosts(posts);
    };
    getCommunityPosts();
  }, []);

  return (
    <div className={styles.communityPageContainer}>
      <HeroSection title="Community Hub" subtitle="Connect with other change-makers and share your impact." />
      <section className={styles.communityFeedSection}>
        <h2>Community Feed</h2>
        <div className={styles.communityPostsGrid}>
          {communityPosts.map((post) => (
            <CommunityPost key={post.id} post={post} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
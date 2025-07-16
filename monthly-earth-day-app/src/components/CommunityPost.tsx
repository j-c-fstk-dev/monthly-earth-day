import React from 'react';
import styles from './CommunityPost.module.css'; // Assuming a CSS module for styling

interface CommunityPost {
  id: string;
  author: string;
  content: string;
  simulatedMediaUrl: string | null;
  likes: number;
  comments: number;
}

interface CommunityPostProps {
  post: CommunityPost;
}

const CommunityPost: React.FC<CommunityPostProps> = ({ post }) => {
  return (
    <div className={styles.communityPostContainer}>
      <div className={styles.postHeader}>
        <span className={styles.author}>{post.author}</span>
        {/* Add avatar placeholder later */}
      </div>
      <div className={styles.postContent}>
        <p>{post.content}</p>
        {post.simulatedMediaUrl && (
          <div className={styles.mediaContainer}>
            {/* Basic check, could be more robust */}
            {post.simulatedMediaUrl.match(/\.(jpeg|jpg|png|gif)$/i) ? (
              <img src={post.simulatedMediaUrl} alt="Community Post Media" className={styles.postMedia} />
            ) : post.simulatedMediaUrl.match(/\.(mp4|webm|ogg)$/i) ? (
              <video controls src={post.simulatedMediaUrl} className={styles.postMedia} />
            ) : (
              <a href={post.simulatedMediaUrl} target="_blank" rel="noopener noreferrer">View Media</a>
            )}
          </div>
        )}
      </div>
      <div className={styles.postActions}>
        <span className={styles.likeCount}>Likes: {post.likes}</span>
        <span className={styles.commentCount}>Comments: {post.comments}</span>
        {/* Add like/comment buttons later */}
      </div>
    </div>
  );
};

export default CommunityPost;
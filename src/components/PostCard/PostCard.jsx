import React from "react";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const handlePostClick = () => {
    alert(`Title: ${post.title}\n\nContent: ${post.body}`);
  };

  return (
    <div className="post-card" onClick={handlePostClick}>
      <div>
        <strong className="post-title">{post.title}</strong>
      </div>
      <div className="post-content">{post.body}</div>
    </div>
  );
};

export default PostCard;

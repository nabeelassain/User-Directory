import React from "react";
import PostCard from "../components/PostCard/PostCard";

const PostsSection = ({ userId, posts }) => {
  const userPosts =
    posts && posts.filter((post) => post.userId === parseInt(userId));

  return (
    <div>
      <span className="section-title">
        <h2>Posts</h2>
      </span>
      <div className="posts-section">
        {userPosts &&
          userPosts.map((post) => <PostCard key={post.id} post={post} />)}
      </div>
    </div>
  );
};
export default PostsSection;

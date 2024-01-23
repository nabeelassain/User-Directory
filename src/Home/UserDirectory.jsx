import React from "react";
import UserCard from "../components/UserCard/UserCard";
import "./style.css";

const UserDirectory = ({ users, posts }) => {
  const calculatePostsCount = (userId) => {
    return posts.filter((post) => post.userId === userId).length;
  };

  return (
    <div>
      <span className="directory-title">
        <h1>User Directory</h1>
      </span>
      <div className="directory-cards-container">
        {users &&
          users.map((user) => (
            <UserCard
              key={user.id}
              user={user}
              postsCount={calculatePostsCount(user.id)}
            />
          ))}
      </div>
    </div>
  );
};

export default UserDirectory;

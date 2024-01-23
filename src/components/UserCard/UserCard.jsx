import React from "react";
import { Link } from "react-router-dom";
import "./UserCard.css";

const UserCard = ({ user, postsCount }) => {
  return (
    <Link to={`/user/${user.id}`} className="user-card-link">
      <div className="user-card">
        <div className="user-card-content">
          <div>{user.name}</div>
          <div>Posts: {postsCount || 0}</div>
        </div>
      </div>
    </Link>
  );
};

export default UserCard;

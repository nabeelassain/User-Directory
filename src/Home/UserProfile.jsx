import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import UserDetailsSection from "../components/UserDetails/UserDetailsSection";
import PostsSection from "./PostsSection";
import ClockSection from "./ClockSection";
import "./style.css";

const UserProfile = ({ users, posts }) => {
  const { userId } = useParams();

  return (
    <div>
      <div className="user-profile-header">
        <ClockSection />
      </div>
      <UserDetailsSection users={users} userId={userId} posts={posts} />
      <PostsSection userId={userId} posts={posts} />
    </div>
  );
};

export default UserProfile;

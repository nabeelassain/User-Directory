import logo from "./logo.svg";
import "./App.css";
import UserList from "./Home/UserList";
import { Route, Routes } from "react-router-dom";
import UserProfile from "./Home/UserProfile";
import React, { useState, useEffect } from "react";
import useUserData from "./utils/useUserData";

function App() {
  const { users, posts } = useUserData();

  return (
    <Routes>
      <Route path="/" element={<UserList users={users} posts={posts} />} />
      <Route
        path="/user/:userId"
        element={<UserProfile users={users} posts={posts} />}
      />
    </Routes>
  );
}

export default App;

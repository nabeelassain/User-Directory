import React from "react";
import UserDirectory from "./UserDirectory";

const UserList = function ({ users, posts }) {
  return <UserDirectory users={users} posts={posts} />;
};

export default UserList;

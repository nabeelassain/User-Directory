import { useState, useEffect } from "react";
import API from "./API";

const useUserData = () => {
  const [users, setUsers] = useState([]);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const usersResponse = await API.getUsers();
        const usersData = await usersResponse.json();
        setUsers(usersData);

        const postsResponse = await API.getPosts();
        const postsData = await postsResponse.json();
        setPosts(postsData);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);

  return { users, posts };
};

export default useUserData;

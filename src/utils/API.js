const getUsers = async function () {
  try {
    return fetch("https://jsonplaceholder.typicode.com/users");
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};

const getPosts = async function () {
  try {
    return fetch("https://jsonplaceholder.typicode.com/posts");
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw error;
  }
};

const getCountries = async function () {
  try {
    const response = await fetch("http://worldtimeapi.org/api/timezone");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    throw error;
  }
};

const getTime = async function (timezone) {
  try {
    return fetch(`http://worldtimeapi.org/api/timezone/${timezone}`).then(
      (response) => response.json()
    );
  } catch (error) {
    console.error("Error fetching time:", error);
    throw error;
  }
};

export default {
  getUsers,
  getPosts,
  getCountries,
  getTime,
};

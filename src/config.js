const URL_API = "https://json-server-library.onrender.com/";

const endpoints = {
  books: `${URL_API}library`,
  bookById: (id) => `${URL_API}library/${id}`,
  users: `${URL_API}users`,
};

export default endpoints;

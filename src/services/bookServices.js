import axios from "axios";
import endpoints from "../config";

export const getBooks = async () => {
  try {
    const response = await axios.get(endpoints.books);
    // console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

export const getBookById = async (bookId) => {
  try {
    const { data } = await axios.get(endpoints.bookById(bookId));
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

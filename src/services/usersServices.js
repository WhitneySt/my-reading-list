import axios from "axios";
import endpoints from "../config";

export const getUserByEmailAndPassword = async ({email, password}) => {
  try {
    const { data } = await axios.get(endpoints.users);
    return data && data.length > 0
      ? data.find((user) => user.email === email && user.password === password)
      : null;
  } catch (error) {
    console.error(error);
    return null;
  }
};

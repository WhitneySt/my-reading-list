import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import { getBooks } from "../services/bookServices";
import Details from "../pages/Details/Details";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import NoMatch from "../pages/NoMatch/NoMatch";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRouter = () => {
  const [books, setBooks] = useState([]);
  const [isAuth, setIsAuth] = useState(false);

  const fetchBooks = useCallback(() => {
    getBooks()
      .then((response) => {
        setBooks(response);
      })
      .catch((error) => console.warn(error));
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route element={<PrivateRoutes isAuthenticated={isAuth} />}>
              <Route
                index
                element={<Home books={books} setBooks={setBooks} />}
              />
              <Route path="book/:bookId" element={<Details />} />
            </Route>
            <Route element={<PublicRoutes isAuthenticated={isAuth} />}>
              <Route path="login" element={<Login setAuth={setIsAuth} />} />
              <Route path="register" element={<Register />} />
            </Route>

            {/* <Route path="*" element={<Navigate to={"/"} />} /> */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import Layout from "../components/Layout/Layout";
import Home from "../pages/Home/Home";
import { getBooks } from "../services/bookServices";
import Details from "../pages/Details/Details";

const AppRouter = () => {
  const [books, setBooks] = useState([]);

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
            <Route index element={<Home books={books} setBooks={setBooks} />} />
            <Route path="book/:bookId" element={ <Details/>} />
            {/*             <Route
              path="/"
              element={<Home books={books} setBooks={setBooks} />}
            >
              <Route path="book/:title" element={<Details books={books} />} />
            </Route> */}
          </Route>
          {/*           <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </Router>
    </>
  );
};

export default AppRouter;

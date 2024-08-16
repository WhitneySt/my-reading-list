import { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getBookById } from "../../services/bookServices";

const Details = () => {
  const navigate = useNavigate();
  const { bookId } = useParams();
  const [book, setBook] = useState({});

  const fetchBookById = useCallback(() => {
    getBookById(bookId)
      .then((response) => {
        console.log(response);
        setBook(response);
      })
      .catch((error) => console.warn(error));
  }, [bookId]);

  useEffect(() => {
    fetchBookById();
  }, [fetchBookById]);

  return (
    <>
      <button onClick={() => navigate("..")}>Atras</button>
      {Object.entries(book).length > 0 ? (
        <main>
          <h1>{book.book.title}</h1>
          <figure>
            <img src={book.book.cover} alt={book.book.title} />
            <figcaption>{book.book.synopsis}</figcaption>
          </figure>
        </main>
      ) : (
        "...Cargando"
      )}
    </>
  );
};

export default Details;

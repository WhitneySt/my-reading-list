import PropTypes from "prop-types";
// import ComoAgua from "../../assets/1.jpg";
// import LaMujer from "../../assets/1.jpg";
import styled from "styled-components";
import Card from "../../components/Card/Card";

const StyledCards = styled.main`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
// const books2 = [
//   { title: "Como agua para chocolate", image: ComoAgua },
//   { title: "La mujer tiene la palabra", image: LaMujer },
// ];

const Home = ({ books, setBooks }) => { 
  return (
    <StyledCards>
      {books.length > 0 ? (
        books.map((book, index) => (
          <Card
            key={index}
            book={book}            
          />
        ))
      ) : (
        <p>No hay libros disponibles.</p>
      )}
      ;
    </StyledCards>
  );
};

Home.propTypes = {
  books: PropTypes.array.isRequired,
  setBooks: PropTypes.func.isRequired,
};

export default Home;

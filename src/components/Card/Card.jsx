import styled from "styled-components";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const StyledFigure = styled.figure`
  width: 250px;
  height: 400px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    /* transition: transform 0.3s ease; */
  }
`;

const Card = ({ book }) => {
   const navigate = useNavigate();
  return (
    <StyledFigure
      onClick={() => {
        console.log("hice click");
        navigate(`/book/${book.id}`);
      }}
    >
      <img src={book.book.cover} alt={book.book.title} />
    </StyledFigure>
  );
};

Card.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Card;

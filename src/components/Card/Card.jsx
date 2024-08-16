import styled from "styled-components";
import PropTypes from "prop-types";

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
  return (
    <StyledFigure>
      <img src={book.cover} alt={book.title} />
    </StyledFigure>
  );
};

Card.propTypes = {
  book: PropTypes.object.isRequired,
};

export default Card;

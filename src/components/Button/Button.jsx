import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

const Button = ({ onClick }) => {
  const handleClick = () => {
    onClick(prevState => prevState + 1);
  };

  return (
    <ButtonLoadMore type="button" onClick={handleClick}>
      Load More
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Button;

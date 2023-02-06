import PropTypes from 'prop-types';

import css from './Button.module.css';

const Button = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={css.Button} type="button">
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

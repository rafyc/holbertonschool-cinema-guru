import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './general.css'

const Button = ({ label, className, onClick, icon, size }) => {
  return (
    <button
      className={`button-${className} ${size}`}
      type='button'
      onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  )
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  icon: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  className: '',
  onClick: () => { },
  icon: '',
};

export default Button;

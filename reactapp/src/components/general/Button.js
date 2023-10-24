import React from 'react';
import PropTypes from 'prop-types';
import './general.css'

const Button = ({ label, className, onClick, icon }) => {
  return (
    <button
      className={className}
      type='button'
      onclick={onClick}
      icon={icon}>
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

import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import './general.css'

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

  const [inputValue, SetInputValue] = useState(value)
  const handleInput = (e) => {
    SetInputValue(e.target.value)
    setValue(e.target.value)
  }

  return (
    <>
      <div className={`input-${className}`}>
        <label htmlFor={`label-${className}`}>
          <div className={`icon-${className}`}>
            {icon && <FontAwesomeIcon icon={icon} />}
            {label}
          </div>
          <input
            id={`label-${className}`}
            type={type}
            value={inputValue}
            onChange={handleInput}
            {...inputAttributes}
          />
        </label>
      </div>
    </>
  )
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
  icon: PropTypes.string,
  inputAttributes: PropTypes.object
};

Input.defaultProps = {
  label: '',
  type: '',
  className: '',
  value: undefined,
  setValue: () => { },
  icon: '',
  inputAttributes: {}
};

export default Input;

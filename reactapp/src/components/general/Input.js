import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css'

const Input = ({ label, type, className, value, setValue, icon, inputAttributes }) => {

  const [inputValue, SetInputValue] = useState(value)
  const handleInput = (e) => {
    SetInputValue(e.target.value)
    // setValue(e.target.value)
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

export default Input;

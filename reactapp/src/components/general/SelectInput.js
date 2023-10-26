import React from 'react';
import PropTypes from 'prop-types';
import './general.css'

const SelectInput = ({ label, options, className, value, setValue }) => {

  const handleSelect = (e) => {
    setValue(e.target.value)
    console.log(e.target.value);

  }

  const optionsToSelect = options.map((option) => <option key={option} value={option}>{option}</option>)

  return (
    <>
      <label htmlFor={`label-select-${className}`}>{label}:</label>
      <select
        name={className}
        id={`label-select-${className}`}
        value={value}
        onChange={handleSelect}>
        {optionsToSelect}
      </select>
    </>
  )
}

SelectInput.propTypes = {
  label: PropTypes.string,
  options: PropTypes.array,
  className: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired,
  setValue: PropTypes.func.isRequired,
};

SelectInput.defaultProps = {
  label: '',
  options: [],
  className: '',
  value: undefined,
  setValue: () => { },
};

export default SelectInput;

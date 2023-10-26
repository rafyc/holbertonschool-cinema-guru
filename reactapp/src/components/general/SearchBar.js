import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './general.css'

const SearchBar = ({ title, setTitle }) => {

  const handleInput = (e) => {
    setTitle(e)
  }
  return (
    <div className='search-input'>
      <FontAwesomeIcon icon={'fa-search'} />
      <input type="text" placeholder={title} onChange={handleInput} />
    </div>
  )
}

SearchBar.propTypes = {
  title: PropTypes.string.isRequired,
  setTitle: PropTypes.func.isRequired
};

SearchBar.defaultProps = {
  title: '',
  setTitle: () => { }
};

export default SearchBar;

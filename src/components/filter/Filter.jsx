import { Component } from 'react';
import PropTypes from 'prop-types';
import css from './filter.module.css';
const Filter = ({ value, onChange }) => {
  return (
    <div className={css.filter}>
      <input
        placeholder="type name for search"
        type="text"
        value={value}
        name="filter"
        onChange={onChange}
      />
    </div>
  );
};
Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
export default Filter;

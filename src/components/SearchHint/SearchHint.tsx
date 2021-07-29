import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchHint.scss';

interface SearchHintProps {
  hint: string;
}

export const SearchHint: React.FC<SearchHintProps> = ({ hint }) => (
  <Link className="searchHint__link" to={`/profile/${hint}`}>
    <li className="searchHint">{hint}</li>
  </Link>
);

SearchHint.propTypes = {
  hint: PropTypes.string.isRequired
};

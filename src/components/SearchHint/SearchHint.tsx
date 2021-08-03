import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './SearchHint.scss';

interface SearchHintProps {
  displayName: string;
  id: string;
}

export const SearchHint: React.FC<SearchHintProps> = ({ displayName, id }) => (
  <Link className="searchHint__link" to={`/user/${id}`}>
    <li className="searchHint">{displayName}</li>
  </Link>
);

SearchHint.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired
};

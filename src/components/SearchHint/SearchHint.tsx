import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import './SearchHint.scss';

interface SearchHintProps {
  displayName: string;
  id: string;
  avatar: string;
}

export const SearchHint: React.FC<SearchHintProps> = ({ displayName, id, avatar }) => (
  <Link className="searchHint__link" to={`/user/${id}`}>
    <li className="searchHint">
      <div className="searchHint__info">
        <span>{displayName}</span>
        <span>headline</span>
      </div>
      <Avatar className="searchHint__avatar" src={avatar} />{' '}
    </li>
  </Link>
);

SearchHint.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired
};

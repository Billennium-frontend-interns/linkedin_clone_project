import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Avatar } from '@material-ui/core';
import { User } from '../../shared/interfaces/UserInterfaces';
import { useDarkMode } from '../../context/DarkModeProvider';
import './SearchHint.scss';

export const SearchHint: React.FC<User> = ({ displayName, id, avatar, headline }) => {
  const { isDarkMode } = useDarkMode();

  return (
    <Link className="searchHint__link" to={`/user/${id}`}>
      <li className={classNames('searchHint', { 'searchHint--dark': isDarkMode })}>
        <div className="searchHint__info">
          <span className="searchHint__name">{displayName}</span>
          <span>{headline}</span>
        </div>
        <Avatar className="searchHint__avatar" src={avatar} />
      </li>
    </Link>
  );
};

SearchHint.propTypes = {
  displayName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  headline: PropTypes.string.isRequired
};

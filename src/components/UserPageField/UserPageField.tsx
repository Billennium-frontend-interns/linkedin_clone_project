import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import { UserPageFieldInterface, fields } from '../../shared/interfaces/ProfileFieldInterfaces';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { useDarkMode } from '../../context/DarkModeProvider';
import { updateProfileFields } from '../../actions/updateProfileFields';
import './UserPageField.scss';

export const UserPageField: React.FC<UserPageFieldInterface<fields>> = ({
  data,
  isLoading,
  isError,
  isOwner
}: UserPageFieldInterface<fields>) => {
  const { isDarkMode } = useDarkMode();

  return (
    <WithLoader isLoading={isLoading}>
      <WithError isError={isError} errorMessage="Couldn't get user data">
        <article className={classNames('userPageField', { 'userPageField--dark': isDarkMode })}>
          {isOwner && (
            <IconButton
              onClick={() => updateProfileFields(data, 'delete')}
              className={classNames('userPageField__delete', { 'userPageField__delete--dark': isDarkMode })}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          )}
          <h3 className="userPageField__title">{data.title}</h3>
          <ul>
            {Object.entries(data.content).map(([, fieldEntry], id) => (
              // eslint-disable-next-line
              <li key={id} className="userPageField__entries">
                {fieldEntry}
              </li>
            ))}
          </ul>
        </article>
      </WithError>
    </WithLoader>
  );
};

UserPageField.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.shape({
      name: PropTypes.string.isRequired
    }).isRequired,
    title: PropTypes.string.isRequired
  }).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired
};

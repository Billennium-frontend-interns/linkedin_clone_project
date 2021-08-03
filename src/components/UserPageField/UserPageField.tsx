import React from 'react';
import PropTypes from 'prop-types';
import { UserPageFieldProps } from '../../shared/interfaces/ProfileFieldInterfaces';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import './UserPageField.scss';

export const UserPageField: React.FC<UserPageFieldProps> = ({ data, isLoading, isError }: UserPageFieldProps) => (
  <WithLoader isLoading={isLoading}>
    <WithError isError={isError} errorMessage="Couldn't get user data">
      <article className="userPageField">
        <title className="userPageField__title">{data.title}</title>
        <ul>
          {Object.entries(data.content).map(el => (
            <li key={el[1]} className="userPageField__entries">
              {el[1]}
            </li>
          ))}
        </ul>
      </article>
    </WithError>
  </WithLoader>
);

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

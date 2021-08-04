import React from 'react';
import PropTypes from 'prop-types';
import { UserPageFieldInterface, fields } from '../../shared/interfaces/ProfileFieldInterfaces';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import './UserPageField.scss';

export const UserPageField: React.FC<UserPageFieldInterface<fields>> = ({
  data,
  isLoading,
  isError
}: UserPageFieldInterface<fields>) => (
  <WithLoader isLoading={isLoading}>
    <WithError isError={isError} errorMessage="Couldn't get user data">
      <article className="userPageField">
        <h3 className="userPageField__title">{data.title}</h3>
        <ul>
          {Object.entries(data.content).map(([, fieldEntry]) => (
            <li key={fieldEntry} className="userPageField__entries">
              {fieldEntry}
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

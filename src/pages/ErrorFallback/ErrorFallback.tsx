import React from 'react';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import RefreshIcon from '@material-ui/icons/Refresh';
import './ErrorFallback.scss';

export const ErrorFallback: React.FC = () => {
  const reloadPage = () => {
    window.location.reload();
    return false;
  };

  return (
    <article className="errorFallback">
      <h1 className="errorFallback__title">
        Something went wrong. Refresh the page.
        <SentimentVeryDissatisfiedIcon className="errorFallback__icon--sad" />
      </h1>
      <RefreshIcon className="errorFallback__icon" onClick={reloadPage} />
    </article>
  );
};

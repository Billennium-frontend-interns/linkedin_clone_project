import React, { useRef, useState, MutableRefObject } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import moment from 'moment';
import { useIsContentOverflowing } from '../../actions/useIsContentOverflowing';
import './FeedPost.scss';

export interface FeedPostProps {
  ownerUid: string;
  displayName: string;
  avatar: string;
  content: string;
  timestamp: string;
  testid?: string;
}

export const FeedPost: React.FC<FeedPostProps> = ({
  ownerUid,
  displayName,
  avatar,
  content,
  timestamp,
  testid
}: FeedPostProps) => {
  const [seeMore, setSeeMore] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLParagraphElement>;
  const isContentOverflowing = useIsContentOverflowing(ref);
  const timePassed = moment(timestamp).startOf('hour').fromNow();

  return (
    <article className="feedPost__container">
      <Link className="feedPost__user" data-testid={`"feedPost__user--${testid}`} to={`/user/${ownerUid}`}>
        <img className="feedPost__avatar" src={avatar} alt={`${displayName}'s avatar`} />
        <p className="feedPost__name">{displayName}</p>
      </Link>
      <p ref={ref} className={`feedPost__content feedPost__content--see__${!seeMore && 'less'}`}>
        {content.trim()}
      </p>
      {isContentOverflowing && !seeMore && (
        <button
          data-testid={`"feedPost__seeButton--${testid}`}
          type="button"
          className={`feedPost__seeButton feedPost__seeButton--see__${!seeMore && 'less'}`}
          onClick={() => {
            setSeeMore(!seeMore);
          }}
        >
          ...see more
        </button>
      )}
      <p className="feedPost__timestamp">{timePassed}</p>
    </article>
  );
};

FeedPost.defaultProps = {
  testid: ''
};

FeedPost.propTypes = {
  ownerUid: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  testid: PropTypes.string
};

import React, { useRef, useState, MutableRefObject } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { useIsContentOverflowing } from '../../actions/useIsContentOverflowing';
import './FeedPost.scss';

interface FeedPostProps {
  uid: string;
  displayName: string;
  avatar: string;
  content: string;
  timestamp: string;
}

export const FeedPost: React.FC<FeedPostProps> = ({ uid, displayName, avatar, content, timestamp }: FeedPostProps) => {
  const [seeMore, setSeeMore] = useState(false);
  const ref = useRef() as MutableRefObject<HTMLParagraphElement>;
  const isContentOverflowing = useIsContentOverflowing(ref);
  const timePassed = moment(timestamp).startOf('hour').fromNow();

  return (
    <article className="feedPost__container">
      <Link className="feedPost__user" to={`/user/${uid}`}>
        <img className="feedPost__avatar" src={avatar} alt={`${displayName}'s avatar`} />
        <p className="feedPost__name">{displayName}</p>
      </Link>
      <p ref={ref} className={`feedPost__content feedPost__content--see__${seeMore ? null : 'less'}`}>
        {content.trim()}
      </p>
      {isContentOverflowing && !seeMore && (
        <button
          type="button"
          className={`feedPost__seeButton feedPost__seeButton--see__${seeMore ? null : 'less'}`}
          onClick={() => {
            setSeeMore(!seeMore);
          }}
        >
          {`...see ${!seeMore ? 'more' : 'less'}`}
        </button>
      )}
      <p className="feedPost__timestamp">{timePassed}</p>
    </article>
  );
};

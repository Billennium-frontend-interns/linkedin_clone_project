import React, { useRef, useState, MutableRefObject } from 'react';
import moment from 'moment';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import AvatarPlaceholder from '../../assets/images/avatar_placeholder.png';
import { useGetUserData } from '../../actions/useGetUserData';
import { useIsContentOverflowing } from '../../actions/useIsContentOverflowing';
import { useDarkMode } from '../../context/DarkModeProvider';
import './FeedPost.scss';

export interface FeedPostProps {
  ownerUid: string;
  content: string;
  timestamp: firebase.default.firestore.Timestamp;
  testid?: string;
}

export const FeedPost: React.FC<FeedPostProps> = ({ ownerUid, content, timestamp, testid }: FeedPostProps) => {
  const [seeMore, setSeeMore] = useState(false);
  const { isDarkMode } = useDarkMode();
  const ref = useRef() as MutableRefObject<HTMLParagraphElement>;
  const isContentOverflowing = useIsContentOverflowing(ref);
  const timePassed = moment.unix(timestamp.seconds).fromNow();
  const {
    userData: { avatar, displayName, headline }
  } = useGetUserData(ownerUid);

  return (
    <article className={classNames('feedPost', { 'feedPost--dark': isDarkMode })}>
      <Link className="feedPost__user" data-testid={`"feedPost__user--${testid}`} to={`/user/${ownerUid}`}>
        <img className="feedPost__avatar" src={avatar || AvatarPlaceholder} alt={`${displayName}'s avatar`} />
        <div className={classNames('feedPost__info', { 'feedPost__info--dark': isDarkMode })}>
          <span className="feedPost__name">{displayName}</span>
          <span>{headline}</span>
        </div>
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

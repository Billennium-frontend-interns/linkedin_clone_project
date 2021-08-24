import React from 'react';
import classNames from 'classnames';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { FeedList } from '../../components/FeedList/FeedList';
import { Header } from '../../components/Header/Header';
import { useDarkMode } from '../../context/DarkModeProvider';
import './Feed.scss';

export const Feed: React.FC = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={classNames('feed', { 'feed--dark': isDarkMode })}>
      <Header testid="feedPageHeader" />
      <div className="feed__createPost">
        <CreatePost />
      </div>
      <FeedList />
    </div>
  );
};

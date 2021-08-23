import React, { useContext } from 'react';
import classnames from 'classnames';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { FeedList } from '../../components/FeedList/FeedList';
import { Header } from '../../components/Header/Header';
import { DarkModeContext } from '../../context/DarkModeProvider';
import './Feed.scss';

export const Feed: React.FC = () => {
  const [isDarkMode] = useContext(DarkModeContext);
  return (
    <div className={classnames('feed', { 'feed--dark': isDarkMode })}>
      <Header testid="feedPageHeader" />
      <div className="feed__createPost">
        <CreatePost />
      </div>
      <FeedList />
    </div>
  );
};

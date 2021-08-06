import React from 'react';
import { ToastContainer } from 'react-toastify';
import { CreatePost } from '../../components/CreatePost/CreatePost';
import { FeedList } from '../../components/FeedList/FeedList';
import { Header } from '../../components/Header/Header';
import './Feed.scss';

export const Feed: React.FC = () => (
  <div className="feed">
    <Header />
    <div className="feed__createPost">
      <CreatePost />
    </div>
    <FeedList />
    <ToastContainer />
  </div>
);

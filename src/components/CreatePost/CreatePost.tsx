import React, { useState, useContext } from 'react';
import { TextField, Avatar, Button } from '@material-ui/core';
import { setPost } from '../../actions/setPost';
import { AuthContext } from '../../context/AuthProvider';
import './CreatePost.scss';

export const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState('');
  const currentUser = useContext(AuthContext);

  const generateDate = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1 < 10 ? `0${date.getMonth()}` : date.getMonth();
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds();
    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setPost({
      ownerUid: currentUser?.uid,
      content: postText,
      displayName: currentUser?.displayName,
      timestamp: generateDate(),
      avatar: currentUser?.photoURL
    });

    setPostText('');
  };

  return (
    <article className="create-post">
      <Avatar className="avatar" />
      <form className="share-box" onSubmit={handleSubmit}>
        <TextField
          multiline
          placeholder="What do you want to say?"
          value={postText}
          onChange={handleChange}
          className="share-box__text"
          data-testid="textPost"
        />
        <Button
          variant="contained"
          color="primary"
          size="small"
          type="submit"
          className="share-box__add-post"
          data-testid="addPost"
        >
          Add Post
        </Button>
      </form>
    </article>
  );
};

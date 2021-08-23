import React, { useState, useContext } from 'react';
import classnames from 'classnames';
import { TextField, Avatar, Button } from '@material-ui/core';
import { setPost } from '../../actions/setPost';
import { AuthContext } from '../../context/AuthProvider';
import { customToast } from '../../actions/customToast';
import { DarkModeContext } from '../../context/DarkModeProvider';
import './CreatePost.scss';

export const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState('');
  const [isDarkMode] = useContext(DarkModeContext);
  const currentUser = useContext(AuthContext);
  const MAX_INPUT_LENGTH = 300;

  const isNicknameValid = postText.trim() !== '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault();
    if (isNicknameValid) {
      setPost({
        ownerUid: currentUser?.uid as string,
        content: postText,
        displayName: currentUser?.displayName as string,
        avatar: currentUser?.photoURL as string
      });
    } else {
      customToast('error', "Post text can't be empty", false);
    }
    setPostText('');
  };

  return (
    <article data-testid="createPost" className={classnames('create-post', { 'create-post--dark': isDarkMode })}>
      <div className="share-box">
        <Avatar className="avatar" src={currentUser?.photoURL || ''} />
        <TextField
          multiline
          placeholder="What do you want to say?"
          value={postText}
          onChange={handleChange}
          className="share-box__text"
          data-testid="textPost"
          inputProps={{ maxLength: MAX_INPUT_LENGTH }}
        />
      </div>
      <Button
        type="button"
        variant="contained"
        color="primary"
        size="small"
        className="share-box__add-post"
        data-testid="addPost"
        onClick={handleSubmit}
      >
        Add Post
      </Button>
    </article>
  );
};

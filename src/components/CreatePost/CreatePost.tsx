import React, { useState, useContext } from 'react';
import { TextField, Avatar, Button } from '@material-ui/core';
import { generateDate } from '../../utilities/date';
import { setPost } from '../../actions/setPost';
import { AuthContext } from '../../context/AuthProvider';
import { customToast } from '../../actions/customToast';
import './CreatePost.scss';

export const CreatePost: React.FC = () => {
  const [postText, setPostText] = useState('');
  const currentUser = useContext(AuthContext);

  const isNicknameValid = postText.trim() !== '';

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPostText(event.target.value);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (isNicknameValid) {
      setPost({
        ownerUid: currentUser?.uid as string,
        content: postText,
        displayName: currentUser?.displayName as string,
        timestamp: generateDate(),
        avatar: currentUser?.photoURL as string
      });
    } else {
      customToast('error', "Post text can't be empty", false);
    }
    setPostText('');
  };

  return (
    <article data-testid="createPost" className="create-post">
      <Avatar className="avatar" src={currentUser?.photoURL || ''} />
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

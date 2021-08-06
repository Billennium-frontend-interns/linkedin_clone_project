import React, { useState, useEffect, useContext } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Button, TextField } from '@material-ui/core';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { AuthContext } from '../../context/AuthProvider';
import { useGetUserData } from '../../actions/useGetUserData';
import { editProfile } from '../../actions/editProfile';
import { updateAvatar } from '../../actions/updateAvatar';
import { User } from '../../shared/interfaces/UserInterfaces';
import './EditProfileForm.scss';

export const EditProfileForm: React.FC = () => {
  const MIN_NICKNAME_CHARACTERS = 3;
  const MAX_NICKNAME_CHARACTERS = 30;
  const MAX_BIO_CHARACTERS = 300;
  const initialFormData = {
    displayName: '',
    bio: ''
  };
  const currentUser = useContext(AuthContext);
  const [shouldDataChange, setShouldDataChange] = useState(false);
  const [formData, setFormData] = useState(initialFormData);

  const { userData, isLoading, isError } = useGetUserData(currentUser?.uid as string);

  useEffect(() => {
    setFormData(userData);
    return () => setFormData(initialFormData);
  }, [userData]);

  const isNicknameNotValid =
    formData.displayName.trim() === '' ||
    formData.displayName.length < MIN_NICKNAME_CHARACTERS ||
    formData.displayName.length > MAX_NICKNAME_CHARACTERS;
  const isBioNotValid = formData.bio.length >= MAX_BIO_CHARACTERS;

  const validateForm = (): boolean => !isNicknameNotValid && !isBioNotValid;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setShouldDataChange(true);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (validateForm()) {
      if (event.target.avatar.files[0]) {
        updateAvatar(currentUser?.uid as string, event.target.avatar.files[0]);
      }
      editProfile(currentUser?.uid as string, formData as User);
      setShouldDataChange(false);
    }
  };

  return (
    <WithLoader isLoading={isLoading}>
      <WithError isError={isError} errorMessage="Something went wrong please try again...">
        <form className="editForm" onSubmit={handleSubmit}>
          <TextField
            className="editForm__field"
            variant="outlined"
            label="Enter new name"
            type="text"
            name="displayName"
            id="displayName"
            error={isNicknameNotValid}
            helperText={
              isNicknameNotValid ? 'Nickname must be longer than 3 characters and shorter than 30 characters' : ''
            }
            value={formData.displayName}
            onChange={handleChange}
            data-testid="displayName"
          />
          <TextField
            className="editForm__field"
            variant="outlined"
            label="Enter new Bio"
            type="text"
            name="bio"
            id="bio"
            error={isBioNotValid}
            helperText={isBioNotValid ? 'Bio must be shorter than 300 characters' : ''}
            value={formData.bio}
            onChange={handleChange}
            rows={2}
            multiline
            data-testid="bio"
          />
          <DropzoneArea
            dropzoneText="Enter new avatar"
            dropzoneParagraphClass="dropzone__text"
            filesLimit={1}
            showAlerts={false}
            onDrop={() => setShouldDataChange(true)}
            inputProps={{
              id: 'avatar',
              name: 'avatar'
            }}
          />
          <Button variant="contained" color="primary" type="submit" disabled={!shouldDataChange}>
            Edit
          </Button>
        </form>
      </WithError>
    </WithLoader>
  );
};

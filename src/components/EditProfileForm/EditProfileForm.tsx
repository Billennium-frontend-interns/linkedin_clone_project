import React, { useState, useEffect, useContext } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import { Button, TextField } from '@material-ui/core';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { AuthContext } from '../../context/AuthProvider';
import { useGetUserData } from '../../actions/useGetUserData';
import { editProfile } from '../../actions/editProfile';
import { updateAvatar } from '../../actions/updateAvatar';
import './EditProfileForm.scss';

export const EditProfileForm: React.FC = () => {
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

  const isNicknameValid = formData.displayName.length < 3 || formData.displayName.length > 30;
  const isBioValid = formData.bio.length >= 500;

  const validateForm = (): boolean => {
    if (formData.displayName.trim() === '') {
      return false;
    }
    return !isNicknameValid && !isBioValid;
  };

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
      editProfile(currentUser?.uid as string, formData);
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
            error={isNicknameValid}
            helperText={
              isNicknameValid ? 'Nickname must be longer than 3 characters and shorter than 30 characters' : ''
            }
            value={formData.displayName}
            onChange={handleChange}
          />
          <TextField
            className="editForm__field"
            variant="outlined"
            label="Enter new Bio"
            type="text"
            name="bio"
            id="bio"
            error={isBioValid}
            helperText={isBioValid ? 'Bio must be shorter than 500 characters' : ''}
            value={formData.bio}
            onChange={handleChange}
            rows={6}
            multiline
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

import React, { useState, useEffect, useContext } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { DropzoneArea } from 'material-ui-dropzone';
import { Button, TextField } from '@material-ui/core';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { AuthContext } from '../../context/AuthProvider';
import { useGetUserData } from '../../actions/useGetUserData';
import { editProfile } from '../../actions/editProfile';
import { updateAvatar } from '../../actions/updateAvatar';
import { User } from '../../shared/interfaces/UserInterfaces';
import { customToast } from '../../actions/customToast';
import { useDarkMode } from '../../context/DarkModeProvider';
import './EditProfileForm.scss';

interface EditProfileFormProps {
  closeModal: () => void;
}

export const EditProfileForm: React.FC<EditProfileFormProps> = ({ closeModal }) => {
  const MIN_NICKNAME_CHARACTERS = 3;
  const MAX_NICKNAME_CHARACTERS = 30;
  const MAX_HEADLINE_CHARACTERS = 30;
  const initialFormData = {
    displayName: '',
    headline: ''
  };
  const currentUser = useContext(AuthContext);
  const [shouldDataChange, setShouldDataChange] = useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const { isDarkMode } = useDarkMode();
  const { userData, isLoading, isError } = useGetUserData(currentUser?.uid as string);

  useEffect(() => {
    setFormData(userData);
    return () => setFormData(initialFormData);
  }, [userData]);

  const isNicknameNotValid =
    formData.displayName.trim() === '' ||
    formData.displayName.length < MIN_NICKNAME_CHARACTERS ||
    formData.displayName.length > MAX_NICKNAME_CHARACTERS;
  const isHeadlineNotValid = formData.headline.length >= MAX_HEADLINE_CHARACTERS;

  const validateForm = (): boolean => !isNicknameNotValid && !isHeadlineNotValid;

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
      closeModal();
    }
  };

  const rejectFiles = () => {
    customToast('error', 'Enter image with correct extension', false);
  };

  return (
    <WithLoader isLoading={isLoading}>
      <WithError isError={isError} errorMessage="Something went wrong please try again...">
        <form className="editForm" onSubmit={handleSubmit}>
          <TextField
            className={classNames('editForm__field', { 'editForm__field--dark': isDarkMode })}
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
            className={classNames('editForm__field', { 'editForm__field--dark': isDarkMode })}
            variant="outlined"
            label="Enter new headline"
            type="text"
            name="headline"
            id="headline"
            error={isHeadlineNotValid}
            helperText={isHeadlineNotValid ? 'Headline must be shorter than 30 characters' : ''}
            value={formData.headline}
            onChange={handleChange}
            rows={2}
            multiline
            data-testid="bio"
          />
          <DropzoneArea
            dropzoneText="Enter new avatar"
            dropzoneParagraphClass="dropzone__text"
            acceptedFiles={['image/*']}
            filesLimit={1}
            showAlerts={false}
            onDrop={() => setShouldDataChange(true)}
            onDropRejected={rejectFiles}
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

EditProfileForm.propTypes = {
  closeModal: PropTypes.func.isRequired
};

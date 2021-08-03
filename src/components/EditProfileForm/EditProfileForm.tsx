import React, { useState, useEffect } from 'react';
import { Button, TextField } from '@material-ui/core';
import { WithLoader } from '../WithLoader/WithLoader';
import { WithError } from '../WithError/WithError';
import { auth } from '../../firebase';
import { UserData } from '../../shared/interfaces/UserInterfaces';
import { useGetUserData } from '../../actions/useGetUserData';
import { editProfile } from '../../actions/editProfile';

export const EditProfileForm: React.FC = () => {
  const [shouldDataChange, setShouldDataChange] = useState(false);
  const [formData, setFormData] = useState<UserData>({
    displayName: '',
    avatar: '',
    bio: ''
  });

  const { userData, isLoading, isError } = useGetUserData(auth.currentUser?.uid as string);

  useEffect(() => {
    setFormData(userData);
  }, [userData]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setShouldDataChange(true);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    editProfile(auth.currentUser?.uid as string, formData);
    setShouldDataChange(false);
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
            value={formData.displayName}
            onChange={handleChange}
          />
          <TextField
            className="editForm__field"
            variant="outlined"
            label="Enter new avatar"
            type="text"
            name="avatar"
            id="avatar"
            value={formData.avatar}
            onChange={handleChange}
          />
          <TextField
            className="editForm__field"
            multiline
            rows={6}
            variant="outlined"
            label="Enter new Bio"
            type="text"
            name="bio"
            id="bio"
            value={formData.bio}
            onChange={handleChange}
          />
          <Button variant="contained" color="primary" type="submit" disabled={!shouldDataChange}>
            Edit
          </Button>
        </form>
      </WithError>
    </WithLoader>
  );
};

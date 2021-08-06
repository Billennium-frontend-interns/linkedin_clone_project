import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import { EditProfileForm } from '../EditProfileForm/EditProfileForm';
import './EditProfile.scss';

Modal.setAppElement('#root');

interface EditProfileProps {
  isOpen: boolean;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EditProfile: React.FC<EditProfileProps> = ({ isOpen, setIsModalOpen }) => {
  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Modal className="modal" isOpen={isOpen} onRequestClose={closeModal} overlayClassName="overlay">
      <p className="modal__title">Edit your profile</p>
      <EditProfileForm />
      <Button variant="contained" color="secondary" type="button" onClick={closeModal}>
        Close
      </Button>
    </Modal>
  );
};

EditProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired
};

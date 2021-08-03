import React, { useState } from 'react';
import Modal from 'react-modal';
import { Button } from '@material-ui/core';
import { EditProfileForm } from '../EditProfileForm/EditProfileForm';
import './EditProfile.scss';

Modal.setAppElement('#root');

export const EditProfile: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="editProfile">
      <button type="button" onClick={openModal}>
        Edit profile
      </button>
      <Modal className="modal" isOpen={isModalOpen} onRequestClose={closeModal}>
        <p className="modal__title">Edit your profile</p>
        <EditProfileForm />
        <Button variant="contained" color="secondary" type="button" onClick={closeModal}>
          Close
        </Button>
      </Modal>
    </section>
  );
};

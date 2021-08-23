import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import CancelIcon from '@material-ui/icons/Cancel';
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
    <Modal
      className="modal"
      isOpen={isOpen}
      onRequestClose={closeModal}
      overlayClassName="overlay"
      data-testId="editProfileModal"
    >
      <p className="modal__title">Edit your profile</p>
      <EditProfileForm closeModal={closeModal} />
      <CancelIcon onClick={closeModal} className="modal__closeIcon" />
    </Modal>
  );
};

EditProfile.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsModalOpen: PropTypes.func.isRequired
};

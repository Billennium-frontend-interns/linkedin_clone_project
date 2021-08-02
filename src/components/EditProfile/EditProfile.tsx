import React, { useState } from 'react';
import Modal from 'react-modal';
import { auth } from '../../firebase';

Modal.setAppElement('#root');

interface UserData {
  displayName: string | null;
  email: string | null;
}

export const EditProfile: React.FC = () => {
  const initialUserData: UserData = {
    displayName: auth.currentUser?.displayName as string,
    email: auth.currentUser?.email as string
  };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [shouldDataChange, setShouldDataChange] = useState(false);
  const [currentUserData, setCurrentUserData] = useState(initialUserData);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentUserData(initialUserData);
    setShouldDataChange(false);
    setIsModalOpen(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setCurrentUserData({ ...currentUserData, [name]: value });
    setShouldDataChange(true);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div>
      <button type="button" onClick={openModal}>
        Open modal
      </button>
      <Modal isOpen={isModalOpen} onRequestClose={closeModal}>
        <form onSubmit={handleSubmit}>
          <label htmlFor="displayName">
            <input
              type="text"
              name="displayName"
              id="displayName"
              value={currentUserData.displayName as string}
              onChange={handleChange}
            />
          </label>
          <label htmlFor="email">
            <input
              type="email"
              name="email"
              id="email"
              value={currentUserData.email as string}
              onChange={handleChange}
            />
          </label>
          <button type="submit" disabled={!shouldDataChange}>
            Edit
          </button>
        </form>
        <button type="button" onClick={closeModal}>
          Close modal
        </button>
      </Modal>
    </div>
  );
};

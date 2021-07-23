import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import './Dropdown.scss';

interface Dropdownprops {
  DropdownOpener: React.ReactNode;
}

export const Dropdown: React.FC<Dropdownprops> = ({ DropdownOpener }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const box = useRef(null);

  const closeDropdownOutside = (ref: React.MutableRefObject<HTMLDivElement | null>) => {
    useEffect(() => {
      const handleOutsideClick = (event: any) => {
        if (ref.current && !ref.current.contains(event.target)) {
          setIsDropdownOpen(false);
          document.removeEventListener('click', handleOutsideClick);
        }
      };
      if (isDropdownOpen) {
        document.addEventListener('click', handleOutsideClick);
      }
    }, [isDropdownOpen, ref]);
  };

  closeDropdownOutside(box);

  return (
    <div className="dropdown">
      <div
        className="dropdown__opener"
        data-testid="dropdownOpener"
        onClick={() => setIsDropdownOpen(true)}
        onKeyDown={() => setIsDropdownOpen(true)}
        role="button"
        tabIndex={0}
      >
        {DropdownOpener}
      </div>
      {isDropdownOpen && (
        <div data-testid="dropdownContainer" ref={box} className="dropdown__container">
          <Avatar />
          <p>Test test</p>
          <Button variant="outlined" color="primary">
            view profile
          </Button>
          <Button variant="outlined">log out</Button>
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  DropdownOpener: PropTypes.func.isRequired
};

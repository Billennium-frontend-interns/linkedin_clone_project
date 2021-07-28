import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

interface DropdownProps {
  DropdownOpener: React.ReactNode;
  children?: React.ReactNode;
}

export const Dropdown: React.FC<DropdownProps> = ({ DropdownOpener, children }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdown = useRef() as React.MutableRefObject<HTMLDivElement>;

  const closeDropdownOutside = (ref: React.MutableRefObject<HTMLDivElement>) => {
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

  closeDropdownOutside(dropdown);

  return (
    <div className="dropdown">
      <div
        className="dropdown__opener"
        onClick={() => setIsDropdownOpen(true)}
        onKeyDown={() => setIsDropdownOpen(true)}
        role="button"
        tabIndex={0}
      >
        {DropdownOpener}
      </div>
      {isDropdownOpen && (
        <div ref={dropdown} className="dropdown__container">
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  DropdownOpener: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired
};
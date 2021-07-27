import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import './Dropdown.scss';

interface DropdownProps {
  DropdownOpener: React.ReactNode;
  children?: React.ReactNode;
  testid?: string;
}

export const Dropdown: React.FC<DropdownProps> = ({ DropdownOpener, children, testid }) => {
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
    <div className="dropdown" data-testid={testid}>
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
        <div data-testid="dropdownContainer" ref={dropdown} className="dropdown__container">
          {children}
        </div>
      )}
    </div>
  );
};

Dropdown.defaultProps = {
  testid: undefined
};

Dropdown.propTypes = {
  DropdownOpener: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  testid: PropTypes.string
};

import React, { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { useParams } from 'react-router-dom';
import { useDarkMode } from '../../context/DarkModeProvider';
import './Dropdown.scss';

interface DropdownProps {
  DropdownOpener: React.ReactNode;
  content: React.FC<unknown> | string;
}

export const Dropdown: React.FC<DropdownProps> = ({ DropdownOpener, content }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isDarkMode } = useDarkMode();
  const dropdown = useRef() as React.MutableRefObject<HTMLDivElement>;
  const params = useParams();

  const closeDropdownOutside = (ref: React.MutableRefObject<HTMLDivElement>) => {
    useEffect(() => {
      const handleOutsideClick = (event: Event) => {
        if (ref.current && !ref.current.contains(event.target as HTMLElement)) {
          setIsDropdownOpen(false);
          document.removeEventListener('click', handleOutsideClick);
        }
      };
      if (isDropdownOpen) {
        document.addEventListener('click', handleOutsideClick);
      }
    }, [isDropdownOpen, ref]);
  };

  useEffect(() => {
    setIsDropdownOpen(false);
  }, [params]);

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
        <div ref={dropdown} className={classNames('dropdown__container', { 'dropdown__container--dark': isDarkMode })}>
          {React.createElement(content)}
        </div>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  DropdownOpener: PropTypes.node.isRequired,
  content: PropTypes.func.isRequired
};

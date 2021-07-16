import React from 'react';

interface Props {
  text: string;

  handleOnClick: () => void;
}

const WelcomeBtn: React.FC<Props> = ({ handleOnClick, text }: Props) => {
  const classNameBtn = () => (text === 'Sign up' ? 'wrapper__btn--sign-up' : 'wrapper__btn--sign-in');
  const nameClass = classNameBtn();

  return (
    <button className={`wrapper__btn ${nameClass}`} onClick={handleOnClick} type="button">
      {text}
    </button>
  );
};
export default WelcomeBtn;

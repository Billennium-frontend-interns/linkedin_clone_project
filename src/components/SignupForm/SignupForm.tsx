import React, { useState, useMemo } from 'react';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';
import { SignUpCredentialsInterface, ErrorMessageSignupVisibleInterface } from '../../shared/interfaces/FormInterfaces';
import { useSignupFormValidation } from './useSignupFormValidation';
import { useFormFieldsConfig } from './useFormFieldsConfig';
import { FormField } from '../../shared/components/FormField/FormField';
import { signUpWithCredentails } from '../../actions/signUpWithCredentails';

export const SignupForm: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = useState<SignUpCredentialsInterface>({
    name: '',
    password: '',
    repeatPassword: '',
    email: ''
  });
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState<ErrorMessageSignupVisibleInterface>({
    name: false,
    email: false,
    password: false,
    repeatPassword: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { error, setError, validateForm } = useSignupFormValidation(formData);
  const formFieldsConfig = useMemo(
    () => useFormFieldsConfig(formData, isErrorMessageVisible),
    [formData, isErrorMessageVisible]
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (validateForm()) {
      const { email, password, name } = formData;
      await signUpWithCredentails({ email, password, name, history, setError });
    }

    setIsLoading(false);
  };

  return (
    <div className="formLayout__form">
      <h1 className="formLayout__text">Sign up</h1>
      <form className="form__container" data-testid="signupForm" onSubmit={handleSubmit}>
        {formFieldsConfig.map(({ label, type, name, isError, errorText, value }) => (
          <FormField
            key={name}
            label={label}
            type={type}
            name={name}
            isError={isError}
            errorText={errorText}
            value={value}
            className="form__input"
            // eslint-disable-next-line
            onClick={(event: React.MouseEvent<HTMLDivElement>) =>
              setIsErrorMessageVisible({ ...isErrorMessageVisible, [name]: true })
            }
            onChange={handleChange}
          />
        ))}
        {error.isError && <p className="form__error">{error.errorText}</p>}
        <Button
          variant="contained"
          color="primary"
          className="form__submit"
          type="submit"
          disabled={isLoading}
          datatest-id="signup_button"
        >
          Register
        </Button>
      </form>
      <p className="hint">
        Already have an account?{' '}
        <Link className="cta__button" to="/signIn">
          Sign in!
        </Link>
      </p>
    </div>
  );
};

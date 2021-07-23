import React, { useState, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { LoginCredentialsInterface, ErrorMessageLoginVisibleInterface } from '../../shared/interfaces/FormInterfaces';
import { useLoginFormValidation } from './useLoginFormValidation';
import { useFormLoginFieldsConfig } from './useFormLoginFieldsConfig';
import { FormField } from '../../shared/components/FormField/FormField';
import { signInWithCredentials } from '../../actions/signInWithCredentials';

export const LoginForm: React.FC = () => {
  const history = useHistory();
  const [formData, setFormData] = useState<LoginCredentialsInterface>({
    password: '',
    email: ''
  });
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState<ErrorMessageLoginVisibleInterface>({
    email: false,
    password: false
  });
  const [isLoading, setIsLoading] = useState(false);
  const { error, setError, validateForm } = useLoginFormValidation(formData);
  const formFieldsConfig = useMemo(
    () => useFormLoginFieldsConfig(formData, isErrorMessageVisible),
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
      const { email, password } = formData;
      await signInWithCredentials({ email, password, setError, history });
    }

    setIsLoading(false);
  };

  return (
    <div className="formLayout__form">
      <h1 className="formLayout__text">Sign in</h1>
      <form className="form__container" onSubmit={handleSubmit}>
        {formFieldsConfig.map(({ label, type, name, isError, errorText, value }) => (
          <FormField
            key={name}
            label={label}
            type={type}
            name={name}
            isError={isError}
            errorText={errorText}
            className="form__input"
            // eslint-disable-next-line
            onClick={(event: React.MouseEvent<HTMLDivElement>) => {
              setIsErrorMessageVisible({ ...isErrorMessageVisible, [name]: true });
            }}
            value={value}
            onChange={handleChange}
          />
        ))}
        {error.isError && <p className="form__error">{error.errorText}</p>}
        <Button
          data-testid="signin_button"
          className="form__submit"
          variant="contained"
          color="primary"
          disabled={isLoading}
          type="submit"
        >
          Sign in
        </Button>
      </form>
      <p className="hint">
        Don&apos;t have an account?
        <Link to="/signUp" className="cta__button">
          Sign up!
        </Link>
      </p>
    </div>
  );
};

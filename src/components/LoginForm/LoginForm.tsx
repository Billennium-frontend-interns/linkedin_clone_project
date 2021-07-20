import React, { useState, useMemo } from 'react';
import { Button } from '@material-ui/core';
import { LoginFormDataInterface, ErrorMessageLoginVisibleInterface } from '../../shared/interfaces/FormInterfaces';
import { useLoginFormValidation } from './useLoginFormValidation';
import { useFormLoginFieldsConfig } from './useFormLoginFieldsConfig';
import { FormField } from '../../shared/components/FormField/FormField';
import { signInWithPasswordAndEmail } from '../../actions/signInWithPasswordAndEmail';

export const LoginForm: React.FC = () => {
  const initialFormData: LoginFormDataInterface = {
    password: '',
    email: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const initialErrorMessageVisible: ErrorMessageLoginVisibleInterface = {
    email: false,
    password: false
  };
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(initialErrorMessageVisible);
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
      await signInWithPasswordAndEmail({ email, password, setError });
    }
    setIsLoading(false);
  };

  return (
    <form className="form__wrapper" onSubmit={handleSubmit}>
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
  );
};

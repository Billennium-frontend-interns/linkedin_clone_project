import React, { useState, useMemo } from 'react';
import { Button } from '@material-ui/core';
import { SignUpFormDataInterface, ErrorMessageVisibleInterface } from './interfaces/SignupFormInterfaces';
import { useSignupFormValidation } from './useSignupFormValidation';
import { useFormFieldsConfig } from './useFormFieldsConfig';
import { FormField } from '../../shared/components/FormField/FormField';
import { signUpWithEmailAndPassword } from '../../actions/signUpWithEmailAndPassword';

export const SignupForm: React.FC = () => {
  const initialFormData: SignUpFormDataInterface = {
    name: '',
    password: '',
    repeatPassword: '',
    email: ''
  };
  const [formData, setFormData] = useState(initialFormData);

  const initialErrorMessageVisible: ErrorMessageVisibleInterface = {
    name: false,
    email: false,
    password: false,
    repeatPassword: false
  };
  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState(initialErrorMessageVisible);

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
      await signUpWithEmailAndPassword({ email, password, name, setError });
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
          value={value}
          className="form__input"
          // eslint-disable-next-line
          onClick={(event: React.MouseEvent<HTMLDivElement>) => {
            setIsErrorMessageVisible({ ...isErrorMessageVisible, [name]: true });
          }}
          onChange={handleChange}
        />
      ))}
      {error.isError && <p className="form__error">{error.errorText}</p>}
      <Button variant="contained" color="primary" className="form__submit" type="submit" disabled={isLoading}>
        Register
      </Button>
    </form>
  );
};

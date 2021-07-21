import React, { useState, useMemo } from 'react';
import { Button } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { SignUpFormDataInterface, ErrorMessageVisibleInterface } from '../../shared/interfaces/SignupFormInterfaces';
import { useSignupFormValidation } from './useSignupFormValidation';
import { useFormFieldsConfig } from './useFormFieldsConfig';
import { FormField } from '../../shared/components/FormField/FormField';
import { signUpWithCredentails } from '../../actions/signUpWithCredentails';

export const SignupForm: React.FC = () => {
  const history = useHistory();

  const [formData, setFormData] = useState<SignUpFormDataInterface>({
    name: '',
    password: '',
    repeatPassword: '',
    email: ''
  });

  const [isErrorMessageVisible, setIsErrorMessageVisible] = useState<ErrorMessageVisibleInterface>({
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
      <Button variant="contained" color="primary" className="form__submit" type="submit" disabled={isLoading}>
        Register
      </Button>
    </form>
  );
};

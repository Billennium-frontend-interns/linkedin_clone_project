import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import SignUpFormDataInterface from './interfaces/SignupFormDataInterface';
import useSignupFormValidation from './useSignupFormValidation';
import { auth } from '../../firebase';

const SignupForm: React.FC = () => {
  const initialFormData: SignUpFormDataInterface = {
    name: '',
    password: '',
    repeatPassword: '',
    email: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const [errorMessageVisible, setErrorMessageVisible] = useState({
    name: false,
    email: false,
    password: false,
    repeatPassword: false
  });

  const { error, validateForm } = useSignupFormValidation(formData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Email"
        type="email"
        name="email"
        error={formData.email === '' && errorMessageVisible.email}
        helperText={formData.email === '' && errorMessageVisible.email ? "Field can't be empty" : ''}
        onClick={() => {
          setErrorMessageVisible({ ...errorMessageVisible, email: true });
        }}
        value={formData.email}
        onChange={handleChange}
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        error={formData.password === '' && errorMessageVisible.password}
        helperText={formData.password === '' && errorMessageVisible.password ? "Field can't be empty" : ''}
        onClick={() => {
          setErrorMessageVisible({ ...errorMessageVisible, password: true });
        }}
        value={formData.password}
        onChange={handleChange}
      />
      <TextField
        label="Repeart password"
        type="password"
        name="repeatPassword"
        error={formData.repeatPassword === '' && errorMessageVisible.repeatPassword}
        helperText={formData.repeatPassword === '' && errorMessageVisible.repeatPassword ? "Field can't be empty" : ''}
        onClick={() => {
          setErrorMessageVisible({ ...errorMessageVisible, repeatPassword: true });
        }}
        value={formData.repeatPassword}
        onChange={handleChange}
      />
      <TextField
        label="Nickname"
        type="text"
        name="name"
        error={formData.name === '' && errorMessageVisible.name}
        helperText={formData.name === '' && errorMessageVisible.name ? "Field can't be empty" : ''}
        onClick={() => {
          setErrorMessageVisible({ ...errorMessageVisible, name: true });
        }}
        value={formData.name}
        onChange={handleChange}
      />
      <Button variant="contained" color="primary" type="submit">
        Register
      </Button>
      {error.isError && <p>{error.errorText}</p>}
    </form>
  );
};

export default SignupForm;

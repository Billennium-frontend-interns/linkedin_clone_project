import React, { useState } from 'react';
import { Button, TextField } from '@material-ui/core';
import { auth } from '../../firebase';

interface SignUpFormData {
  name: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignupForm: React.FC = () => {
  const initialFormData: SignUpFormData = {
    name: '',
    email: '',
    password: '',
    repeatPassword: ''
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField label="Email" type="email" value={formData.email} onChange={handleChange} />
      <TextField label="Password" type="password" value={formData.email} onChange={handleChange} />
      <TextField label="Repeart password" type="password" value={formData.email} onChange={handleChange} />
      <TextField label="Nickname" type="text" value={formData.email} onChange={handleChange} />
    </form>
  );
};

export default SignupForm;

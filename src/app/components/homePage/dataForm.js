"use client"
import React, { useState } from 'react';

import { useForm } from 'react-hook-form';
import { TextField, Button as MuiButton, Alert } from '@mui/material';
import { styled } from '@mui/system';


const FormContainer = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'right',
  justifyContent: 'center',
  height: '100vh',
  position: 'fixed',
  left: '1000px',
  top: '-80px'

  // Bottom: '1100px',
  // position: 
});

const StyledForm = styled('form')({
  width: '80%',
  maxWidth: '400px',
  padding: '20px',
  borderRadius: '10px',
  border: '2px solid #1E3A8A',
  boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  backgroundColor: '#ffffff',
  textAlign: 'center',
});

const StyledTextField = styled(TextField)({
  marginBottom: '16px',
  width: '100%',
});


export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [formStatus, setFormStatus] = useState({ success: false, error: '' });



  const onSubmit = (data) => {

    if (data.username === 'testuser' && data.password === 'password123') {
      setFormStatus({ success: true, error: '' });
    } else {
      setFormStatus({ success: false, error: 'Invalid username or password' });
    }
  };

  return (
    <>
      <FormContainer>


        <StyledForm >
          {formStatus.success ? (
            <Alert severity="success">Form submitted successfully</Alert>
          ) : formStatus.error ? (
            <Alert severity="error">{formStatus.error}</Alert>
          ) : null}

          <StyledTextField
            label="Name"
            type="text"
            {...register('name', {
              required: 'name required',
              pattern: {
                value: /^[a-zA-Z0-9_.-]*$/,
                message: 'Invalid characters used'
              },
              minLength: {
                value: 6,
                message: 'Name must be at least 6 characters'
              },
            })}
          />
          {errors.name && <Alert severity="error">{errors.name.message}</Alert>}

          <StyledTextField
            label="Phone Number"
            type="phone"
            {...register('phone', {
              required: 'Phone required',
              minLength: {
                value: 8,
                message: 'Phone must be at least 10 numbers'
              },
            })}
          />
          {errors.phone && <Alert severity="error">{errors.phone.message}</Alert>}

          <StyledTextField
            label="Email"
            type="email"
            {...register('email', {
              required: 'Email required',
              minLength: {
                value: 8,
                message: 'Email must be at least 10 numbers'
              },
            })}
          />
          {errors.email && <Alert severity="error">{errors.email.message}</Alert>}

          <MuiButton
            type="submit"
            variant="contained"
            color="primary"
            margin="5px"
            onClick={handleSubmit(onSubmit)} > Submit </MuiButton>
        </StyledForm>
      </FormContainer>
    </>
  );
}
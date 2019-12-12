import React from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Button from '../Button';
import Container from '../Container';
import useForm from 'react-hook-form';

function Register() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <Container>
      <Form submit={handleSubmit(onSubmit)}>
        <h2 className='text-center mb-3 font-semibold text-blue-900 text-xl'>
          Register
        </h2>
        <FormInput
          name='username'
          label='Username'
          type='text'
          inputRef={register}
          placeholder='Username'
        />
        <FormInput
          name='password'
          label='Password'
          type='password'
          inputRef={register}
          placeholder='Password'
        />
        <FormInput
          name='email'
          label='E-mail'
          type='email'
          inputRef={register}
          placeholder='E-mail'
        />
        <FormInput
          name='phone'
          label='Phone Number'
          type='tel'
          inputRef={register}
          placeholder='Phone Number'
        />
        <Button type='submit' name='Register' />
      </Form>
    </Container>
  );
}

export default Register;

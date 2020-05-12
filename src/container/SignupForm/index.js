import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { makeStyles } from '@material-ui/core/styles';
import { FormControl } from '@material-ui/core';
import clsx from 'clsx';

import Button from '../../components/Button';
import TextInput from './components/MyFormikTextInput';
import MyLogo from './components/MyLogo';

const avatarSrc = 'register-logo.svg';

const useStyles = makeStyles(() => ({
  form: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  formControl: {
    margin: '10px 1rem',
    width: '50%'
  },
  groupBtns: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '50%'
  },
  button: {
    width: '40%'
  }
}));

const SignupForm = () => {

  const { form, formControl, button, groupBtns } = useStyles();

  const formState = { firstName: '', lastName: '', email: '' };

  return (
    <Formik
      initialValues={formState}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastName: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form className={form}>
          <MyLogo imgSrc={avatarSrc} />
          <h2>REGISTER FORM</h2>
          <TextInput classNames={{ formControl }} label='FirstName' name="firstName" type="text" />
          <TextInput classNames={{ formControl }} label='LastName' name="lastName" type="text" />
          <TextInput classNames={{ formControl }} label='Email' name="email" type="email" />
          <FormControl className={clsx(formControl, groupBtns)}>
            <Button classNames={{ button }} type="reset" disabled={isSubmitting}>RESET</Button>
            <Button classNames={{ button }} type="submit" disabled={isSubmitting}>Submit</Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default SignupForm;
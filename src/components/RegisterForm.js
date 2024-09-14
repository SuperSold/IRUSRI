import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const RegisterForm = ({ setIsRegistering, onLogin }) => {
  return (
    <div className="form-container">
      <h2>Register</h2>
      <Formik
        initialValues={{ email: '', password: '', name: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
          name: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          const user = { email: values.email, password: values.password, name: values.name };
          localStorage.setItem('registeredUser', JSON.stringify(user));
          alert('User registered successfully');
          onLogin();
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error-message" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error-message" />

          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" className="error-message" />

          <button type="submit">Register</button>
          <button type="button" className="back-button" onClick={() => setIsRegistering(false)}>Go to Login</button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegisterForm;

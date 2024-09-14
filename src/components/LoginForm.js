import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const LoginForm = ({ setIsRegistering, onLogin }) => {
  return (
    <div className="form-container">
      <h2>Login</h2>
      <Formik
        initialValues={{ email: '', password: '' }}
        validationSchema={Yup.object({
          email: Yup.string().email('Invalid email address').required('Required'),
          password: Yup.string().required('Required'),
        })}
        onSubmit={(values) => {
          const storedUser = JSON.parse(localStorage.getItem('registeredUser'));
          if (storedUser && storedUser.email === values.email && storedUser.password === values.password) {
            onLogin();
          } else {
            alert('Invalid email or password');
          }
        }}
      >
        <Form>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" className="error-message" />

          <label htmlFor="password">Password</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" className="error-message" />

          <button type="submit">Login</button>
          <button type="button" className="back-button" onClick={() => setIsRegistering(true)}>Register</button>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;

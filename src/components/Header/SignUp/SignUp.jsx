import React from 'react';
import { Field, Form, Formik } from 'formik';
import * as yup from 'yup';

import './SignUp.css';

const SignUp = ({ signUpIsOpen, setSignUpIsOpen, setSignInIsOpen }) => {
  const validationsSchema = yup.object().shape({
    name: yup.string().min(2, 'At least two characters').required('Required field'),
    password: yup
      .string()
      .matches(/[A-Z]/, 'should be includes min 1 english upper case letter')
      .min(6, 'should be min 6 letters')
      .required('Required field'),
    email: yup.string().email().required('Required field'),
  });

  return (
    <div className={signUpIsOpen ? 'modal active' : 'modal'}>

      <Formik
        initialValues={{
          name: '',
          password: '',
          email: '',
        }}
        validationSchema={validationsSchema}
        onSubmit={(values) => {
          localStorage.setItem('user', JSON.stringify(values));

          setSignUpIsOpen(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="modal-content">

            <div className="modal-close" onClick={() => setSignUpIsOpen(false)}>
              <span className="modal-close__line1 modal-close__line" />
              <span className="modal-close__line2 modal-close__line" />
            </div>

            <h3 className="user-title">Create an account</h3>
            <label className="image-replace cd-username" htmlFor="signup-name">
              Name
              <Field className="fieldset has-border has-padding" name="name" placeholder="Your name" />
              {errors.name && touched.name ? (
                <p className="user-errors">{errors.name}</p>
              ) : null}
            </label>

            <label className="image-replace cd-email" htmlFor="signup-email">
              Email
              <Field className="fieldset has-border has-padding" name="email" placeholder="Your email" />
              {errors.email && touched.email ? <p className="user-errors">{errors.email}</p> : null}
            </label>

            <label className="image-replace cd-password" htmlFor="signup-password">
              Password
              <Field
                className="has-border has-padding has-margin"
                type="password"
                name="password"
                placeholder="Enter your password"
              />
              {errors.password && touched.password ? (
                <p className="user-errors">{errors.password}</p>
              ) : null}
            </label>

            <button className="border-signUp" type="submit">Submit</button>
            <p className="user-have-account">Do you already have an account?</p>
            <span
              className="user-transitional-link "
              onClick={() => { setSignUpIsOpen(false); setSignInIsOpen(true); }}
            >
              Sing in
            </span>

          </Form>

        )}
      </Formik>

    </div>
  );
};

export default SignUp;


import { useState } from 'react';
import MainStyles from '../../stylesheets/Main.module.css';
import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import firebase from '../../firebase/clientApp';

const validate = values => {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'Must be 15 characters or less';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length > 20) {
    errors.lastName = 'Must be 20 characters or less';
  }

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const BasicEmail = props => {
  const [submitted, setSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      error: null
    },
    validate,
    onSubmit: async (values) => {
      await firebase.database().ref('contacts').push({
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email
      })
        .then(() => {
          console.log('Submitted');
          setSubmitted(true);
        })
        .catch(error => {
          console.log('Error onSubmit', error);
        });
    }
  });

  return (
    <div className={FormStyles.formWrapper}>
      <div className={FormStyles.container}>
        {!submitted && (
          <>
            <p className={FormStyles.heading}>{props.heading}</p>
            <form onSubmit={formik.handleSubmit} className={FormStyles.form}>
              {formik.touched.firstName && formik.errors.firstName ? (
                <div><p className={FormStyles.errors}>{formik.errors.firstName}</p></div>
              ) : null}
              <input
                className={FormStyles.input}
                id="firstName"
                name="firstName"
                placeholder="First name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.firstName}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div><p className={FormStyles.errors}>{formik.errors.lastName}</p></div>
              ) : null}
              <input
                className={FormStyles.input}
                id="lastName"
                name="lastName"
                placeholder="Last name"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.lastName}
              />
              {formik.touched.email && formik.errors.email ? (
                <div><p className={FormStyles.errors}>{formik.errors.email}</p></div>
              ) : null}
              <input
                className={FormStyles.input}
                id="email"
                name="email"
                placeholder="Email"
                type="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />

              <button className={MainStyles.button} type="submit">Submit</button>

              {/* {error && <p>{error.message}</p>} */}
            </form>
          </>
        )}

        {submitted && (
          <p className={FormStyles.heading}>Thank You!</p>
        )}
      </div>
    </div>
  );
}

export default BasicEmail;

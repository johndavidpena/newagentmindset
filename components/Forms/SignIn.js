import MainStyles from '../../stylesheets/Main.module.css';
import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import firebase from '../../firebase/clientApp';
import Link from 'next/link';
import Router from 'next/router';

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      // error: null
    },
    validate,
    onSubmit: async (values) => {
      await firebase.auth().signInWithEmailAndPassword(values.email, values.password)
        .then(() => {
          console.log('Signed In');
          Router.push('/start-with-why');
        })
        .catch(error => {
          console.log('onSubmit error: ', error);
        });
    }
  });

  return (
    <div className={FormStyles.formWrapper}>
      <div className={FormStyles.container}>
        <h1>Sign In</h1>
        <form onSubmit={formik.handleSubmit} className={FormStyles.form}>
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
          <input
            className={FormStyles.input}
            id="password"
            name="password"
            placeholder="Password"
            // type="text"
            type='password'
            onChange={formik.handleChange}
            value={formik.values.password}
          />

          <Link href='/reset-password'>
            <p className={FormStyles.forgot}>Forgot password?</p>
          </Link>

          <button className={MainStyles.button} type="submit">Submit</button>

          {/* {error && <p>{error.message}</p>} */}
        </form>
      </div>
    </div>
  );
}

export default SignIn;

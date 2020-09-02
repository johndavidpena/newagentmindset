// import MainStyles from '../stylesheets/Main.module.css';
// import FormStyles from '../components/Forms/Form.module.css';
// import firebase from '../firebase/clientApp';
// import { useFormik } from 'formik';
// import Router from 'next/router';

// const validate = values => {
//   const errors = {};

//   if (!values.email) {
//     errors.email = 'Required';
//   } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
//     errors.email = 'Invalid email address';
//   }

//   return errors;
// };

// const PasswordReset = () => {
//   const formik = useFormik({
//     initialValues: {
//       email: '',
//       // error: null
//     },
//     validate,
//     onSubmit: async (values) => {
//       await firebase.auth().sendPasswordResetEmail(values.email)
//         .then(() => {
//           console.log('Password reset');
//           Router.push('/');
//         })
//         .catch(error => {
//           console.log('onSubmit error: ', error);
//         });
//     }
//   });

//   return (
//     <div className={FormStyles.formWrapper}>
//       <div className={FormStyles.container}>
//         <h1>Reset Password</h1>
//         <form onSubmit={formik.handleSubmit} className={FormStyles.form}>
//           {formik.touched.email && formik.errors.email ? (
//             <div><p className={FormStyles.errors}>{formik.errors.email}</p></div>
//           ) : null}
//           <input
//             className={FormStyles.input}
//             id="resetEmail"
//             name="email"
//             placeholder="Email"
//             type="email"
//             onChange={formik.handleChange}
//             onBlur={formik.handleBlur}
//             value={formik.values.email}
//           />

//           <button className={MainStyles.button} type="submit">Submit</button>

//           {/* {error && <p>{error.message}</p>} */}
//         </form>
//       </div>
//     </div>
//   );
// }

// export default PasswordReset;

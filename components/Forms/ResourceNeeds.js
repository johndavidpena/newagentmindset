import { useState } from 'react';
import MainStyles from '../../stylesheets/Main.module.css';
import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import firebase from '../../firebase/clientApp';

// TODO: Error handling
const validate = values => {
  const errors = {};
  if (!values.resourceNeeds) {
    errors.resourceNeeds = 'Required';
  }

  return errors;
};

const ResourceNeeds = () => {
  const [confirmSubmit, setConfirmSubmit] = useState(false);

  const formik = useFormik({
    initialValues: {
      resourceNeeds: ''
      // error: null
    },
    validate,
    onSubmit: async (values) => {
      await firebase.database().ref('resourceNeeds').push({
        resourceNeeds: values.resourceNeeds
      })
        .then(() => {
          console.log('Submitted resourceNeeds form');
          setConfirmSubmit(true);

        })
        .catch(error => {
          console.log('onSubmit error: ', error);
        });
    }
  });

  return (
    <div className={FormStyles.textareaWrapper}>
      <form onSubmit={formik.handleSubmit} className={FormStyles.textareaForm}>
        <textarea
          className={FormStyles.textarea}
          id='resourceNeeds'
          name='resourceNeeds'
          placeholder="I need..."
          type="text"
          onChange={formik.handleChange}
          value={formik.values.resourceNeeds}
        />

        <button className={MainStyles.button} type="submit">Submit</button>

        {/* {error && <p>{error.message}</p>} */}

        {confirmSubmit && (
          <div className={FormStyles.textareaConfirm}>
            <p>Got it!</p>
          </div>
        )}
      </form>
    </div>
  );
}

export default ResourceNeeds;

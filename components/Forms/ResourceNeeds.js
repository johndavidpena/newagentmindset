import { useState, useRef } from 'react';
import MainStyles from '../../stylesheets/Main.module.css';
import FormStyles from './Form.module.css';
import { useFormik } from 'formik';
import firebase from '../../firebase/clientApp';
import * as gtag from '../../utils/gtag';

// TODO: Error handling
const validate = values => {
  const errors = {};
  if (!values.resourceNeeds) {
    errors.resourceNeeds = 'Required';
  }

  return errors;
};

const ResourceNeeds = () => {
  const textArea = React.useRef();

  const [submitted, setSubmitted] = useState(false);

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
          // console.log('Submitted resourceNeeds form');
          console.log(textArea.current.value);
          setSubmitted(true);
        })
        .then(() => {
          gtag.event({
            action: 'resource_form',
            category: 'Resource',
            label: 'ResourceForm',
            value: 'Submit'
          })
        })
        .catch(error => {
          console.log('onSubmit error: ', error);
        });
    }
  });

  return (
    <div className={FormStyles.textareaWrapper}>
      {!submitted && (
        <form onSubmit={formik.handleSubmit} className={FormStyles.textareaForm}>
          <textarea
            ref={textArea}
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
        </form>
      )}

      {submitted && (
        <div className={FormStyles.textareaConfirm}>
          <p>Got it!</p>
        </div>
      )}
    </div>
  );
}

export default ResourceNeeds;

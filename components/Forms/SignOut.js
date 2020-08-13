import FormStyles from './Form.module.css';
import firebase from '../../firebase/clientApp';
import Router from 'next/router';

const SignOut = () => (
  <button
    className={FormStyles.signoutButton}
    type="button"
    onClick={() => {
      firebase.auth().signOut();
      Router.push('/');
    }}>
    Sign Out
  </button>
);

export default SignOut;

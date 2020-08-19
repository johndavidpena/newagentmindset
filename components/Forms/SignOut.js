import MainStyles from '../../stylesheets/Main.module.css';
import firebase from '../../firebase/clientApp';
import Router from 'next/router';

const SignOut = () => (
  <button
    className={MainStyles.blueButton}
    type="button"
    onClick={() => {
      firebase.auth().signOut();
      Router.push('/');
    }}>
    Sign Out
  </button>
);

export default SignOut;

import Head from 'next/head';
import { useEffect } from 'react';
import { useUser } from '../context/userContext';
// import firebase from '../firebase/clientApp';
import SignOut from '../components/Forms/SignOut';

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log('[pages/members.js] user: ', user)
    }
    // You also have your firebase app initialized
    // console.log('[pages/members.js] firebase: ', firebase)
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>New Agent MINDSET - Members</title>
      </Head>

      <div>
        <h1>Members Page</h1>

        {/* FIX: If line below used, error on SignOut */}
        {/* <p>{user.email}</p> */}

        {user && <SignOut />}
      </div>
    </>
  );
}

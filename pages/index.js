import Head from 'next/head';
import { useEffect } from 'react';
import { useUser } from '../context/userContext';
import SignUp from '../components/Forms/SignUp';
import SignIn from '../components/Forms/SignIn';
import SignOut from '../components/Forms/SignOut';

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser()

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      console.log('[pages/index.js] user: ', user)
    }
    // You also have your firebase app initialized
    // console.log('[pages/index.js] firebase: ', firebase)
  }, [loadingUser, user])

  return (
    <>
      <Head>
        <title>New Agent Mindset</title>
      </Head>

      <div>
        {/* <h1>NOW with Firebase Client-Side template (Julian)</h1> */}
        <h1>New Agent MINDSET</h1>

        <SignUp />

        <SignIn />

        {user && <SignOut />}
      </div>
    </>
  );
}

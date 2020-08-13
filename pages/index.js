import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useUser } from '../context/userContext';
import { useWindowSize } from '../hooks/useWindowSize';
import SignUp from '../components/Forms/SignUp';
import SignIn from '../components/Forms/SignIn';
import SignOut from '../components/Forms/SignOut';
import IndexStyles from '../stylesheets/Index.module.css';
import MainStyles from '../stylesheets/Main.module.css';

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
  }, [loadingUser, user]);

  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    // TODO: Clean up hook below to avoid memory leak
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Agent Mindset - New Real Estate Agents'
        description='New Agent Mindset'
        canonical='https://newagentmindset.com/'
      />

      <div className={IndexStyles.page}>
        {/* <h1>NOW with Firebase Client-Side template (Julian)</h1> */}
        <h1>New Agent Mindset</h1>

        <p>You made it! You're a real estate agent. Now what?</p>

        <p>In a nutshell, lead generation or lead gen. <i>New Agent Mindset</i> is all about providing new real estate agents with the best advice, habits, attitudes, tools, and strategies to make it in the industry.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597332555/New%20Agent%20Mindset/john-pen%CC%83a-m.jpg' alt='john-peña' title='john-peña' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597332561/New%20Agent%20Mindset/john-pen%CC%83a-d.jpg' alt='john-peña' title='john-peña' />
        )}

        <p>My name is John Peña and I am a real estate agent with eXp Realty. I got into real estate in January of 2020, about a month before coronavirus blew up the world.</p>

        <p>As a former teacher, I know how to find, digest, and deliver information. My original intention was to start a book club for new agents in order to learn from the most successful people in the industry through books like "The One Thing" by Gary Keller, "Sell It Like Serhant" by Ryan Serhant, and "The Greatest Salesman in the World" by Og Mandino.</p>

        <p>The pandemic made a book club unrealistic, which helped me realize that there are a LOT of new real estate agents out there, probably going through the same growing pains as myself. So, why not create a community for them?</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597332555/New%20Agent%20Mindset/successful-agent-mindset-m.jpg' alt='successful-agent-mindset' title='successful-agent-mindset' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597332559/New%20Agent%20Mindset/successful-agent-mindset-d.jpg' alt='successful-agent-mindset' title='successful-agent-mindset' />
        )}

        <p>And that is exactly what <i>New Agent Mindset</i> is, a community for new real estate agents looking to build a successful business quickly and efficiently! Aside from studying and delivering content from the best voices in the industry, I will also share as much useful advice as I possibly can from my own ups and downs.</p>

        <p>It's my greatest desire that new real estate agents will find VALUE and community here. So, what are we waiting for, let's begin!</p>

        {!user && (<>
          <SignUp />

          <SignIn />

          <br />
          <br />
          <br />
          <br />
        </>)}

        {user && (
          <>
            <Link href='/start-with-why'>
              <button className={MainStyles.button}>
                Begin<span className={IndexStyles.arrow}>&nbsp;&#10516;</span></button>
            </Link>

            <br />
            <br />

            <SignOut />

            <br />
            <br />
            <br />
            <br />
          </>)}
      </div>
    </>
  );
}

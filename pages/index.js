import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useUser } from '../context/userContext';
import { useWindowSize } from '../hooks/useWindowSize';
import GuestLayout from '../components/GuestLayout';
import MemberLayout from '../components/MemberLayout';
import SignUp from '../components/Forms/SignUp';
import SignIn from '../components/Forms/SignIn';
import SignOut from '../components/Forms/SignOut';
import IndexStyles from '../stylesheets/Index.module.css';
import MainStyles from '../stylesheets/Main.module.css';

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      // console.log('[pages/index.js] user: ', user);
      console.log('[pages/index.js]');
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
    return () => { };
  }, [width]);

  const [loadVideo, setLoadVideo] = useState(false);

  return (
    <>
      <Head>
        <title>New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Agent Mindset - New Real Estate Agents Welcome'
        description='New Agent Mindset is a podcast and Youtube channel for new real estate agents just getting started. New realtors often face challenges getting going and this site and corresponding resources exist to help new agents get going.'
        canonical='https://newagentmindset.com/'
      />

      {!user &&
        <GuestLayout content={(
          <>
            <h1 className={IndexStyles.title1}>new agent<span aria-hidden="true" className={IndexStyles.title2}>&nbsp;mindset</span>
            </h1>

            <a className={IndexStyles.RSS} href='https://open.spotify.com/show/7HlrM794Sbe2ME4kYAAUOZ' target='_blank'>Check out the podcast on Spotify</a>

            <p>You made it! You're a real estate agent. Now what?</p>

            <p>In a nutshell, lead generation or lead gen. <i>New Agent Mindset</i> is all about providing new real estate agents with the best advice, habits, attitudes, tools, and strategies to make it in the industry.</p>

            {!loadVideo && screenSize === 'mobile' && (
              <div className={IndexStyles.thumbnailContainer}>
                <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
                <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603174/New%20Agent%20Mindset/episode-1-thumbnail-m.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
              </div>
            )}

            {!loadVideo && screenSize === 'desktop' && (
              <div className={IndexStyles.thumbnailContainer}>
                <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
                <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603151/New%20Agent%20Mindset/episode-1-thumbnail-d.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
              </div>
            )}

            {loadVideo && <div className={MainStyles.container}>
              <div className={MainStyles.videoResponsive}>
                <iframe title='new-agent-mindset-episode-1-video' width="560" height="315" src="https://www.youtube.com/embed/Y01z2pMyIZs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>}

            <p>My name is John Peña and I am a real estate agent with eXp Realty. I got into real estate in January of 2020, about a month before coronavirus blew up the world.</p>

            <p>As a former teacher, I know how to find, digest, and deliver information. My original intention was to start a book club for new agents in order to learn from the most successful people in the industry through books like "The One Thing" by Gary Keller, "Sell It Like Serhant" by Ryan Serhant, and "The Greatest Salesman in the World" by Og Mandino.</p>

            <p>The pandemic made a book club unrealistic, which helped me realize that there are a LOT of new real estate agents out there, probably going through the same growing pains as myself. So, why not create a community for them?</p>

            {screenSize === 'mobile' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603831/New%20Agent%20Mindset/connect-m.jpg' alt='connect-new-agent-mindset' title='connect-new-agent-mindset' />
            )}

            {screenSize === 'desktop' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603822/New%20Agent%20Mindset/connect-d.jpg' alt='connect-new-agent-mindset' title='connect-new-agent-mindset' />
            )}

            <p>And that is exactly what <i>New Agent Mindset</i> is, a community for new real estate agents looking to build a successful business quickly and efficiently! Aside from studying and delivering content from the best voices in the industry, I will also share as much useful advice as I possibly can from my own ups and downs.</p>

            <p>It's my greatest desire that new real estate agents will find VALUE and community here. So, what are we waiting for, let's begin! Sign up with your email to continue on to the site.</p>

            <SignUp />

            <SignIn />

            <br />
            <br />
            <br />
            <br />
          </>
        )} />
      }

      {user &&
        <MemberLayout content={(
          <>
            <h1 className={IndexStyles.title1}>new agent<span aria-hidden="true" className={IndexStyles.title2}>&nbsp;mindset</span>
            </h1>

            <a className={IndexStyles.RSS} href='https://open.spotify.com/show/7HlrM794Sbe2ME4kYAAUOZ' target='_blank'>Check out the podcast on Spotify</a>

            <p>You made it! You're a real estate agent. Now what?</p>

            <p>In a nutshell, lead generation or lead gen. <i>New Agent Mindset</i> is all about providing new real estate agents with the best advice, habits, attitudes, tools, and strategies to make it in the industry.</p>

            {!loadVideo && screenSize === 'mobile' && (
              <div className={IndexStyles.thumbnailContainer}>
                <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
                <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603174/New%20Agent%20Mindset/episode-1-thumbnail-m.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
              </div>
            )}

            {!loadVideo && screenSize === 'desktop' && (
              <div className={IndexStyles.thumbnailContainer}>
                <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
                <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603151/New%20Agent%20Mindset/episode-1-thumbnail-d.jpg' alt='episode-1-thumbnail' title='episode-1-thumbnail' />
              </div>
            )}

            {loadVideo && <div className={MainStyles.container}>
              <div className={MainStyles.videoResponsive}>
                <iframe title='new-agent-mindset-episode-1-video' width="560" height="315" src="https://www.youtube.com/embed/Y01z2pMyIZs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
              </div>
            </div>}

            <p>My name is John Peña and I am a real estate agent with eXp Realty. I got into real estate in January of 2020, about a month before coronavirus blew up the world.</p>

            <p>As a former teacher, I know how to find, digest, and deliver information. My original intention was to start a book club for new agents in order to learn from the most successful people in the industry through books like "The One Thing" by Gary Keller, "Sell It Like Serhant" by Ryan Serhant, and "The Greatest Salesman in the World" by Og Mandino.</p>

            <p>The pandemic made a book club unrealistic, which helped me realize that there are a LOT of new real estate agents out there, probably going through the same growing pains as myself. So, why not create a community for them?</p>

            {screenSize === 'mobile' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603831/New%20Agent%20Mindset/connect-m.jpg' alt='connect-new-agent-mindset' title='connect-new-agent-mindset' />
            )}

            {screenSize === 'desktop' && (
              <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597603822/New%20Agent%20Mindset/connect-d.jpg' alt='connect-new-agent-mindset' title='connect-new-agent-mindset' />
            )}

            <p>And that is exactly what <i>New Agent Mindset</i> is, a community for new real estate agents looking to build a successful business quickly and efficiently! Aside from studying and delivering content from the best voices in the industry, I will also share as much useful advice as I possibly can from my own ups and downs.</p>

            <p>It's my greatest desire that new real estate agents will find VALUE and community here. So, what are we waiting for, let's begin!</p>

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
          </>
        )} />
      }
    </>
  );
}

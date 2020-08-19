import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/userContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import GuestLayout from '../../components/GuestLayout';
import MemberLayout from '../../components/MemberLayout';
import BlogStyles from '../../stylesheets/Blog.module.css';
import MainStyles from '../../stylesheets/Main.module.css';

export default () => {
  const { loadingUser, user } = useUser();

  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
    }
  }, [loadingUser, user]);

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>New Agent Mindset | Blog</title>
      </Head>

      <NextSeo
        title='New Agent Mindset | Blog for New Real Estate Agents'
        description='New Agent Mindset blog for new real estate agents. The blog contains strategies, tips, and advice for new realtors looking to succeed in their real estate careers.'
        canonical='https://newagentmindset.com/blog/index/'
      />

      {!user &&
        <GuestLayout content={(
          <div>
            <h1 className={MainStyles.title1}>blog
            {/* <span aria-hidden="true" className={PostStyles.title2}>&nbsp;why</span> */}
            </h1>

            <p>Coming Soon!</p>
          </div>
        )} />
      }

      {user &&
        <MemberLayout content={(
          <div>
            <h1 className={MainStyles.title1}>blog
         {/* <span aria-hidden="true" className={PostStyles.title2}>&nbsp;why</span> */}
            </h1>

            <p>Coming Soon!</p>
          </div>
        )} />
      }
    </>
  );
}

import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/userContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import MemberLayout from '../../components/MemberLayout';
import PostStyles from '../../stylesheets/Post.module.css';
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
    <MemberLayout content={(
      <>
        <Head>
          <title>New Agent Mindset | Resources</title>
        </Head>

        <NextSeo
          title='New Agent Mindset | Resources for New Real Estate Agents'
          description='New Agent Mindset resources for new real estate agents. Resources include strategies and tools to help new realtors succeed in their new real estate careers.'
          canonical='https://newagentmindset.com/resources/index/'
        />

        <div>
          <h1 className={PostStyles.title1}>resources
         {/* <span aria-hidden="true" className={PostStyles.title2}>&nbsp;why</span> */}
          </h1>

          <p>RESOURCES HERE</p>
        </div>
      </>
    )} />
  );
}

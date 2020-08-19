import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useUser } from '../../context/userContext';
import { useWindowSize } from '../../hooks/useWindowSize';
import MemberLayout from '../../components/MemberLayout';
import ResourceStyles from '../../stylesheets/Resources.module.css';
import MainStyles from '../../stylesheets/Main.module.css';
import ResourceNeeds from '../../components/Forms/ResourceNeeds';

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
          <h1 className={MainStyles.title1}>new agent resource hub
         {/* <span aria-hidden="true" className={ResourceStyles.title2}>&nbsp;why</span> */}
          </h1>

          <p>Welcome new agents, what do you need?</p>

          <ResourceNeeds />
        </div>
      </>
    )} />
  );
}

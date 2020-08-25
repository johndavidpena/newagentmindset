import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import MainStyles from '../../../stylesheets/Main.module.css';

export default () => {
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

  return (
    <>
      <Head>
        <title>New Agent Mindset | Getting Started with Lead Gen</title>
      </Head>

      <NextSeo
        title='New Agent Mindset | Getting Started with Lead Gen'
        description='New Agent Mindset | Getting Started with Lead Gen'
        canonical='https://newagentmindset.com/getting-started-lead-gen/'
      />

      <div>
        <h1 className={MainStyles.title1}>getting started with
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;lead gen</span>
        </h1>

        <p>You have chosen to become a real estate agent, a job where you don't get paid a salary, you probably don't have health insurance, and you don't get paid unless you help a client buy or sell a home. In fact, YOU pay to be a real estate agent before you ever actually make any money. You don't have financial security or peace of mind and you're always about 45 days away from getting paid when you do start working with a client.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598285529/New%20Agent%20Mindset/lead-generation-m.jpg' alt='lead-generation-guy' title='lead-generation-guy' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598285529/New%20Agent%20Mindset/lead-generation-d.jpg' alt='lead-generation-guy' title='lead-generation-guy' />
        )}

        <p>In addition to joining the Facebook Group, please check out the Resources Hub by clicking on the menu link above. Currently I am asking new agents to submit their needs here. Tell me what you need, what would be useful, what are your pain points?</p>

        <br />

        <div className={MainStyles.facebookGroup}>
          <a href='https://bit.ly/3kI6Ngw' target='_blank'>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598280362/New%20Agent%20Mindset/facebook-groups550px.jpg' alt='join-facebook-group' title='join-facebook-group' />
          </a>
        </div>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

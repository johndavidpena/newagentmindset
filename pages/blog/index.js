import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import BlogStyles from '../../stylesheets/Blog.module.css';
import MainStyles from '../../stylesheets/Main.module.css';

export default () => {
  // const size = useWindowSize();
  // let width = size.width;

  // const [screenSize, setScreenSize] = useState('');

  // useEffect(() => {
  //   if (width <= 576) {
  //     setScreenSize('mobile');
  //   } else if (width > 576 && width <= 768) {
  //     setScreenSize('tablet');
  //   } else if (width > 768) {
  //     setScreenSize('desktop');
  //   }
  //   return () => { };
  // }, [width]);

  return (
    <>
      <Head>
        <title>New Real Estate Agent - Blog | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - Blog | New Agent Mindset'
        description='New Agent Mindset blog for new real estate agents. The blog contains strategies, tips, and advice for new realtors looking to succeed in their real estate careers.'
        canonical='https://newagentmindset.com/blog/index/'
      />

      <div className={BlogStyles.blog}>

        {/* <Link href='/blog/posts/truth-real-estate-agent'>
          <div className={BlogStyles.card}>
            <span>September 2, 2020</span>
            <h2>The Truth About Being a Real Estate Agent</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599073387/New%20Agent%20Mindset/Blog%20Images/truth-real-estate-agent-m.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />

            <h3>New Real Estate Agent Misconceptions</h3>
            <p>As a new real estate agent, there are a lot of misconceptions and myths out there that you'll want to know about. This post is all about the truth about being a real estate agent.</p>
          </div>
        </Link> */}

        <Link href='/blog/posts/getting-started-lead-gen'>
          <div className={BlogStyles.card}>
            <span>August 28, 2020</span>
            <h2>Getting Started with Lead Generation</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599076399/New%20Agent%20Mindset/Blog%20Images/lead-gen-two-women-m400.jpg' alt='lead-gen-two-women' title='lead-gen-two-women' />

            <h3>How to Get Started with Lead Gen</h3>
            <p>Lead generation, sometimes referred to as prospecting, is a key part of every real estate agents life. Without leads, you've got nothing...</p>
          </div>
        </Link>
      </div>

    </>
  );
}

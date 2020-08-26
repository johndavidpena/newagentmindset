import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../hooks/useWindowSize';
import BlogStyles from '../../stylesheets/Blog.module.css';
import MainStyles from '../../stylesheets/Main.module.css';

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
        <title>New Agent Mindset | Blog</title>
      </Head>

      <NextSeo
        title='New Agent Mindset | Blog for New Real Estate Agents'
        description='New Agent Mindset blog for new real estate agents. The blog contains strategies, tips, and advice for new realtors looking to succeed in their real estate careers.'
        canonical='https://newagentmindset.com/blog/index/'
      />

      <div className={BlogStyles.blog}>

        <Link href='/blog/posts/getting-started-lead-gen'>
          <div className={BlogStyles.card}>
            <span>August 28, 2020</span>
            <h2>Getting Started with Lead Gen</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598452943/New%20Agent%20Mindset/lead-gen-two-women-m.jpg' alt='lead-gen-two-women' title='lead-gen-two-women' />

            <h3>How to Get Started with Lead Gen</h3>
            <p>Lead generation, sometimes referred to as prospecting, is a key part of every real estate agents life. Without leads, you've got nothing...</p>
          </div>
        </Link>
      </div>

    </>
  );
}

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import BasicEmail from '../../../components/Forms/BasicEmail';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import MainStyles from '../../../stylesheets/Main.module.css';

// Keyword: 'the truth about being a real estate agent'
// 480/mo, CPC: $9.38, Competition: 0.11
export default () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 576) {
      setScreenSize('mobile');
    } else if (width > 576 && width <= 768) {
      setScreenSize('tablet');
    } else if (width > 768) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>New Real Estate Agent - The Truth About Being a Real Estate Agent | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - The Truth About Being a Real Estate Agent | New Agent Mindset'
        description='New Real Estate Agent - The Truth About Being a Real Estate Agent | New Agent Mindset'
        canonical='https://newagentmindset.com/blog/posts/truth-real-estate-agent/'
      />

      <div>
        <h1 className={MainStyles.title1}>the truth about being a
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;new real estate agent</span>
        </h1>

        <p></p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599073387/New%20Agent%20Mindset/Blog%20Images/truth-real-estate-agent-m.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599080453/New%20Agent%20Mindset/Blog%20Images/truth-real-estate-agent-t640.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599080447/New%20Agent%20Mindset/Blog%20Images/truth-real-estate-agent-d770.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />
        )}

        <BasicEmail heading='Avoid Mistakes' />

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

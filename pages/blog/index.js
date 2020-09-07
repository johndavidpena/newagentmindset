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
        description='New Agent Mindset blog for new real estate agents. The blog contains strategies, tips, and advice for new real estate agents looking to succeed in their real estate careers.'
        canonical='https://newagentmindset.com/blog/index/'
        openGraph={{
          url: 'https://newagentmindset.com/blog/index/',
          title: 'New Real Estate Agent - Blog | New Agent Mindset',
          description: 'New Agent Mindset is a podcast, Youtube channel, Facebook group, and website devoted to helping new real estate agents access the best strategies, tips, tools, and advice. Getting started in real estate is tough and New Agent Mindset exists to help new real estate agents find success!',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
              width: 720,
              height: 720,
              alt: 'New Real Estate Agent Mindset logo',
            },
            // {
            //   url: 'https://www.example.ie/og-image-02.jpg',
            //   width: 900,
            //   height: 800,
            //   alt: 'Og Image Alt Second',
            // },
            // { url: 'https://www.example.ie/og-image-03.jpg' },
            // { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
        }}
      />

      <div className={BlogStyles.blog}>

        <Link href='/blog/posts/truth-real-estate-agent'>
          <div className={BlogStyles.card}>
            <span>September 2, 2020</span>
            <h2>The Truth About Being a Real Estate Agent</h2>

            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599085004/New%20Agent%20Mindset/Blog%20Images/fake-fact-m400.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />

            <h3>New Real Estate Agent Misconceptions</h3>
            <p>As a new real estate agent, there are a lot of misconceptions and myths out there that you'll want to know about. This post is all about the truth about being a real estate agent.</p>
          </div>
        </Link>

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

import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import MainStyles from '../../../../stylesheets/Main.module.css';
import IndexStyles from '../../../../stylesheets/Index.module.css';
import BlogStyles from '../../../../stylesheets/Blog.module.css';

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
        <title>New Real Estate Agent - Buyer Scripts | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - Buyer Scripts | New Agent Mindset'
        description='Here is a collection of buyer scripts for new real estate agents. More will be added on a regular basis, so check back often!'
        canonical='https://newagentmindset.com/resources/buyers/scripts'
        openGraph={{
          url: 'https://newagentmindset.com/resources/buyers/scripts',
          title: 'New Real Estate Agent - Buyer Scripts | New Agent Mindset',
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

      <div>
        <h1 className={MainStyles.title1}>buyer
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;scripts</span>
        </h1>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599080186/New%20Agent%20Mindset/Resources/real-estate-buyers-scripts-m400.jpg' alt='real-estate-buyers-scripts' title='real-estate-buyers-scripts' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599080186/New%20Agent%20Mindset/Resources/real-estate-buyers-scripts-t640.jpg' alt='real-estate-buyers-scripts' title='real-estate-buyers-scripts' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599080186/New%20Agent%20Mindset/Resources/real-estate-buyers-scripts-d770.jpg' alt='real-estate-buyers-scripts' title='real-estate-buyers-scripts' />
        )}
        <p className={BlogStyles.photoCredit}>Photo by Mike Palmowski</p>

        <p>Finding potential buyer clients is an exciting moment for new real estate agents! These moments don't come along often in the beginning so it's even more important to be READY when they do!</p>

        <p>Depending on the situation or individual, take a look at the buyer scripts below and choose one or two that you think will work for you. The general consensus on scripts is to memorize each WORD FOR WORD. And yes, it might not sound "like you" but trust me and everybody else, memorize it word for word before you start making changes to it!</p>

        <Link href='/resources/buyers/scripts/lpmama'>
          <button className={MainStyles.blueButton}>
            LPMAMA<span className={IndexStyles.arrow}>&nbsp;&#10516;</span></button>
        </Link>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

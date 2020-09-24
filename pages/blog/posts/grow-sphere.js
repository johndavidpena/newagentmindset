import Head from 'next/head';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import BasicEmail from '../../../components/Forms/BasicEmail';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import MainStyles from '../../../stylesheets/Main.module.css';

// Keyword: 'sphere of influence real estate'
// Volume: 260/mo | CPC: $2.04 | Competition: 0.06 |
// Keyword: 'personal sphere of influence'
// Volume: 260/mo | Competition: 0 |
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
        <title> | New Agent Mindset</title>
      </Head>

      <NextSeo
        title=' | New Agent Mindset'
        description='.'
        canonical='https://newagentmindset.com/blog/posts/'
        openGraph={{
          url: 'https://newagentmindset.com/blog/posts//',
          title: ' | New Agent Mindset',
          description: '',
          images: [
            {
              url: '',
              width: 640,
              height: 428,
              alt: '',
            },
            {
              url: '',
              width: 640,
              height: 427,
              alt: '',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
              width: 720,
              height: 720,
              alt: 'New Real Estate Agent Mindset logo',
            },
          ],
        }}
      />

      <div>
        <h1 className={MainStyles.title1}>sphere of influence
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;real estate</span>
        </h1>
        <ArticleJsonLd
          url="https://newagentmindset.com/blog/posts/sphere-of-influence"
          title="Sphere of Influence Real Estate"
          images={[
            'https://res.cloudinary.com/mimas-music/image/upload/v1600887774/New%20Agent%20Mindset/Blog%20Images/family-friends-t640.jpg',
            'https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-t640.jpg',
          ]}
          datePublished="2020-09-09T08:00:00+08:00"
          authorName="John Pena"
          publisherName="New Agent Mindset"
          publisherLogo="https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg"
          description=""
        />

        {/* {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600887773/New%20Agent%20Mindset/Blog%20Images/family-friends-m400.jpg' alt='family-friends' title='family-friends' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600887774/New%20Agent%20Mindset/Blog%20Images/family-friends-t640.jpg' alt='family-friends' title='family-friends' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600887774/New%20Agent%20Mindset/Blog%20Images/family-friends-d770.jpg' alt='family-friends' title='family-friends' />
        )} */}

        <h3 className={MainStyles.title3}></h3>

        <ul className={MainStyles.uList}>
          <li>Your extended family</li>
          <li>Your friends, even those ones you haven't see for awhile</li>
          <li>Your neighbors that you know</li>
          <li>Past coworkers</li>
          <li>Your spouse's friends and coworkers</li>
          <li>Your kid's friends or parents</li>
          <li>Members of any groups you're a part of</li>
          <li>Your hair-stylist, doctor, people you do business with</li>
        </ul>

        {/* {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-m400.jpg' alt='announcement' title='announcement' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-t640.jpg' alt='announcement' title='announcement' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-d770.jpg' alt='announcement' title='announcement' />
        )} */}

        <h3 className={MainStyles.title3}></h3>

        <BasicEmail heading='Stay Informed' />

        <h3 className={MainStyles.title3}></h3>


        <br />
        <br />
        <br />
      </div>
    </>
  );
}

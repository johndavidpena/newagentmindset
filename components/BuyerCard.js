import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
// import { useState, useEffect } from 'react';
// import { useWindowSize } from '../hooks/useWindowSize';
import MainStyles from '../stylesheets/Main.module.css';
import BuyerCardStyles from '../stylesheets/BuyerCard.module.css';

const BuyerCard = () => {
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
    <div className={BuyerCardStyles.container}>
      <div className={BuyerCardStyles.titleImage}>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079847/New%20Agent%20Mindset/Envato%20Assets/real-estate-agent-buyer-resources-375.jpg' title='real-estate-buyer-illustration' />
      </div>

      <div className={BuyerCardStyles.description}>
        <p>Knowing what to say to buyers is important. From that initial contact to providing useful information to making sure you follow up, the included resources will help you win buyers and stay top of mind!</p>
      </div>

      <div className={BuyerCardStyles.resources}>
        <h3>RESOURCES</h3>

        <Link href='/resources/buyers/scripts'>
          <p><span>&#10516;</span>&nbsp;Scripts for Buyers</p>
        </Link>
        <Link href='/resources/buyers/info'>
          <p><span>&#10516;</span>&nbsp;Information for Buyers</p>
        </Link>
        <Link href='/resources/buyers/contact'>
          <p><span>&#10516;</span>&nbsp;Buyer Contact Sheet</p>
        </Link>
        <Link href='/resources/buyers/followup'>
          <p><span>&#10516;</span>&nbsp;Buyer Follow Up</p>
        </Link>
      </div>
    </div>
  );
}

export default BuyerCard;

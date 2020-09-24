import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import * as gtag from '../../../../utils/gtag';
import MainStyles from '../../../../stylesheets/Main.module.css';
import ScriptStyles from '../../../../stylesheets/Scripts.module.css';

export default () => {
  // const size = useWindowSize();
  // let width = size.width;

  // const [screenSize, setScreenSize] = useState('');

  // useEffect(() => {
  //   if (width <= 576) {
  //     setScreenSize('mobile');
  //   } else if (width > 576) {
  //     setScreenSize('desktop');
  //   }
  //   return () => { };
  // }, [width]);


  return (
    <>
      <Head>
        <title>New Real Estate Agent Announcement Letter | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent  | New Agent Mindset'
        description=''
        canonical='https://newagentmindset.com/resources/'
        openGraph={{
          url: 'https://newagentmindset.com/resources/',
          title: 'New Real Estate Agent  | New Agent Mindset',
          description: '',
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

      <div className={ScriptStyles.script}>
        <h1 className={MainStyles.title1centered}>announcement letter</h1>


        <br />
        <br />
        {/* TODO: Get this to work! */}
        <a onClick={() => {
          gtag.event({
            action: 'LPMAMApdf_download',
            category: 'Download',
            label: 'LPMAMAMpdf',
            value: 1
          });
          console.log('Download link clicked');
        }}
          href='https://res.cloudinary.com/mimas-music/image/upload/v1599071920/New%20Agent%20Mindset/PDFs/LPMAMA_-_a_script_for_talking_to_buyers.pdf' target='_blank' >Download PDF</a>

        <br />
        <br />

        <Link href='/resources/buyers/scripts'>
          <p className={MainStyles.pAnchor}>Back</p>
        </Link>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

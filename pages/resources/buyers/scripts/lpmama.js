import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../../hooks/useWindowSize';
import MainStyles from '../../../../stylesheets/Main.module.css';
import ScriptStyles from '../../../../stylesheets/Scripts.module.css';

export default () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (width <= 576) {
      setScreenSize('mobile');
    } else if (width > 576) {
      setScreenSize('desktop');
    }
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>New Real Estate Agent - LPMAMA Buyer Script | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - LPMAMA Buyer Script | New Agent Mindset'
        description='LPMAMA is a buyer script for new real estate agents. It stands for Location, Price, Mortgage, Agency, Motivation, and Amenities.'
        canonical='https://newagentmindset.com/resources/buyers/scripts/lpmama/'
        openGraph={{
          url: 'https://newagentmindset.com/resources/buyers/scripts/lpmama/',
          title: 'New Real Estate Agent - LPMAMA Buyer Script | New Agent Mindset',
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

      <div className={ScriptStyles.script}>
        <h1 className={MainStyles.title1centered}>lpmama</h1>

        <h2>INTRODUCTION</h2>
        <p>Introduce yourself, be pleasant.</p>

        <p>"Hi, my name is __________. How is your day going? [When appropriate] It sounds like you are thinking about buying a home, is that correct? Awesome, do you have a minute to talk about what you're looking for in your dream home? Great!</p>

        <h2>LOCATION</h2>
        <p>The "L" stands for location. The objective is to find out where the person wants to move to and find out what they like about that area.</p>

        <p>"Is this the area or side of town that you want to live in? What’s important about being here? Excellent! Is this close to schools/work/etc. for you? Nice, what is it that you do?"</p>

        <h2>PRICE</h2>
        <p>The "P" stands for price. How much does the buyer intend to spend on their home purchase.</p>

        <p>"What price range are you interested in? Fantastic! What would be a comfortable monthly payment for you? There are some GREAT HOMES in this area that fit that range!"</p>

        <h2>MORTGAGE</h2>
        <p>The first "M" stands for mortgage. Is the buyer paying with cash or getting financing? If financing, have they spoken to a lender yet. If you have a couple of lenders that you have established relationships with, then you can suggest those lenders if appropriate.</p>

        <p>"Are you paying cash or financing? Have you had an opportunity to speak to a lender about your loan options? Super! Would you be interested in learning more about what loan options are available to you? Perfect, we work with experienced lenders that can find out if you qualify for these programs."</p>

        <h2>AGENT</h2>
        <p>The "A" stands for agent. Find out if the buyer is working with an agent, and if so, politely terminate the conversation by letting them know that you will not be able to work with them. Don't mess around here, you do NOT want to have an ethics complaint brought against you!</p>

        <p>"Have you had an opportunity to see inside any other homes yet? Great! Just out of curiosity, how have you been seeing inside those homes so far…with an agent or just by visiting open houses? Terrific! I’ll help you find your dream home!"</p>

        <h2>MOTIVATION</h2>
        <p>The second "M" stands for motivation. This is an opportunity to find out why and when the buyer is hoping to make a purchase.</p>

        <p>"What is your current living situation? Do you own or rent?<br />OWN: GREAT, is your home currently on the market for sale? Do you need to sell first?<br />YES: Terrific, how’s it going so far? Fantastic!<br />NO: Terrific, would you be looking to sell your current home, or would you be renting it out? Great!<br />RENT: Super, are you month-to-month or on a long-term lease?<br />TERRIFIC! When does that lease expire? Awesome.<br />In a perfect world, when would you like to be in your NEW HOME? Super!"</p>

        <h2>AMENITIES</h2>
        <p>The "A" stands for amenities. This is your opportunity to find out the details and amenities that are most important to the buyer in their dream home. Take the time (and keep detailed notes) to get as much information as possible from them so that you can provide them with actual listings they may be attracted to.</p>

        <p>"As a buyer’s specialist, can you tell me a little about what you’re looking for:<br />Bedrooms?<br />1-2 Story? (1-story, if I found a 2-story with a master downstairs, would that work?)<br />Cooling?<br />Pool?<br />Kitchen?<br />Other Amenities?"</p>

        <p>"I think I have a good understanding of what you’re looking for. I’m going to send you a list of between 8-10 homes to review. What’s your email address? OKAY, tonight go through and pick your top 4 or 5, and we’ll get together tomorrow to look at those. Click the heart icon in the upper right corner to save it as one of your favorites. That let’s me know your taste, and which homes I’ll need to coordinate for tomorrow."</p>

        <p>"Great, when we meet, I’ll have a Buyer’s Guide that shows a ROAD MAP TO HOME OWNERSHIP including reviewing what’s going on in the market and the home buying process STEP-BY-STEP. How does that sound?"</p>

        <p>"Awesome, would tomorrow at 1 p.m. or 5 p.m. be better for you to look at homes?"</p>

        <p>"Great, I’m going to text you my business card and I’ll follow-up tomorrow morning to talk about those homes I sent. If anything comes up or if you have any questions about buying your home feel free to call or text me and I’ll SEE YOU TOMORROW!"</p>

        <br />
        <br />
        <a href='https://res.cloudinary.com/mimas-music/image/upload/v1599071920/New%20Agent%20Mindset/PDFs/LPMAMA_-_a_script_for_talking_to_buyers.pdf' target='_blank' >Download PDF</a>

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

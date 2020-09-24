import Head from 'next/head';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import BasicEmail from '../../../components/Forms/BasicEmail';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import IndexStyles from '../../../stylesheets/Index.module.css';
import MainStyles from '../../../stylesheets/Main.module.css';

// Keyword: 'circle prospecting'
// Volume: 390/mo | CPC: $3.58 | Competition: 0.08 |
export default () => {
  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  const [loadVideo, setLoadVideo] = useState(false);

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
        <title>What is Circle Prospecting? | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='What is Circle Prospecting? | New Agent Mindset'
        description='Circle prospecting is a lead generation strategy used by many real estate agents, but, is it a good strategy for new real estate agents? This post clearly defines circle prospecting while exploring whether or not it is a good fit for new agents just getting into the business.'
        canonical='https://newagentmindset.com/blog/posts/circle-prospecting/'
        openGraph={{
          url: 'https://newagentmindset.com/blog/posts/circle-prospecting/',
          title: 'What is Circle Prospecting? | New Agent Mindset',
          description: 'Circle prospecting is a lead generation strategy used by many real estate agents, but, is it a good strategy for new real estate agents? This post clearly defines circle prospecting while exploring whether or not it is a good fit for new agents just getting into the business.',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
              width: 720,
              height: 720,
              alt: 'New Real Estate Agent Mindset logo',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-neighborhood-t640.jpg',
              width: 640,
              height: 640,
              alt: 'circle-prospecting-neighborhood',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-calling-t640.jpg',
              width: 640,
              height: 387,
              alt: 'circle-prospecting-calling',
            },
          ],
        }}
      />

      <div>
        <h1 className={MainStyles.title1}>what is
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;circle prospecting?</span>
        </h1>
        <ArticleJsonLd
          url="https://newagentmindset.com/blog/posts/circle-prospecting"
          title="What is Circle Prospecting?"
          images={[
            'https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-neighborhood-t640.jpg',
            'https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-calling-t640.jpg',
          ]}
          datePublished="2020-09-09T08:00:00+08:00"
          authorName="John Pena"
          publisherName="New Agent Mindset"
          publisherLogo="https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg"
          description="Circle prospecting is a lead generation strategy used by many real estate agents, but, is it a good strategy for new real estate agents? This post clearly defines circle prospecting while exploring whether or not it is a good fit for new agents just getting into the business."
        />

        <p>Circle prospecting is a lead gen strategy that is much like geographic farming in which the agent chooses a specific neighborhood or area and attempts to contact as many homeowners as possible. Many agents have a geographic farm that they regularly frequent whether that involves door knocking or calling those homeowners on the phone. When farming an area, an agent will typically offer the owner some 'value' like an update on the market or a value assessment of the home.</p>

        <p>Circle prospecting typically involves an agent contacting an area AROUND a new listing, just sold, or open house. You can imagine a circle (or any shape for that matter) expanding out from a new listing for a distance of, let's say, a couple of miles. All of the homeowners within this radius would be targeted and contacted (door to door, mail, phone call, etc). The short term goal is to find people interested in selling their home. The long term goal is to build personal brand awareness and lasting relationships with owners in the area, eventually winning a consistent number of listings.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-neighborhood-m400.jpg' alt='circle-prospecting-neighborhood' title='circle-prospecting-neighborhood' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-neighborhood-t640.jpg' alt='circle-prospecting-neighborhood' title='circle-prospecting-neighborhood' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-neighborhood-d770.jpg' alt='circle-prospecting-neighborhood' title='circle-prospecting-neighborhood' />
        )}

        <h3 className={MainStyles.title3}>What's the script?</h3>

        <p>So, what do you say to these homeowners when circle prospecting? Let's say that there is a new listing in a neighborhood that you want to target. You would let the other homeowners know that there is a new listing in their neighborhood and talk about the advantages of selling right now. This is not difficult to do because currently (September, 2020), most markets are experiencing a seller's market. The inventory of homes is low and the demand is strong. By speaking to the 'shelter shortage,' you may be able to convince certain homeowners that now is the perfect time to sell.</p>

        <p>As a real estate agent it is your ongoing job to let people know how the market is doing and how they can benefit from it. Do NOT assume that everyday people know much of anything about the housing market. Many people right now during Covid, have absolutely no idea that home prices are rising and the market is great if you're a seller. This is the information that you want to pass along to all of those people you talk to while circle prospecting.</p>

        <p>Our example used a new listing as the point of reference or center of the circle. Note that it doesn't have to be YOUR listing, it can be any listing that comes on the market. This is great for new real estate agents who don't have any listings yet! Additionally, the strategy works with a just sold property. You can begin your conversation by letting the person know that a home was just sold near them and be ready to speak to the facts of the transaction that may be of interest (were there multiple offers, how long was the property on the market, etc).</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599663976/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-calling-m400.jpg' alt='circle-prospecting-calling' title='circle-prospecting-calling' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-calling-t640.jpg' alt='circle-prospecting-calling' title='circle-prospecting-calling' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599663977/New%20Agent%20Mindset/Blog%20Images/circle-prospecting-calling-d770.jpg' alt='circle-prospecting-calling' title='circle-prospecting-calling' />
        )}

        <h3 className={MainStyles.title3}>The Logistics</h3>

        <p>In order to implement circle prospecting, you will first need to decide how you are going to contact the homeowners in your selected area. If you are going to go with door-knocking then you will need to be cautious because of the ongoing pandemic. At the very least, wear a mask, maybe even gloves since you'll be knocking or ringing, and stand back at least 6 feet from the homeowner. Be prepared for some nasty looks and upset people who do not appreciate the uninvited guest.</p>

        <p>If you decide to contact the prospects by phone, you are going to need to find their phone numbers. This is probably not going to be free since most people no longer have a land line. I did hear a real estate agent recently suggest that SOME title companies will give out this information but I find that hard to believe but it couldn't hurt to ask. What most agents do is pay a provider like <a className={MainStyles.externalLink} href='https://www.mojosells.com/' target='_blank' alt='Mojo website'>Mojo</a> or <a className={MainStyles.externalLink} href='https://agentcircleprospecting.com/' target='_blank' alt='Agent Circle Prospecting website'>Agent Circle Prospecting</a>. These services cost around $25 - $75 a month.</p>

        <p>Since you are allocating your time and energy to this task, make sure that you keep notes and collect as much data as possible. You are going to want to make sure that you keep track of who you have and have not talked with, any information you get about fellow neighbors, the market data of homes for sale and purchased recently, and anything else that seems relevant. Circle prospecting is a long game strategy and if you don't follow up consistently with these homeowners, you will have wasted a lot of time and left considerable money on the table.</p>

        <p>Make sure that you are providing value to the homeowner. You want this person to see you as THE authority on all things real estate. Aside from being able to speak intelligently about the real estate market, you should know just about everything you can about the real estate trends in and around the neighborhood. If you are offering a CMA to the homeowner, you can talk to them about any recent improvements they've made. Offer to come by and take a look at those improvements so that they can be added into the valuation of the property. This is a great way to literally get your foot in the door and build that relationship.</p>

        <p>This is a great time to have a social media presence that you can point homeowners to. If you, say, have a Facebook page that showcases you as a real estate agent, make sure that it provides real value. If you succeed in getting a homeowner to engage and then send them to a page with no content or value, you are not doing yourself a favor. The great thing about social media is that it helps you stay top of mind with people and that is exactly what is needed if you are going to play these long game strategies.</p>

        <p>Finally, you need to be consistent and have a follow up plan in place. Sure, you might luck out and find a seller who is ready to list at just the right moment, but more often than not, you are going to need to nurture these relationships and slowly see the payoff over months and years. There has been plenty of research that suggests that real estate agents need to accumulate upwards of 15 - 20 touches with a client before they ever meet face to face or get any real business from the relationship. Remember, circle prospecting, like most lead gen strategies, is a long game that is all about brand awareness, consistency, and follow up.</p>

        <BasicEmail heading='Keep Updated' />

        <h3 className={MainStyles.title3}>Is it good for new agents?</h3>

        <p>So, is circle prospecting a good strategy for new real estate agents or not? My short answer is no and here's why. First of all, circle prospecting is a listing-focused strategy. The goal is to locate sellers and get the listing. Don't get me wrong, this is great and in many ways, is much more pleasant than showing a buyer 50 houses that they can't decide on. The problem is that working with sellers involves more experience and upfront money. Chances are that as a new agent, you don't have much if any experience selling a home and it is more involved than helping a buyer purchase a home.</p>

        <p>At the very least, the potential seller you find while circle prospecting is going to want to know how you plan to sell their home and get them the best price. Do you have a listing presentation yet, if so, have you ever pitched it to a seller? Do you have a listing plan of action and can you assure a seller that it works? Do you have any contractors ready to help the seller make any necessary improvements before getting it on the market? Do you have any experience staging a home? Do you have a list of buyers that you can send the listing out to? Do you have a social media presence that you can capitalize on and use to market the listing?</p>

        <p>Second, unless you plan to go door to door, which like we said before, is a bit risky right now with Covid, you are going to need to pay money to get phone numbers or send out mailers. Most new agents don't have a lot of marketing dollars available to offset the costs involved in circle prospecting. Third, this strategy is going to take up a LOT of your time. Is it really going to be worth it? A long game strategy, by it's very nature, may not pay off for an extended period of time. Can you really afford to put so much of your time and energy into a strategy that may not pay off for months?</p>

        <p>On the other hand, your situation may be such that circle prospecting is a great option. Perhaps you already have developed the know, like, and trust factor with the people in a geographic area or neighborhood. Maybe you are a natural door-knocker who can start up a conversation with just about anyone! If you have some money to spend on phone numbers or mailers and are willing to be consistent, this could be a fantastic strategy that pays dividends over the months and years.</p>

        <p>Regardless of your decision to do or not do circle prospecting, it's helpful to know about as many strategies as possible. As a new real estate agent it is important to quickly and effectively identify a handful of lead generation tactics that you plan to utilize. The most successful agents are the ones who choose wisely, in consideration of their particular strengths and weaknesses. As always, I wish you the best of luck on your new agent journey and feel free to reach out to me with questions or concerns.</p>

        <p>To watch the video episode of this post, check out the link below!</p>

        {/* EPISODE 9 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600292538/New%20Agent%20Mindset/Episodes/episode-9-m400.jpg' alt='episode-9-thumbnail' title='episode-9-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600292539/New%20Agent%20Mindset/Episodes/episode-9-t640.jpg' alt='episode-9-thumbnail' title='episode-9-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600292538/New%20Agent%20Mindset/Episodes/episode-9-d770.jpg' alt='episode-9-thumbnail' title='episode-9-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='what-is-circle-prospecting' width="560" height="315" src="https://www.youtube.com/embed/B3GefNdLdqs" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

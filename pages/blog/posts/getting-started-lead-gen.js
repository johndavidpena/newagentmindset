import Head from 'next/head';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import BasicEmail from '../../../components/Forms/BasicEmail';
import BlogStyles from '../../../stylesheets/Blog.module.css';
import IndexStyles from '../../../stylesheets/Index.module.css';
import MainStyles from '../../../stylesheets/Main.module.css';

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
        <title>Getting Started with Lead Generation | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='Getting Started with Lead Generation | New Agent Mindset'
        description='For new real estate agents, getting started with lead generation is probably the most important priority. This post and corresponding video episode showcases a number of traditional lead gen options to consider if you are a new real estate agent.'
        canonical='https://newagentmindset.com/blog/posts/getting-started-lead-gen/'
        openGraph={{
          url: 'https://newagentmindset.com/blog/posts/getting-started-lead-gen/',
          title: 'Getting Started with Lead Generation | New Agent Mindset',
          description: 'For new real estate agents, getting started with lead generation is probably the most important priority. This post and corresponding video episode showcases a number of traditional lead gen options to consider if you are a new real estate agent.',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
              width: 720,
              height: 720,
              alt: 'New Real Estate Agent Mindset logo',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599077329/New%20Agent%20Mindset/Blog%20Images/lead-gen-two-women-t640.jpg',
              width: 640,
              height: 427,
              alt: 'lead-gen-two-women',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599077824/New%20Agent%20Mindset/Blog%20Images/lead-generation-guy-t640.jpg',
              width: 640,
              height: 426,
              alt: 'lead-generation-guy',
            },
          ],
        }}
      />

      <div>
        <h1 className={MainStyles.title1}>getting started with
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;lead gen</span>
        </h1>
        <ArticleJsonLd
          url="https://newagentmindset.com/blog/posts/getting-started-lead-gen"
          title="Getting Started with Lead Generation"
          images={[
            'https://res.cloudinary.com/mimas-music/image/upload/v1599077329/New%20Agent%20Mindset/Blog%20Images/lead-gen-two-women-t640.jpg',
            'https://res.cloudinary.com/mimas-music/image/upload/v1599077824/New%20Agent%20Mindset/Blog%20Images/lead-generation-guy-t640.jpg',
          ]}
          datePublished="2020-08-28T08:00:00+08:00"
          authorName="John Pena"
          publisherName="New Agent Mindset"
          publisherLogo="https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg"
          description="For new real estate agents, getting started with lead generation is probably the most important priority. This post and corresponding video episode showcases a number of traditional lead gen options to consider if you are a new real estate agent."
        />

        <p>Lead generation, or lead gen, is the practice of finding clients. Typically, buyers, sellers, or investors that are ready, willing, and able to act. As a new real estate agent, this can be a daunting process because it's something completely new for most agents, and there are SO many options to try.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599076399/New%20Agent%20Mindset/Blog%20Images/lead-gen-two-women-m400.jpg' alt='lead-gen-two-women' title='lead-gen-two-women' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599077329/New%20Agent%20Mindset/Blog%20Images/lead-gen-two-women-t640.jpg' alt='lead-gen-two-women' title='lead-gen-two-women' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599077522/New%20Agent%20Mindset/Blog%20Images/lead-gen-two-women-d770.jpg' alt='lead-gen-two-women' title='lead-gen-two-women' />
        )}

        <p className={BlogStyles.photoCredit}>Photo by Amy Hirschi</p>

        <p>So, lets take a look at the more traditional options first, the tried-and-true of the industry if you will.</p>

        <div className={BlogStyles.infoCardGrid}>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Door Knocking</h4>
            <p>This technique involves choosing an area or geographic farm to target. Once selected, the agent will go door to door attempting to engage the homeowner in conversation. Typically the agent will offer the homeowner information on their specific market in hopes that they or someone they know may be looking to sell.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Sphere of Influence</h4>
            <p>Your sphere of influence (SOI) is the people that know, like, and trust you. Often, these people are your family and friends. Many agents routinely reach out to their SOI to ask if they or someone they know is looking to buy, sell, or invest.</p>
          </div>

          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>For Sale By Owners</h4>
            <p>FSBOs are a common prospecting target for agents. Many realtors will contact FSBOs in an attempt to find out their motivation for selling without the aid of an agent and convince them otherwise.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Expired Listings</h4>
            <p>Reaching out to the owners of expired listings is another common practice in real estate. For whatever reason, a home did not sell, the listing expired and a real estate agent may try to convince the seller to let them have a crack at it.</p>
          </div>

          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Past Clients</h4>
            <p>If you're a completely new agent, you don't have any past clients but reaching out to former clients is very common. Much like reaching out to your SOI, you can ask the client if they or someone they know is looking to buy, sell, upgrade, downsize, etc.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Apartments</h4>
            <p>Apartment tenants often believe that renting is more affordable than buying (and sometimes it is) but some agents find success reaching out to these renters and convincing them that it is in their best interest to buy.</p>
          </div>

          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Corporations</h4>
            <p>Many corporations hire employees from other cities and states which means that those new employees will need to relocate to your city. If you can foster a relationship with these businesses, you can be the recommended agent for new hires.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Builders</h4>
            <p>New home builders typically have listing agents or specialists that market and sell their homes. However, nothing is stopping an agent from approaching the builders and offering up your services.</p>
          </div>

          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Booths or Kiosks</h4>
            <p>Many events in your community or city allow vendors to set up booths or kiosks (some will charge a fee, others may not). This is an opportunity to get your face and marketing materials in front of lots of people. The more conversations you can strike up, the better.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Client Parties</h4>
            <p>Again, if you are completely new and don't have any past clients this lead gen option won't work for you. If you do have past clients, though, many agents hold regular events, parties, or get-togethers in order to stay top of mind and fish for potential clients.</p>
          </div>

          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Networking Events</h4>
            <p>Networking events are quite common in most locations. Check with your chamber of commerce, look on Meetup, or check some Facebook groups. The practice and experience that can be gained from these situations is invaluable for your social skills and you never know who you'll meet who might be looking to buy, sell, or invest.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Community Events</h4>
            <p>Getting out into your community is a wonderful way to meet new people and look for clients. By taking an active and genuine interest in the people in your community, you can put yourself out there while staying on top of the pulse of the city.</p>
          </div>

          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Teaching/Speaking Opportunities</h4>
            <p>There are plenty of people out there who are interested in the knowledge that you have gained as a real estate agent. If you can line up a speaking or informational presentation for a group of people, you are well on your way to getting in front of potential clients.</p>
          </div>
          <div className={BlogStyles.infoCard1}>
            <h4><span>&#10516;&nbsp;</span>Volunteer Work</h4>
            <p>This lead gen strategy is not only good for the soul, but great for meeting new people in the community. Remember, your job is to meet as many new people as possible and volunteering at the food bank or your child's school is a great way to do that.</p>
          </div>
        </div>

        <p>Now, all of these lead gen options are prospecting-based rather than marketing-based. Prospecting is traditionally defined as the first step in the sales process, which consists of identifying potential customers, also known as, prospects. The goal of prospecting is to develop a database of likely clients and then systematically communicate with them in the hopes of converting them from potential client to active client.</p>

        <p>Marketing-based or marketing-enhanced lead gen involves YOU spending money on things like advertising, direct mail, broadcast spends, and the like. The good thing about prospecting-based lead gen is that it is free and requires only your time and energy.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599077824/New%20Agent%20Mindset/Blog%20Images/lead-generation-guy-m400.jpg' alt='lead-generation-guy' title='lead-generation-guy' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599077824/New%20Agent%20Mindset/Blog%20Images/lead-generation-guy-t640.jpg' alt='lead-generation-guy' title='lead-generation-guy' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599077817/New%20Agent%20Mindset/Blog%20Images/lead-generation-guy-d770.jpg' alt='lead-generation-guy' title='lead-generation-guy' />
        )}

        <p className={BlogStyles.photoCredit}>Photo by Joseph Frank</p>

        <p>In the beginning of the post I said that these were the more traditional lead gen strategies. These are the strategies that most agents are going to be familiar with and most brokers are going to recommend and train. When I started with Keller Williams, these are the exact strategies that were taught and encouraged.</p>

        <p>I was asked whether or not I preferred the phone or face to face communication and then it was suggested that I choose several options that appealed to me the most. Now, don't get me wrong, I think that these strategies are totally legitimate and have been getting real estate agents business for years and years.</p>

        <p>However, keep in mind that our world has SIGNIFICANTLY changed due to Covid-19 and many of these strategies are not currently effective, safe, or even possible. So, with that said, if you are a new agent, I would encourage you to study this list and do a bit more research of the strategies that you think might work well for you.</p>

        <p>How do you choose? Well, decide what you're good at and decide what you really do NOT want to do! For instance, if you're great on the phone, consider calling FSBOs, expired listings, and your SOI. If you absolutely hate talking on the phone, normally, I would suggest door knocking or going to events, but again, the pandemic has thrown a real monkey wrench into all of that.</p>

        <p>Even so, that doesn't mean that you can't look for safe volunteer opportunities or go to a builder's model home and strike up a conversation with person on site. In these unconventional times, unconventional methods, imagination, and creativity are the necessary tools of the successful.</p>

        <p>Fortunately, in addition to these traditional approaches above, there are several more modern lead gen strategies that leverage social media and technology. This is exactly what we are going to talk about next time, so stay tuned!</p>

        <BasicEmail heading='Stay Updated' />

        <p>If you'd like to watch the video episode of this post, check out the link below!</p>

        {/* EPISODE 5 */}
        {!loadVideo && screenSize === 'mobile' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079375/New%20Agent%20Mindset/episode-5-m400.jpg' alt='episode-5-thumbnail' title='episode-5-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'tablet' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079375/New%20Agent%20Mindset/episode-5-t640.jpg' alt='episode-5-thumbnail' title='episode-5-thumbnail' />
          </div>
        )}

        {!loadVideo && screenSize === 'desktop' && (
          <div className={IndexStyles.thumbnailContainer}>
            <button onClick={() => setLoadVideo(true)}>CLICK To WATCH</button>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079375/New%20Agent%20Mindset/episode-5-d770.jpg' alt='episode-5-thumbnail' title='episode-5-thumbnail' />
          </div>
        )}

        {loadVideo && <div className={MainStyles.videoContainer}>
          <div className={MainStyles.videoResponsive}>
            <iframe title='getting-started-with-lead-generation' width="560" height="315" src="https://www.youtube.com/embed/89Hd6-qss8I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </div>}

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

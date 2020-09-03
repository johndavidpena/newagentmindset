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

        <p>Deciding to become a new real estate agent is a BIG decision. If you are considering getting into real estate, then you should definitely consider the 6 points below. Some of these points are flat out misconceptions that many people have about real estate agents and several constitute the hard truth that you need to hear. This could potentially be one of the biggest decisions of your life - why not start out with the truth so that you can make an informed decision?</p>

        {/* {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599084836/New%20Agent%20Mindset/Blog%20Images/truth-chiselled-into-rock-m400.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599084838/New%20Agent%20Mindset/Blog%20Images/truth-chiselled-into-rock-t640.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599084837/New%20Agent%20Mindset/Blog%20Images/truth-chiselled-into-rock-d770.jpg' alt='truth-real-estate-agent' title='truth-real-estate-agent' />
        )} */}

        <h2 className={MainStyles.title3}>#1 This Is an Easy Job</h2>

        <p>The first misconception that needs to be dispelled is the mistaken notion that being a real estate agent is an easy job. There are certainly agents out there that make it 'look easy' and have social media accounts full of glamorous images of vacations and fancy cars. However, chances are that those same agents have been working their tails off for awhile now and continue to put in the hard work necessary to be successful in this industry.</p>

        <p>Some people might be quick to point out that the actual business of real estate is relatively straight forward, after all, it's not like you even have to go to college. And while that is true, you shouldn't assume that it is a simple scope of knowledge that is required to effectively do the job. On the contrary, there are a significant amount of variables at play in every transaction and a minor mistake on your part could be catastrophic for your client. There are also a number of somewhat un-teachable aspects of the job that you need to master like negotiating and personal relationships.</p>

        <p>Don't be fooled into believing that real estate is going to be easy money either. Sure, there is plenty of money to be made in real estate, that is a fact, BUT, that money typically comes after many, many hours of work. Before you will ever collect a commission, you will have to find a client that wants to work with you and is actually ready, willing, and able to complete a transaction, then spend a considerable amount of time and energy hand-holding that client through the process, and finally after at least 30 days (best case scenario) you will get paid.</p>

        <h2 className={MainStyles.title3}>#2 It's Just Like HGTV</h2>
        <p>Many of us love HGTV and the other home channels out there. My wife and I particularly enjoy the shows about tiny homes and container homes. However, if you think that as a new real estate agent, you're going to have similar experiences as the agents seen on those shows, you are sadly mistaken.</p>

        <p>The idea that a buyer client is going to look at 3 different properties and then buy one, is absolutely inaccurate. People are picky, especially when it comes to the biggest financial decisions of their lives. Since most new real estate agents pay their dues by working with buyers, you should expect to show those buyers a LOT of homes.</p>

        <p>Additionally, you rarely see or hear about any financial or monetary hiccups that might happen during a transaction on HGTV. Why, because most of the buyers and sellers are pre-screened and have been deemed solid financial participants. It wouldn't make for a very good episode if the closing fell apart at the last minute and both parties were frustrated and upset. But, this is EXACTLY what can happen in the real world. Deals fall apart all the time for a variety of reasons, some in your control but many not. This is the truth about being a real estate agent - things will go south sometimes and life isn't like a TV shoW!</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599085004/New%20Agent%20Mindset/Blog%20Images/fake-fact-m400.jpg' alt='fact-vs-fake' title='fact-vs-fake' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599085004/New%20Agent%20Mindset/Blog%20Images/fake-fact-t640.jpg' alt='fact-vs-fake' title='fact-vs-fake' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599085004/New%20Agent%20Mindset/Blog%20Images/fake-fact-d770.jpg' alt='fact-vs-fake' title='fact-vs-fake' />
        )}

        <h2 className={MainStyles.title3}>#3 My Broker Will Give Me Leads</h2>
        <p>Some new real estate agents believe that when they join a broker, that broker will start giving them leads. Since I, myself, haven't been a real estate agent for a long time, maybe this was the case back in the day. After all, 20 years ago or pre-internet, I'm sure that plenty of buyers and sellers actually went to local real estate offices and inquired about real estate services. That really is not the case anymore.</p>

        <p>Most brokers will expect you, as the real estate agent, to spend the majority of your day prospecting or generating leads. THAT is your job, not theirs. Their job, depending on the broker of course, is to make sure you don't mess up, market the general services offered by the broker, and collect money off the backs of their agents. I know that sounds a bit harsh, but I want you to understand that aside from the possibility of some great training and support, your brokerage is NOT going to give you leads.</p>

        <p>It is possible that potential clients will reach out directly to the broker, in which case, someone is going to get that lead. Chances are, though, as the new agent on the block, it's not going to be you. You haven't paid your dues yet and the broker expects you to work hard and generate your own leads initially. So you might be asking, well, what do I need a broker for then? By law, you can not practice real estate on your own, without a broker. (Hopefully you already knew that, especially if you're already an agent! 😀)</p>

        <BasicEmail heading='Avoid Mistakes' />

        <h2 className={MainStyles.title3}>#4 Continuing Education Requirements</h2>
        <p></p>

        <h2 className={MainStyles.title3}>#5 Save money first</h2>
        <p></p>

        <h2 className={MainStyles.title3}>#6 Mindset and Consistency</h2>
        <p></p>

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

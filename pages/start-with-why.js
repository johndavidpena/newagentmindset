import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../hooks/useWindowSize';
import MainStyles from '../stylesheets/Main.module.css';

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
        <title>New Real Estate Agent - Start With Why | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - Start With Why | New Agent Mindset'
        description='New Agent Mindset is a podcast, Youtube channel, Facebook group, and website devoted to helping new real estate agents access the best strategies, tips, tools, and advice. Getting started in real estate is tough and New Agent Mindset exists to help new realtors find success! This page speaks to the importance of every agent figuring out their big WHY.'
        canonical='https://newagentmindset.com/start-with-why/'
        openGraph={{
          url: 'https://newagentmindset.com/start-with-why/',
          title: 'New Real Estate Agent - Start With Why | New Agent Mindset',
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
        <h1 className={MainStyles.title1}>start with
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;why</span>
        </h1>

        <p>You have chosen to become a real estate agent, a job where you don't get paid a salary, you probably don't have health insurance, and you don't get paid unless you help a client buy or sell a home. In fact, YOU pay to be a real estate agent before you ever actually make any money. You don't have financial security or peace of mind and you're always about 45 days away from getting paid when you do start working with a client.</p>

        <p>Now, when you say it that way, it doesn't sound great, does it? So, WHY? Why did you choose this career for yourself?</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078519/New%20Agent%20Mindset/start-whith-why-m400.jpg' alt='start-with-why' title='start-with-why' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532499/New%20Agent%20Mindset/start-whith-why-m.jpg' alt='start-with-why' title='start-with-why' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532496/New%20Agent%20Mindset/start-whith-why-d.jpg' alt='start-with-why' title='start-with-why' />
        )}

        <p>Anytime that you start something new, most people start with WHAT, HOW, or WHEN. This makes complete sense, say I want to learn how to cook better. That's the WHAT (learn how to cook) and there's probably a WHY behind it. Maybe I think it'll be a fun hobby, or I want a healthier lifestyle, or maybe a global pandemic fell on top of our heads and I can't go out to eat as easily!</p>

        <p>Learning to cook is one thing - if it works out great, but if it doesn't work out - fine. But your decision to become a real estate agent is a much bigger decision than learning to cook! This decision has lifelong implications for you and your family. So, what's your WHY for getting into real estate?</p>

        <p>Now, I can't take credit for this line of questioning because 'start with WHY' is all over place right now, from books to podcasts to everything. It's no wonder that it seems to be the go-to advice now because there are so many shiny objects out there to chase - so many WHAT's and HOW's.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078614/New%20Agent%20Mindset/focus-on-why-m400.jpg' alt='focus-on-why' title='focus-on-why' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532648/New%20Agent%20Mindset/focus-on-why-m.jpg' alt='focus-on-why' title='focus-on-why' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532648/New%20Agent%20Mindset/focus-on-why-d.jpg' alt='focus-on-why' title='focus-on-why' />
        )}

        <p>Some advantages of starting with WHY are that it provides a certain clarity and focus to what you do with your time and energy. It puts up some long term goal posts to aim for, and your WHY helps you figure out if this is something that you're actually passionate about. And if you're not passionate and committed to being a real estate agent, you're not going to stick with it.</p>

        <p>Let's take a moment to understand just how challenging of a career we've chosen for ourselves. According to a report from the National Association of Realtors (NAR from now on),</p>

        <span className={MainStyles.stat}>87% of all new real estate agents fail and are out of the industry within 5 years.</span>

        <p>Now if that doesn't sober you up, nothing will! If you can't come up with a good enough WHY, you might as well quit now because being an agent is hard work that pays you $0 until you earn that first commission check.</p>

        <p>Hopefully you're starting to realize that your WHY is important. Additionally, your why needs to be big enough to power you through those moments when things aren't going great. There are going to be plenty of moments when you may end up asking yourself if you've made a terrible mistake. That time when a client backs out of a deal and all the time and energy you spent with them is a wash. A moment when a negotiation falls apart and a commission you were counting on is lost.</p>

        <p>There's really no shortage of 'bad day' scenarios here. We have all had them and even the best agents lose commissions and deals. These are the dark moments when you need a powerful enough WHY to help you pick up the pieces and keep going. Every agent's WHY needs to be in place!</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078727/New%20Agent%20Mindset/aim-for-stars-m400.jpg' alt='aim-for-stars' title='aim-for-stars' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597532773/New%20Agent%20Mindset/aim-for-stars-m.jpg' alt='aim-for-stars' title='aim-for-stars' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599078726/New%20Agent%20Mindset/aim-for-stars-d770.jpg' alt='aim-for-stars' title='aim-for-stars' />
        )}

        <p>So, what's my WHY? Well, after a lot of thought and contemplation, this is my WHY. I've always believed that everything/anything is possible, including my potential as a human being. The only thing that limits me, is ME. Life is short, so my WHY is "to be more, to realize my full potential, to reach for the stars."</p>

        <p>Your WHY might be to take care of your family, to never work for someone else ever again, or to create time and money freedom. Whatever it is, it's right if you believe it and own it.</p>

        <p>Here's some questions to ask yourself as you contemplate your WHY. What was it about real estate that appealed to you? What kind of work have you done in the past that you do NOT want to do again? What kind of work have you done in the past that you enjoyed? What was it about the work that you liked? What keeps you going when things are not going your way? What kind of thoughts help you push through obstacles?</p>

        <p>When you visualize your future, what does it look like? Who else in your life matters? How long do you expect to work? What have you always wanted in life? Do you believe in yourself? What kind of people do you look up to or admire? What motivates you? What inspires you?</p>

        <p>My humble suggestion, take as much time as you need to figure it out NOW. Don't wait, start thinking about it right now and iron it out. Talk to your family and friends if that helps or maybe you already know exactly what it is. Either way, start with WHY!</p>

        <p>I truly hope that this has given you a reason to start with WHY. Thank you for signing up and in the spirit of community, please consider joining the private Facebook group below. When you do, share with the group your WHY. Saying it out loud and sharing it with peers is a simple way to start living it!</p>

        <br />

        <div className={MainStyles.facebookGroup}>
          <a href='https://bit.ly/3kI6Ngw' target='_blank'>
            <img src='https://res.cloudinary.com/mimas-music/image/upload/v1598280362/New%20Agent%20Mindset/facebook-groups550px.jpg' alt='join-facebook-group' title='join-facebook-group' />
          </a>
        </div>

        <p>In addition to joining the Facebook Group, please check out the <Link href='/resources'><span className={MainStyles.internalLink}>Resources Hub</span></Link> by clicking on the menu link above. Currently I am asking new agents to submit their needs here. Tell me what you need, what would be useful, what are your pain points?</p>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

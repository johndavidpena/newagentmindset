import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import { useUser } from '../context/userContext';
import { useWindowSize } from '../hooks/useWindowSize';
import PostStyles from '../stylesheets/Post.module.css';
import MainStyles from '../stylesheets/Main.module.css';
import SignOut from '../components/Forms/SignOut';

export default () => {
  // Our custom hook to get context values
  const { loadingUser, user } = useUser();

  const size = useWindowSize();
  let width = size.width;

  const [screenSize, setScreenSize] = useState('');

  useEffect(() => {
    if (!loadingUser) {
      // You know that the user is loaded: either logged in or out!
      // console.log('[pages/members.js] user: ', user)
    }
    // You also have your firebase app initialized
    // console.log('[pages/members.js] firebase: ', firebase)
  }, [loadingUser, user]);

  useEffect(() => {
    if (width <= 640) {
      setScreenSize('mobile');
    } else if (width > 640) {
      setScreenSize('desktop');
    }
    // TODO: Clean up hook below to avoid memory leak
    return () => { };
  }, [width]);

  return (
    <>
      <Head>
        <title>New Agent Mindset | Start with WHY</title>
      </Head>

      <NextSeo
        title='New Agent Mindset | Start with WHY'
        description='New Agent Mindset | Start with WHY'
        canonical='https://newagentmindset.com/start-with-why/'
      />

      <div className={PostStyles.page}>
        <h1>Start with WHY</h1>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597334022/New%20Agent%20Mindset/start-whith-why-m.jpg' alt='start-with-why' title='start-with-why' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597334022/New%20Agent%20Mindset/start-whith-why-d.jpg' alt='start-with-why' title='start-with-why' />
        )}

        <p>Anytime that you start something new, most people start with WHAT, HOW, or WHEN. This makes complete sense, say I want to learn how to cook better. That's the WHAT (learn how to cook) and there's probably a WHY behind it. Maybe I think it'll be a fun hobby, or I want a healthier lifestyle, or maybe a global pandemic fell on top of our heads and I can't go out to eat as easily!</p>

        <p>But what about YOUR decision to get into real estate and become an agent? That's the WHAT (real estate agent), but what's your WHY?</p>

        <p>Now, I can't take credit for this line of questioning because 'start with WHY' is all over place right now, from books to podcasts to everything. It's no wonder that it seems to be the go-to advice now because there are so many shiny objects out there to chase - so many WHAT's and HOW's.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597335370/New%20Agent%20Mindset/focus-on-why-m.jpg' alt='focus-on-why' title='focus-on-why' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597335371/New%20Agent%20Mindset/focus-on-why-d.jpg' alt='focus-on-why' title='focus-on-why' />
        )}

        <p>Some advantages of starting with WHY are that it provides a certain clarity and focus to what you do with your time and energy. It puts up some long term goal posts to aim for, and your WHY helps you figure out if this is something that you're actually passionate about. And if you're not passionate and committed to being a real estate agent, you're not going to stick with it.</p>

        <p>Let's take a moment to understand just how challenging of a career we've chosen for ourselves. According to a report from the National Association of Realtors (NAR from now on),</p>

        <span className={MainStyles.stat}>87% of all new real estate agents fail and are out of the industry within 5 years.</span>

        <p>Now if that doesn't sober you up, nothing will! If you can't come up with a good enough WHY, you might as well quit now because being an agent is hard work that pays you $0 until you earn that first commission check.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597336519/New%20Agent%20Mindset/aim-for-stars-m.jpg' alt='aim-for-stars' title='aim-for-stars' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1597336520/New%20Agent%20Mindset/aim-for-stars-d.jpg' alt='aim-for-stars' title='aim-for-stars' />
        )}

        <p>So, what's my WHY? Well, after a lot of thought and contemplation, this is my WHY. I've always believed that everything/anything is possible, including my potential as a human being. The only thing that limits me, is ME. Life is short, so my WHY is "to be more, to realize my full potential, to reach for the stars."</p>

        <p>Your WHY might be to take care of your family, to never work for someone else ever again, or to create time and money freedom. Whatever it is, it's right if you believe it and own it.</p>

        <p>My humble suggestion, take as much time as you need to figure it out NOW. Don't wait, start thinking about it right now and iron it out. Talk to your family and friends if that helps or maybe you already know exactly what it is. Either way, start with WHY!</p>

        <p>In the spirit of community, please consider joining the private Facebook group below!</p>

        <button className={MainStyles.button}>
          <a href='https://bit.ly/3kI6Ngw' target='_blank'>Join Now</a>
        </button>

        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

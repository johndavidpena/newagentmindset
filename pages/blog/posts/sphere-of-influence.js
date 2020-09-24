import Head from 'next/head';
import Link from 'next/link';
import { NextSeo, ArticleJsonLd } from 'next-seo';
import { useState, useEffect } from 'react';
import { useWindowSize } from '../../../hooks/useWindowSize';
import BlogIndexCard from '../../../components/BlogIndexCard';
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
        <title>Sphere of Influence for Real Estate Agents | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='Sphere of Influence for Real Estate Agents | New Agent Mindset'
        description='.'
        canonical='https://newagentmindset.com/blog/posts/sphere-of-influence/'
        openGraph={{
          url: 'https://newagentmindset.com/blog/posts/sphere-of-influence/',
          title: 'Sphere of Influence Real Estate | New Agent Mindset',
          description: '',
          images: [
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1599500723/New%20Agent%20Mindset/720blackonWHITE.jpg',
              width: 720,
              height: 720,
              alt: 'New Real Estate Agent Mindset logo',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1600887774/New%20Agent%20Mindset/Blog%20Images/family-friends-t640.jpg',
              width: 640,
              height: 428,
              alt: 'family-friends',
            },
            {
              url: 'https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-t640.jpg',
              width: 640,
              height: 427,
              alt: 'announcement',
            },
          ],
        }}
      />

      <div>
        <h1 className={MainStyles.title1}>sphere of influence for
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;real estate agents</span>
        </h1>
        <ArticleJsonLd
          url="https://newagentmindset.com/blog/posts/sphere-of-influence"
          title="Sphere of Influence for Real Estate Agents"
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

        <BlogIndexCard imageURL='https://res.cloudinary.com/mimas-music/image/upload/v1600980101/New%20Agent%20Mindset/Envato%20Assets/sphereIllustration375.jpg'
          imageInfo='sphere-influence-illustration'
          summary="In real estate, one's sphere of influence accounts for about 42% of all business according to NAR. Your personal sphere of influence requires your immediate and continued attention."
          content1='SOI Explained'
          content2='Organizing Your SOI'
          content3='New Agent Announcement'
          content4='SOI Nurturing'
        />

        <h3 className={MainStyles.title3}>What is a sphere of influence in real estate?</h3>

        <p>For real estate agents, your sphere of influence is the people that you know and have some influence with. This includes your family, friends, and those you do business with. Hopefully, these people already know, like, and trust you. Growing and nurturing your SOI is of utmost importance.</p>

        <p>For most new real estate agents, the first piece of advice is, 'Start with your sphere of influence.' This makes sense because the people that already know, like, and trust you are much more likely to help you out or do business with you. Even if someone in your SOI doesn't have an immediate need for your services, they are more likely to recommend you to someone they know or pass a referral your way. If one of these people does need an agent, they may also be more inclined to work with you even though you are a relative newbie. According to NAR, 42% of an agent's business comes directly from their SOI.</p>

        <p>We have established that this is usually the first piece of advice for most agents, but even so, many new agents DON'T actually follow this advice! Why not, fear of rejection or failure. This fear not only keeps agents from reaching out to their SOI, but it hinders their ability to succeed in the industry altogether. The fear of rejection or failure is one of the main reasons why so many new real estate agents fail and are out of the industry within a couple of years.</p>

        <p>To better help you get over this fear, here are a couple of important points to remember. First, your family and friends like, dare I say, love you. Since this is true, of course they are going to want to help you out however they can! Second, working with a real estate agent is something that most people do every 5 to 15 years and people want to work with someone they TRUST. Third, as the fantastic agent that you are, you want to help your clients get the best deal and service possible. This great service and care is the VALUE that you are offering to your sphere of influence.</p>

        <h3 className={MainStyles.title3}>How social media redefines SOI</h3>

        <p>Later in the post we are going to discuss ways to grow your sphere of influence. As you can imagine, social media sites like Facebook, Instagram, LinkedIn, and others provide amazing opportunities to expand your SOI. However, it's also fair to say that social media has created a bit of a gray area when it comes to 'friends.' You most likely have some influence with your real friends, those people that you know personally and interact with regularly. You probably do not have that same amount of influence with all of your Facebook friends.</p>

        <p>In the next section when we start to organize your SOI, think deeply about who to include. My humble suggestion is that you only include those people that you honestly know and would consider a true friend or acquaintance. If you choose to include EVERY single person that you've connected with on social media, you're missing the point. Chances are, some of those people don't even really know who you are, much less care that you're a real estate agent. If you reach out to them as if they are family or friends, it may come off as insincere or downright awkward.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600887773/New%20Agent%20Mindset/Blog%20Images/family-friends-m400.jpg' alt='family-friends' title='family-friends' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600887774/New%20Agent%20Mindset/Blog%20Images/family-friends-t640.jpg' alt='family-friends' title='family-friends' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600887774/New%20Agent%20Mindset/Blog%20Images/family-friends-d770.jpg' alt='family-friends' title='family-friends' />
        )}

        <h3 className={MainStyles.title3}>Organizing your personal sphere of influence</h3>

        <p>Every real estate agent should know exactly who is in their sphere of influence. A good idea is to get your list together in one place. So, who should be included in your SOI?</p>

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

        <p>There are a number of different ways to organize your SOI. As with most things in real estate, being organized is important. If you are not organized, chances are that you'll be inconsistent with the people in your SOI and you will not stay (or ever become) top of mind. The entire point of having a SOI is to constantly be in touch with them so that they think of you when buying, selling, or investing in real estate.</p>

        <p>One way to organize your SOI is to compartmentalize each person according to how you know them. Is the person 'family,' 'friend', 'acquaintance', 'vendor' (think hair-stylist), etc. You could also label each person according to how well you know them. Many agents use a 'hot - warm - cold' system. A contact is considered 'hot' if they know you very well (family and close friends). 'Warm' is for your friends and contacts that you interact with regularly (social friends, group members, business associates). For those people that are more of a casual acquaintance or who you don't see very often, they would be considered 'cold.'</p>

        <p>Many agents simply keep a list or put their contacts into an excel sheet. This is fine, especially if your sphere isn't too large yet. However, as you start to nurture and follow up with everyone in your list, you may need something more. Most brokerages offer some sort of CRM software which stands for Contact/Customer Relationship Management. The nice thing about this is that you can keep track of the last time that you interacted with someone in your sphere and set automatic reminders for your next follow up.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-m400.jpg' alt='announcement' title='announcement' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-t640.jpg' alt='announcement' title='announcement' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1600893897/New%20Agent%20Mindset/Blog%20Images/announcement-d770.jpg' alt='announcement' title='announcement' />
        )}

        <h3 className={MainStyles.title3}>New real estate agent announcement letter</h3>

        <p>If you are a new real estate agent, then you should definitely consider writing an announcement letter to send to your SOI. This is a great way to get your career started with some momentum. There are a number of ways to handle this. The most personal way to handle this would be to call EVERY person in your sphere and let them know that you are a real estate agent. This is a great way just to catch up with everyone AND let them know that you are in real estate. Additionally, it's a great way to get used to making phone calls that you might otherwise not make!</p>

        <p>Another way is to send a well-crafted email. First, write an email that serves as a template. My suggestion would be to personalize the email to every person that you send it to so that it doesn't come across as impersonal. If you don't have someone's email, then a phone call would be in order. If you can't bring yourself to pick up the phone (acknowledge this to yourself and think about whether or not you will be able to make it as a new agent if this is the case), then a text message or DM could get the job done.</p>

        <p>Let's pause here a moment, though. Real estate is all about the relationships that you have with others. If you are struggling to reach out to the people that know, like, and trust you, you may have a problem. Don't get me wrong, I don't particularly enjoy talking on the phone, BUT, I can and will do it when necessary. And as it turns out, it's necessary quite a bit! Remember when we mentioned the fear of rejection or failure? If you suspect that this is happening, it's better to admit it, face it head on, and try to find some help getting over it.</p>

        <p>For those agents that want an alternative or addition to the 'I'm a real estate agent announcement,' consider throwing a party. A number of new agents have put together social events and invited everyone they know to come out and celebrate their new career. This is a great option that people will remember and it's super personal. Nothing beats a face to face encounter with someone in your sphere!</p>

        <BasicEmail heading='Stay Informed' />

        <h3 className={MainStyles.title3}>Nurturing your SOI</h3>

        <p>Reaching out to your sphere of influence on a regular basis is part of the 'work' of agents. There are as many ways to do this as there are agents. Every agent has his or her particular method for nurturing their SOI. First, you'll have to decide HOW OFTEN you want to 'touch' each person in your sphere. Research suggests that agents need to touch someone upwards of 40 times a year to stay top of mind and win that person's business. Now, I know what you're thinking, how in the world am I going to touch every person in my sphere 40 times a year!</p>

        <p>Here are a number of different ways to help you 'touch' the people in your SOI and stay top of mind.</p>

        <p>A monthly <span className={MainStyles.greenBold}>email newsletter</span> is a great way to reach out to your SOI 12 times a year. Many agents accumulate a number of email addresses along the way and you should definitely be keeping these and organizing them somehow. I like to create labels (I use Gmail) like 'Newsletter Recipients' and attach it to those folks I want to send my newsletter out to. In a future episode and blog post, we will talk exclusively about creating a great monthly newsletter. For now, suffice to say, try to provide VALUE that will be of interest to everybody, even those people who are not in immediate need of your services. You are creating personal brand awareness for the long game, not just trying to find your next buyer or seller.</p>

        <p>If you don't regularly see someone in your SOI, it's a good idea to schedule a <span className={MainStyles.greenBold}>phone call</span> 3 to 4 times a year. Love it or hate it, a phone call is the next best thing to seeing someone face to face. Having an organic conversation with another person is meaningful and memorable. Don't bombard the person with your real estate news or needs, instead, make a genuine connection with the person. Find out what they've been up to and how things are in their life. This is a great time to catch up on what's happening in their life and chances are, the opportunity to talk about your real estate career will naturally come up.</p>

        <p>Most people are used to sending and receiving <span className={MainStyles.greenBold}>text messages and direct messages</span> nowadays and this is a simple and effective way to send someone a quick note. The great thing about this is that people can respond back whenever it's convenient for them. You can send a simple 'thinking of you,' a funny image or meme the person would enjoy, a music or movie recommendation, or any number of things. It's also a great way to suggest talking on the phone or catching up over coffee or a beer.</p>

        <p>An oldie but a goody is <span className={MainStyles.greenBold}>snail mail.</span> For most people, getting an actual letter in the mail from a friend is pretty novel. A number of agents will buy bright colored envelopes that stick out and give a sense of joy and fun when they show up in the mail box. The contents of your letter could be just about anything from letting the person know that you were thinking of them to a personal update about yourself and how excited you are to be a real estate agent. I wouldn't go too aggressive on real estate and try to remember that there's about a 1 in 10 chance that the person actually needs an agent right now. Keep it fun and light. Letters are a great option during holidays!</p>

        <p>Try to arrange a face to face meeting like a <span className={MainStyles.greenBold}>lunch date or event</span> with the people in your SOI. Getting together for lunch, a cup of coffee, or a drink after work is one of the best ways to stay top of mind with the people that matter. A lot of agents make it a priority to host an event for their sphere of influence once or twice a year. This works great because the people in your sphere will have the opportunity to network amongst themselves which could lead to more business for you! It will cost you a bit of money to host an event but it can be well worth the expense.</p>

        <p>Finally, a simple way to touch those folks in your sphere that you may not know that well yet is to comment on their <span className={MainStyles.greenBold}>social feeds.</span> Leaving a positive, supportive comment under someone's post is a nice way to build rapport. After awhile, chances are the other person will follow you a bit more closely and start engaging with your content. Most people love it when other people comment, in a positive way, on their posts or pictures. This is a technique that can gradually lead you into direct messages with the person, which then leads to getting a cup of coffee together.</p>

        <p>So, between all of these methods, do you think you can start to close in on those 40 touches a year? It's an ambitious goal but remember, more than 40% of your real estate business (income) could come directly from your sphere of influence. When you put it that way, it seems well worth it!</p>

        {/* <p>To see the video episode of this post, check out the link below. Spoiler alert, I've got a great story about how I recently FAILED at keeping in touch with someone in my SOI and suffered the consequences. 😢</p> */}

        <br />
        <br />
        <br />
      </div>
    </>
  );
}

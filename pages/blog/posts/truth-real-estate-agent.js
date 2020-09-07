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
        description='There are a lot of misconceptions out there among new real estate agents and this post and corresponding video episode aims to dispel those myths. If you are a new real estate agent then it is important to know the truth about what it is really like being an agent.'
        canonical='https://newagentmindset.com/blog/posts/truth-real-estate-agent/'
        openGraph={{
          url: 'https://newagentmindset.com/blog/posts/truth-real-estate-agent/',
          title: 'New Real Estate Agent - The Truth About Being a Real Estate Agent | New Agent Mindset',
          description: 'There are a lot of misconceptions out there among new real estate agents and this post and corresponding video episode aims to dispel those myths. If you are a new real estate agent then it is important to know the truth about what it is really like being an agent.',
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

        <p>Additionally, you rarely see or hear about any financial or monetary hiccups that might happen during a transaction on HGTV. Why, because most of the buyers and sellers are pre-screened and have been deemed solid financial participants. It wouldn't make for a very good episode if the closing fell apart at the last minute and both parties were frustrated and upset. But, this is EXACTLY what can happen in the real world. Deals fall apart all the time for a variety of reasons, some in your control but many not. This is the truth about being a real estate agent - things will go south sometimes and life isn't like a TV show!</p>

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

        <h2 className={MainStyles.title3}>#4 Education Never Stops</h2>
        <p>In Texas, at least, you have to take 6 real estate courses and pass an exam before you can get your real estate license. These courses are pretty lengthy and cover a wide range of topics from legal contracts to the ins and outs of agency to fiduciary duties. It took me a couple of months to get through all of the courses and about $500. It is possible to complete the courses in a shorter amount of time and the cost varies.</p>

        <p>Those 6 courses are really just the beginning of your education. Every couple of years you will need to complete a number of continuing education courses in order to keep your license up to date and in good standing. Whereas the first 6 courses you take are not optional, you do typically get to choose the continuing ed courses you take. Choices range from courses about legal updates, to working short sales, to marketing, to selling commercial.</p>

        <p>These education courses are required in most states and non-negotiable. In addition to these required classes, chances are you are going to need to seek out answers to the questions and obstacles that start to show up in your business. There is no shortage of real estate instruction out there, some of it free and much of it paid. Many new real estate agents will find a great deal of helpful training at their broker while many will consider hiring a coach or mentor. Just make sure that you don't kid yourself and think that once you get your license, that's the end of your learning.</p>

        <h2 className={MainStyles.title3}>#5 Save money first</h2>
        <p>This one is HUGE! The fact of the matter is that as a new real estate agent, you probably won't make any money for at least 3 - 6 months. Instead, you will pay money to join a broker since most have an initial setup fee. You will also most likely pay a monthly fee to the broker for technology, errors and omissions insurance, and whatever other fees they might charge. Finally, you will pay a fee to your local real estate association for membership and use of the local MLS. (These fees vary by state and broker of course.)</p>

        <p>So, you already paid upwards of $500 to take the licensing courses and exams and now you're putting out anywhere from $500 to $2,000 to get started with a broker and the local real estate association! And don't forget that you'll need to get business cards, some professional head shots, marketing materials, appropriate attire, etc. The startup expenses for new real estate agents can easily be in the thousands of dollars.</p>

        <p>Best case scenario is that you've already managed to line up a client as soon as you get started. This is NOT the norm! If you happen to be that lucky then you are still about 30 - 60 days from getting paid since we know that most transactions from accepted contract to close takes approximately 45 days. So the absolute best case scenario is that you need to have saved up enough money to cover your startup fees and living expenses (mortgage/rent, groceries, utilities, etc) to last about 2 months.</p>

        <p>For the rest of us, it's much more realistic that you won't see your first commission check for about 6 months. Ideally, you will have enough money saved for at least 6 months so that you can focus on real estate full time without stressing about money. Many agents end up having to get a part time job which isn't ideal because you really want to be able to commit to the work full time, but, desperate times call for desperate measures.</p>

        <p>Unfortunately, some agents can't make it to that first commission and end up going back to a job or career they hate. Perhaps they'll return to real estate after they get back on their feet financially, but maybe not. Sometimes it's just easier to settle for the steady paycheck than work hard for something that's harder than one initially thought. Regardless, if you don't have a way to support yourself in the first 6 months (for some, it might even take longer), there's a good chance that you're going to be miserable, stressed out, and end up dropping out of the indusrty altogether.</p>

        {screenSize === 'mobile' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599141990/New%20Agent%20Mindset/Blog%20Images/save-your-money-m400.jpg' alt='save-your-money' title='save-your-money' />
        )}

        {screenSize === 'tablet' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599141991/New%20Agent%20Mindset/Blog%20Images/save-your-money-t640.jpg' alt='save-your-money' title='save-your-money' />
        )}

        {screenSize === 'desktop' && (
          <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599141991/New%20Agent%20Mindset/Blog%20Images/save-your-money-d770.jpg' alt='save-your-money' title='save-your-money' />
        )}

        <h2 className={MainStyles.title3}>#6 Mindset and Consistency</h2>
        <p>The last truth about being a new real estate agent is that this job requires a strong, positive mindset and regimented consistency. This career, especially at the beginning, is going to be a roller coaster. There are going to be highs and lows and you'll need a mindset that allows you to deal with all of that. Your mindset, or established set of attitudes, controls how you respond in the face of adversity and deal with both internal and external pressures.</p>

        <p>One of the main reasons that I started NAM is because I've always believed that your mindset is key to your success. As a teacher for a number of years, I can't tell you how many times mindset played a critical role in a student's outcome. The attitudes we have about ourself and others factor into just about every aspect of our lives. From how we develop and maintain new relationships to how we deal with hardship, mindset matters!</p>

        <p>One truth that many new real estate agents don't realize is the importance of consistency. Consistency is the steadfast adherence to a pattern of behaviors or actions. I can admit that I had no idea how important consistency was going to be in real estate. In a business where you are trying to become and stay 'top of mind,' consistency is your most powerful tool.</p>

        <p>Many of the lead gen strategies that you are going to employ depend on consistent action. Whether it's circle prospecting, door knocking, or running a YouTube channel, you need to establish a schedule and stick to it. So many agents start something and give it after only a short time. Many of the strategies that are designed to attract clients require consistent action over time. That time may be several weeks if not months, and the only way to see the results is to stick with it!</p>

        <h2 className={MainStyles.title3}>BONUS What Others Say</h2>
        <p>As an added bonus, I recently asked a large group of realtors what misconceptions they had when they first got started. Here are some of their responses...</p>

        <p>"You make great $ for working part time...lots of vacations, people will just need to buy and sell. Easy stuff!"</p>
        <p>"How hard can it really be?"</p>
        <p>"It’s great money and an easy/open schedule."</p>
        <p>"All we do is show homes..."</p>
        <p>"I thought that unrepresented people would just walk into the brokers office looking for a realtor on a regular basis."</p>
        <p>"It’s easy and I’m gonna do it as a side gig haha."</p>
        <p>"You just show houses and get paid big $$."</p>
        <p>"You are actually running a business and are responsible for everything. EVERYTHING!"</p>

        <p>I typically like to be very positive and upbeat because I do believe that real estate is a great career IF you're willing to put in the hard work and play the long game. This post includes the reality of what it's like to be a new real estate agent and I believe that it's better to know what you're getting into than jump in blindly. Real estate is an amazing opportunity to build wealth while helping people buy and sell homes. If you are thinking about getting into real estate, I say, go for it, BUT make sure you do your research first and be prepared!</p>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

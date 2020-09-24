import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import MainStyles from '../stylesheets/Main.module.css';
import BuyerCardStyles from '../stylesheets/BuyerCard.module.css';

const NewAgentCard = () => {
  return (
    <div className={BuyerCardStyles.container}>
      <div className={BuyerCardStyles.titleImage}>
        <img src='https://res.cloudinary.com/mimas-music/image/upload/v1599079847/New%20Agent%20Mindset/Envato%20Assets/real-estate-agent-buyer-resources-375.jpg' title='new-agent-illustration' alt='new-agent-illustration' />
      </div>

      <div className={BuyerCardStyles.description}>
        <p>Brand new agent? Here are some resources to implement right away. Start by letting your sphere of influence KNOW that you're an agent now!</p>
      </div>

      <div className={BuyerCardStyles.resources}>
        <h3>RESOURCES</h3>

        <Link href='/resources/newAgents/announcementLetter'>
          <p><span>&#10516;</span>&nbsp;Announcement Letter</p>
        </Link>
        {/* <Link href='/resources/newAgents/'>
          <p><span>&#10516;</span>&nbsp;Social Media Blueprint</p>
        </Link> */}
        {/* <Link href='/resources/newAgents/'>
          <p><span>&#10516;</span>&nbsp;</p>
        </Link>
        <Link href='/resources/newAgents/'>
          <p><span>&#10516;</span>&nbsp;</p>
        </Link> */}
      </div>
    </div>
  );
}

export default NewAgentCard;

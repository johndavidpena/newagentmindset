import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import ResourceStyles from '../../stylesheets/Resources.module.css';
import MainStyles from '../../stylesheets/Main.module.css';
import BuyerCard from '../../components/BuyerCard';
import ResourceNeeds from '../../components/Forms/ResourceNeeds';

export default () => {

  return (
    <>
      <Head>
        <title>New Real Estate Agent - Resources Hub | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent - Resources Hub | New Agent Mindset'
        description='New real estate agents have enough to worry about when getting started, here are a number of ever increasing resources for free. Please let us know what you need as a new real estate agent and we will provide it for you if at all possible.'
        canonical='https://newagentmindset.com/resources/index/'
        openGraph={{
          url: 'https://newagentmindset.com/resources/index/',
          title: 'New Real Estate Agent - Resources Hub | New Agent Mindset',
          description: 'New real estate agents have enough to worry about when getting started, here are a number of ever increasing resources for free. Please let us know what you need as a new real estate agent and we will provide it for you if at all possible.',
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

      <>
        <h1 className={MainStyles.title1}>new agent resource
         <span aria-hidden="true" className={MainStyles.title2}>&nbsp;hub</span>
        </h1>

        <div className={ResourceStyles.topSection}>
          <p>Welcome new agents, what do you need?</p>
          <ResourceNeeds />
        </div>

        <BuyerCard />
      </>
    </>
  );
}

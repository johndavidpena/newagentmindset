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
        <title>New Real Estate Agent Resources | New Agent Mindset</title>
      </Head>

      <NextSeo
        title='New Real Estate Agent Resources | New Agent Mindset'
        description='New Agent Mindset is a podcast, Youtube channel, Facebook group, and website devoted to helping new real estate agents access the best strategies, tips, tools, and advice. Getting started in real estate is tough and New Agent Mindset exists to help new realtors find success! This resource hub is a starting off point for finding everything a new real estate agent might need.'
        canonical='https://newagentmindset.com/resources/index/'
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

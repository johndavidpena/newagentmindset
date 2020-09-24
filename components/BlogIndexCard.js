import Head from 'next/head';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import MainStyles from '../stylesheets/Main.module.css';
import BuyerCardStyles from '../stylesheets/BuyerCard.module.css';

const BlogIndexCard = props => {
  return (
    <div className={BuyerCardStyles.container}>
      <div className={BuyerCardStyles.titleImage}>
        <img src={props.imageURL} title={props.imageInfo} alt={props.imageInfo} />
      </div>

      <div className={BuyerCardStyles.description}>
        <p>{props.summary}</p>
      </div>

      <div className={BuyerCardStyles.contents}>
        <h3>CONTENTS</h3>

        <p><span>&#10516;</span>&nbsp;{props.content1}</p>

        <p><span>&#10516;</span>&nbsp;{props.content2}</p>

        <p><span>&#10516;</span>&nbsp;{props.content3}</p>

        <p><span>&#10516;</span>&nbsp;{props.content4}</p>
      </div>
    </div>
  );
}

export default BlogIndexCard;

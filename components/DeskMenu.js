// import Link from 'next/link';
import Link from './Link';
import NavStyles from '../stylesheets/Navigation.module.css';

const DeskMenu = () => (
  <div className={NavStyles.container}>
    <div className={NavStyles.deskLinkContainer}>
      <Link href='/blog'>
        <a className={NavStyles.deskLink}>blog</a>
      </Link>

      <Link href='/episodes'>
        <a className={NavStyles.deskLink}>episodes</a>
      </Link>

      <Link href='/resources'>
        <a className={NavStyles.deskLink}>resources</a>
      </Link>
    </div>

    <Link href='/'>
      <a>
        <span className={NavStyles.title}>nam
         <span aria-hidden="true" className={NavStyles.period}>.</span>
        </span>
      </a>
    </Link>
  </div>
);

export default DeskMenu;

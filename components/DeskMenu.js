// import Link from 'next/link';
import Link from './Link';
import NavStyles from '../stylesheets/Navigation.module.css';

const DeskMenu = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <div className={NavStyles.deskLinkContainer}>
        <Link href='/blog/index'>
          <a className={NavStyles.deskLink}>blog</a>
        </Link>

        <Link href='/resources/index'>
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
  </div>
);

export default DeskMenu;

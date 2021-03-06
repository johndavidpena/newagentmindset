import Link from 'next/link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const GuestDeskMenu = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <div className={NavStyles.deskLinkContainer}>
        <Link href='/blog/'>
          <a className={NavStyles.deskLink}>blog</a>
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

export default GuestDeskMenu;

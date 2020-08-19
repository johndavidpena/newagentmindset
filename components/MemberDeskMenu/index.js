import Link from 'next/link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const MemberDeskMenu = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <div className={NavStyles.deskLinkContainer}>
        <Link href='/blog/'>
          <a className={NavStyles.deskLink}>blog</a>
        </Link>

        <Link href='/resources/'>
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

export default MemberDeskMenu;

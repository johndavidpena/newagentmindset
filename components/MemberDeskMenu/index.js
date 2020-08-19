import Link from 'next/link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const MemberDeskMenu = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <div className={NavStyles.deskLinkContainer}>
        <Link href='/blog/index'>
          <a className={NavStyles.deskLink}
            onClick={() => setOpen(!open)}>blog</a>
        </Link>

        <Link href='/resources/index'>
          <a className={NavStyles.deskLink}
            onClick={() => setOpen(!open)}>resources</a>
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

import Link from 'next/link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const MemberDeskMenu = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <Link href='/blog/index'>
        <a onClick={() => setOpen(!open)}>blog</a>
      </Link>

      <Link href='/resources/index'>
        <a onClick={() => setOpen(!open)}>resources</a>
      </Link>

      <Link href='/'>
        <a>
          <span className={NavStyles.lastName}>nam
         <span aria-hidden="true" className={NavStyles.period}>.</span>
          </span>
        </a>
      </Link>
    </div>
  </div>
);

export default MemberDeskMenu;

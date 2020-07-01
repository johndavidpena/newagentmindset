import Link from 'next/link';
import NavStyles from './Navigation.module.css';

const DeskNav = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <Link href='/'>
        <a>
          {/* <span className={NavStyles.firstName}>next</span> */}
          <span className={NavStyles.lastName}>nam
         <span aria-hidden="true" className={NavStyles.period}>.</span>
          </span>
        </a>
      </Link>
    </div>
  </div>
);

export default DeskNav;

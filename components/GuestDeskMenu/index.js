import Link from 'next/link';
import NavStyles from '../../stylesheets/Navigation.module.css';

const GuestDeskMenu = () => (
  <div>
    <div className={NavStyles.nameContainer}>
      <Link href='/blog/index'>
        <a onClick={() => setOpen(!open)}>blog</a>
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

export default GuestDeskMenu;

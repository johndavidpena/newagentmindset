import { useRef } from 'react';
import Link from 'next/link';
import HeaderStyles from './Header.module.css';
import Burger from '../Burger';
import SideMenu from '../SideMenu';
import { useOnClickOutside } from '../../hooks/burgerHook';

const Header = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={HeaderStyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <SideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={HeaderStyles.nameContainer}>
        <Link href='/'>
          <a>
            {/* <span className={HeaderStyles.firstName}>NOW</span> */}
            <span className={HeaderStyles.lastName}>nam
              <span aria-hidden="true" className={HeaderStyles.period}>.</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default Header;
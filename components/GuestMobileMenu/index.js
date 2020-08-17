import { useRef } from 'react';
import Link from 'next/link';
import Burger from '../Burger';
import GuestSideMenu from '../GuestSideMenu';
import { useOnClickOutside } from '../../hooks/burgerHook';
import HeaderStyles from '../../stylesheets/Header.module.css';

const GuestMobileMenu = ({ open, setOpen }) => {
  const node = React.useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <nav className={HeaderStyles.burger}>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <GuestSideMenu open={open} setOpen={setOpen} />
      </div>

      <div className={HeaderStyles.nameContainer}>
        <Link href='/'>
          <a>
            <span className={HeaderStyles.lastName}>nam
              <span aria-hidden="true" className={HeaderStyles.period}>.</span>
            </span>
          </a>
        </Link>
      </div>
    </nav>
  );
}

export default GuestMobileMenu;

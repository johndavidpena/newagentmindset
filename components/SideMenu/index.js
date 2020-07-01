import SideMenuStyles from './SideMenu.module.css';
import Link from 'next/link';

const Menu = ({ open, setOpen }) => {
  const openStyle = {
    transform: 'translateX(0)'
  }

  const closedStyle = {
    transform: 'translateX(-100%)'
  }
  return (
    <div open={open}
      className={SideMenuStyles.menu}
      style={open ? openStyle : closedStyle}
    >
      <Link href='/'>
        <a onClick={() => setOpen(!open)}>Home</a>
      </Link>
    </div>
  );
}

export default Menu;

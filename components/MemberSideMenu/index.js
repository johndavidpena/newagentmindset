import Link from 'next/link';
import SideMenuStyles from '../../stylesheets/SideMenu.module.css';

const MemberSideMenu = ({ open, setOpen }) => {
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

      <Link href='/blog/index'>
        <a onClick={() => setOpen(!open)}>Blog</a>
      </Link>

      <Link href='/resources/index'>
        <a onClick={() => setOpen(!open)}>Resources</a>
      </Link>
    </div>
  );
}

export default MemberSideMenu;

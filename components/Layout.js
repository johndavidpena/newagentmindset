import { useSpring, animated } from 'react-spring';
import { useWindowSize } from '../hooks/useWindowSize';
import { useState, useEffect } from 'react';
import MainStyles from '../stylesheets/Main.module.css';
import MobileMenu from './MobileMenu';
import DeskMenu from './DeskMenu';

export default props => {
  const fade = useSpring({ config: { duration: 950 }, from: { opacity: 0 }, opacity: 1 });

  const size = useWindowSize();
  let width = size.width;

  const [menu, setMenu] = useState('');

  useEffect(() => {
    if (width <= 768) {
      setMenu('mobile');
    } else if (width > 768) {
      setMenu('desktop');
    }
    return () => { };
  }, [width]);

  const [open, setOpen] = useState(false);

  return (
    <animated.div style={fade}>
      <div className={MainStyles.pageGrid}>
        {menu === 'mobile' && <MobileMenu open={open} setOpen={setOpen} /> || <DeskMenu />}

        <main className={MainStyles.page}>
          {props.content}
        </main>
      </div>
    </animated.div>
  );
}

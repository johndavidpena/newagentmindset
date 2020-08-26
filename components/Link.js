import Link from 'next/link';
import { useRouter } from 'next/router';
import NavStyles from '../stylesheets/Navigation.module.css';

export default ({ href, children }) => {
  const router = useRouter();

  let className = children.props.className || ''
  if (router.pathname === href) {
    className = `${className} ${NavStyles.selected}`
    // className = `${className} selected`
  }

  return <Link href={href}>{React.cloneElement(children, { className })}</Link>
}

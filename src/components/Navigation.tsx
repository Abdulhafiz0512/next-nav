
import Link from 'next/link';
import styles from './Navigation.module.css';

interface NavItem {
  title: string;
  href: string;
}

interface NavigationProps {
  items: NavItem[];
}

const Navigation: React.FC<NavigationProps> = ({ items }) => {
  return (
    <nav className={styles.nav}>
      <ul>
        {items.map((item) => (
          <li key={item.href}>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

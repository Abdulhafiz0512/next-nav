
import Navigation from '../components/Navigation';

const Home = () => {
  const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Users', href: '/users' },
  ];

  return (
    <div>
      
      <Navigation items={navItems} />
      <h1>Home</h1>
    </div>
  );
};

export default Home;

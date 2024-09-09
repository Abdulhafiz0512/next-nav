
import Navigation from '../../components/Navigation';

const Users = () => {
  const navItems = [
    { title: 'User1', href: '/users/user1' },
    { title: 'User2', href: '/users/user2' },
  ];

  return (
    <div>
      
      <Navigation items={navItems} />
      <h1>Users</h1>
    </div>
  );
};

export default Users;

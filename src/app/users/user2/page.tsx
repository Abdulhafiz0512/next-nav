// pages/users/user2.tsx
import Navigation from "@/components/Navigation";

const User2 = () => {
  const navItems = [
    { title: 'Friend', href: '/users/user2/friend' },
  ];

  return (
    <div>
      
      <Navigation items={navItems} />
      <h1>User2</h1>
    </div>
  );
};

export default User2;

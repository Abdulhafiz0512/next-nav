
import Navigation from "@/components/Navigation";

const User1 = () => {
  const navItems = [
    { title: 'Abdulhafiz', href: '/users/user1/abdulhafiz' },
  ];

  return (
    <div>
      
      <Navigation items={navItems} />
      <h1>User1</h1>
    </div>
  );
};

export default User1;

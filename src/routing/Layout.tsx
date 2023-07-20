import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  // throw new Error('Something went wrong!!!');
  return (
    <>
      <NavBar />
      <div id='main'>
        {/* // Outlet is like a placeholder for child component */}
        <Outlet />
      </div>
    </>
  );
};

export default Layout;

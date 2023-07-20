import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import ContactPage from './ContactPage';
{
  /* <BrowserRouter /> */
}

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/users', element: <UserListPage /> },
  { path: '/contact', element: <ContactPage /> },
]);

export default router;

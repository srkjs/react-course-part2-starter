import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserListPage from './UserListPage';
import ContactPage from './ContactPage';
import UserDetailPage from './UserDetailPage';
import Layout from './Layout';
{
  /* <BrowserRouter /> */
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      // { path: '', element: <HomePage /> },
      { index: true, element: <HomePage /> },
      { path: 'users', element: <UserListPage /> },
      { path: 'users/:id', element: <UserDetailPage /> },
    ],
  },
]);

export default router;

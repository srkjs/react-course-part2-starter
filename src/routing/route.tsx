import { BrowserRouter, createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import UserList from './UserList';
import ContactPage from './ContactPage';
import UserDetail from './UserDetail';
import Layout from './Layout';
import UsersPage from './UsersPage';
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
      {
        path: 'users',
        element: <UsersPage />,
        children: [{ path: ':id', element: <UserDetail /> }],
      },
    ],
  },
]);

export default router;

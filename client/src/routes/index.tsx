import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import AuthLayout from '../layouts/AuthLayout';
import SignIn from '../pages/auth/SignIn';
import SignUp from '../pages/auth/SignUp';
import HomeLayout from '../layouts/HomeLayout';
import Home from '../pages/Home';

// Define the router configuration
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      // Add more main app routes here if needed
    ],
  },
  {
    path: '/home',
    element: <HomeLayout />,
    children: [
      {
        path: '/home',
        element: <Home />,
      },
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: 'sign-in',
        element: <SignIn />,
      },
      {
        path: 'sign-up',
        element: <SignUp />,
      },
    ],
  },
]);

export default router;
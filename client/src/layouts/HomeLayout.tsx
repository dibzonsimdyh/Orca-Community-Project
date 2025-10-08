import Navbar2 from '@/components/Navbar2';
import { Toaster } from '@/components/ui/sonner';
import { Outlet } from 'react-router-dom';

const HomeLayout = () => {
  return (
    <div>
        <Toaster  position="bottom-right" richColors />
        <Navbar2 />
        <Outlet />
    </div>
  );
};

export default HomeLayout;
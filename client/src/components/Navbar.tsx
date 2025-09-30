
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="bg-background border-b shadow-sm py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold">
          Orca
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="/" className="text-foreground hover:text-muted-foreground">Home</Link></li>
            <li><a href="/about" className="text-foreground hover:text-muted-foreground">About</a></li>
            <li><a href="/contact" className="text-foreground hover:text-muted-foreground">Contact</a></li>
          </ul>
        </nav>
        <div className="flex space-x-4">
          <Link to="/auth/sign-in">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link to="/auth/sign-up">
            <Button>Sign Up</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
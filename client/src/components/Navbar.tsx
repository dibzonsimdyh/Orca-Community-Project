
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/contexts/theme-context';

const Navbar = () => {
  const { theme, setTheme } = useTheme();

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
        <div className="flex items-center space-x-4">
          <Button
            variant="outline"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>
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
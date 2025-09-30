import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] bg-muted p-6">
      <h1 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-6">
        Welcome to Orca Community Platform
      </h1>
      <p className="text-lg text-muted-foreground text-center max-w-2xl mb-10">
        A community-based platform with CRUD functionality designed to connect and empower users.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link to="/auth/sign-up">
          <Button size="lg">
            Sign Up
          </Button>
        </Link>
        <Link to="/auth/sign-in">
          <Button 
            variant="outline" 
            size="lg"
          >
            Sign In
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
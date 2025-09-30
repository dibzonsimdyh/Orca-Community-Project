import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-muted text-foreground py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-xl font-bold">Orca Community Platform</h2>
            <p className="text-muted-foreground mt-2">Connecting communities, empowering users.</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Privacy</a>
            <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
          </div>
        </div>
        <div className="border-t border-border mt-6 pt-6 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Orca Community Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
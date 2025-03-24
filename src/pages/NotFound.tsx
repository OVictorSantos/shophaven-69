
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center px-6 py-12">
      <div className="text-center max-w-md">
        <h1 className="text-5xl md:text-7xl font-display font-medium mb-6 animate-fade-in">404</h1>
        
        <div className="w-24 h-1 bg-accent/50 mx-auto mb-6 animate-scale-in"></div>
        
        <p className="text-xl md:text-2xl mb-8 text-muted-foreground animate-fade-in">
          The page you're looking for doesn't exist or has been moved.
        </p>
        
        <Link 
          to="/" 
          className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium inline-flex items-center gap-2 hover:opacity-90 transition-opacity animate-slide-in"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

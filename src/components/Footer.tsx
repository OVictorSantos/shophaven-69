
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-background pt-16 pb-8 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          <div>
            <Link to="/" className="text-foreground font-display font-medium text-xl mb-6 inline-block">
              Essence
            </Link>
            <p className="text-muted-foreground max-w-xs">
              Creating thoughtfully designed products that combine form and function in perfect harmony.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {['twitter', 'instagram', 'facebook', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href={`https://${social}.com`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors"
                  aria-label={`${social} link`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          {[
            {
              title: "Products",
              links: ["All Products", "Featured", "Latest", "Bestsellers", "Special Offers"]
            },
            {
              title: "Company",
              links: ["About Us", "Our Story", "Careers", "Press", "Sustainability"]
            },
            {
              title: "Support",
              links: ["FAQs", "Shipping & Returns", "Contact Us", "Privacy Policy", "Terms of Service"]
            }
          ].map((column, index) => (
            <div key={index}>
              <h3 className="font-medium text-foreground mb-6">{column.title}</h3>
              <ul className="space-y-3">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">
            © 2023 Essence. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground text-sm hover:text-foreground transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

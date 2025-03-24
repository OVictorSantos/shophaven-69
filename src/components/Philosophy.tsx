
import React, { useRef, useEffect } from 'react';

const Philosophy = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = sectionRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));
    
    return () => {
      revealElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="philosophy" 
      ref={sectionRef}
      className="py-24 md:py-32 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-transparent z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4 reveal">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 reveal delay-1">
              Less, but better
            </h2>
            <div className="space-y-6">
              <p className="text-foreground/80 text-lg reveal delay-2">
                We believe in creating products that embrace simplicity without sacrificing functionality. Our design philosophy is centered around three core principles:
              </p>
              
              <div className="space-y-4 reveal delay-3">
                {[
                  {
                    title: "Simplicity",
                    description: "Removing the unnecessary to focus on what truly matters."
                  },
                  {
                    title: "Functionality",
                    description: "Every detail serves a purpose, enhancing the user experience."
                  },
                  {
                    title: "Quality",
                    description: "Premium materials and precise craftsmanship for lasting value."
                  }
                ].map((principle, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-accent">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">{principle.title}</h3>
                      <p className="text-muted-foreground">{principle.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="text-foreground/80 text-lg reveal delay-4">
                Our commitment to thoughtful design extends beyond aesthetics to create products that genuinely improve everyday experiences.
              </p>
              
              <div className="reveal delay-5">
                <a href="#contact" className="text-accent font-medium text-lg flex items-center gap-2 hover:gap-3 transition-all">
                  Learn about our process
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="aspect-square relative rounded-2xl overflow-hidden reveal">
              <img 
                src="https://images.unsplash.com/photo-1585435421671-0c16737a461b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                alt="Clean, minimalist workspace" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            
            <div className="absolute bottom-8 left-8 right-8 glass p-6 rounded-xl reveal delay-2">
              <p className="text-lg font-medium mb-2">"Design is not just what it looks like and feels like. Design is how it works."</p>
              <p className="text-sm text-muted-foreground">— A design philosophy we live by</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;

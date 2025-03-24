
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  // Parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current || !imageRef.current || !textRef.current) return;
      
      const { clientX, clientY } = e;
      const x = (clientX / window.innerWidth) - 0.5;
      const y = (clientY / window.innerHeight) - 0.5;
      
      imageRef.current.style.transform = `translateX(${x * -20}px) translateY(${y * -20}px)`;
      textRef.current.style.transform = `translateX(${x * 20}px) translateY(${y * 20}px)`;
    };

    // Reveal animation on load
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, { threshold: 0.1 });

    const revealElements = heroRef.current?.querySelectorAll('.reveal');
    revealElements?.forEach(el => observer.observe(el));

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      revealElements?.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
      id="home"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/50 to-transparent z-0"></div>
      
      <div 
        ref={imageRef}
        className="absolute inset-0 z-0 opacity-70"
      >
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] rounded-full bg-accent/10 blur-3xl"></div>
        <div className="absolute left-1/4 top-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 md:px-12 z-10">
        <div 
          ref={textRef} 
          className="max-w-3xl mx-auto md:mx-0 text-center md:text-left"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-6 reveal delay-1">
            Designed for perfection
          </span>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium leading-tight mb-6 reveal delay-2">
            Simple. Elegant. <br /> Refined.
          </h1>
          
          <p className="text-foreground/70 text-lg md:text-xl mb-10 max-w-xl mx-auto md:mx-0 reveal delay-3">
            Discover products that combine form and function in perfect harmony, crafted with meticulous attention to detail.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start reveal delay-4">
            <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity w-full sm:w-auto">
              Explore Collection
            </button>
            <button className="border border-border bg-background/80 backdrop-blur-sm text-foreground px-8 py-3 rounded-full font-medium hover:bg-secondary transition-colors w-full sm:w-auto">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

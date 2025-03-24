
import React, { useRef, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  imageUrl: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Minimalist Timepiece",
    description: "Clean design with premium materials",
    price: "$299",
    imageUrl: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    name: "Ceramic Speaker",
    description: "Acoustic perfection in a simple form",
    price: "$499",
    imageUrl: "https://images.unsplash.com/photo-1545454675-3531b543be5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    name: "Desk Organizer",
    description: "Beautiful functionality for your workspace",
    price: "$129",
    imageUrl: "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  },
];

const ProductShowcase = () => {
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
      id="product" 
      ref={sectionRef}
      className="py-24 md:py-32 bg-background relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-secondary/20 z-0"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <span className="inline-block px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium mb-4 reveal">
            Our Collection
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-medium mb-6 reveal delay-1">
            Thoughtfully Designed Products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg reveal delay-2">
            Each item is meticulously crafted to enhance your everyday experience through
            thoughtful design and premium materials.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {products.map((product, index) => (
            <div 
              key={product.id} 
              className={`group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 reveal ${
                index === 0 ? 'delay-2' : index === 1 ? 'delay-3' : 'delay-4'
              }`}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.imageUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-medium mb-2">{product.name}</h3>
                <p className="text-muted-foreground mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-medium">{product.price}</span>
                  <button 
                    className="text-accent font-medium text-sm flex items-center gap-1 group-hover:gap-2 transition-all"
                  >
                    View details
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16 reveal delay-5">
          <button className="bg-primary text-primary-foreground px-8 py-3 rounded-full font-medium hover:opacity-90 transition-opacity">
            View All Products
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;

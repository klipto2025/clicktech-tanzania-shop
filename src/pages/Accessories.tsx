import React from 'react';
import { Badge } from '@/components/ui/badge';

const Accessories = () => {
  return (
    <div className="w-full">
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6">
            IT Accessories
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Premium <span className="text-primary">Accessories</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Complete your IT setup with our range of professional accessories and peripherals.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-muted-foreground">Accessories catalog coming soon!</p>
        </div>
      </section>
    </div>
  );
};

export default Accessories;
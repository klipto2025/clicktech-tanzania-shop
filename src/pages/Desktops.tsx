import React from 'react';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';

const Desktops = () => {
  const desktopProducts = products.filter(product => product.category === 'desktop');

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
  };

  const handleViewDetails = (productId: string) => {
    console.log('View details:', productId);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6">
            Desktop Computers
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Powerful <span className="text-primary">Desktop PCs</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Custom-built desktop computers designed for business and gaming. 
            Premium components with professional assembly and comprehensive warranty.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {desktopProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {desktopProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">Desktop products coming soon!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Desktops;
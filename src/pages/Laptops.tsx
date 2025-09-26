import React, { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { Filter, SortAsc } from 'lucide-react';

const Laptops = () => {
  const [sortBy, setSortBy] = useState('name');
  const laptopProducts = products.filter(product => product.category === 'laptop');

  const handleAddToCart = (productId: string) => {
    console.log('Add to cart:', productId);
  };

  const handleViewDetails = (productId: string) => {
    console.log('View details:', productId);
  };

  const sortedProducts = [...laptopProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6">
            Professional Laptops
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Premium <span className="text-primary">Laptops</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated selection of professional-grade laptops from 
            trusted brands like HP, Dell, and Lenovo. Perfect for business, education, and personal use.
          </p>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filters and Sort */}
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 space-y-4 sm:space-y-0">
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filters
              </Button>
              <span className="text-muted-foreground">
                {laptopProducts.length} laptops available
              </span>
            </div>

            <div className="flex items-center space-x-2">
              <SortAsc className="h-4 w-4 text-muted-foreground" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-3 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sortedProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          {/* Empty State */}
          {laptopProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-muted-foreground">No laptops found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 lg:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Why Choose Our Laptops?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Every laptop comes with professional setup and comprehensive support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">✓</span>
              </div>
              <h3 className="text-xl font-semibold">Quality Assured</h3>
              <p className="text-muted-foreground">
                All laptops undergo thorough testing and come with manufacturer warranty.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">⚡</span>
              </div>
              <h3 className="text-xl font-semibold">Ready to Use</h3>
              <p className="text-muted-foreground">
                Pre-installed with Windows and essential software for immediate productivity.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <span className="text-white font-bold text-xl">🛠️</span>
              </div>
              <h3 className="text-xl font-semibold">Professional Support</h3>
              <p className="text-muted-foreground">
                Free setup assistance and ongoing technical support for all purchases.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Laptops;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import ProductCard from '@/components/ProductCard';
import { products } from '@/data/products';
import { NavLink } from 'react-router-dom';
import { ArrowRight, Shield, Truck, HeadphonesIcon, Star } from 'lucide-react';
import heroImage from '@/assets/hero-banner.jpg';

const Index = () => {
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);

  const handleAddToCart = (productId: string) => {
    // This will be implemented when Supabase is connected
    console.log('Add to cart:', productId);
  };

  const handleViewDetails = (productId: string) => {
    console.log('View details:', productId);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-subtle overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-16 lg:py-24">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                  🇹🇿 Tanzania's Trusted IT Partner
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Professional 
                  <span className="bg-gradient-primary bg-clip-text text-transparent"> IT Equipment</span>
                  <br />
                  for Your Business
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Quality laptops, desktop computers, and IT accessories with warranty guarantee. 
                  Serving Sinza and greater Dar es Salaam with professional tech solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild>
                  <NavLink to="/laptops">
                    Shop Laptops
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <NavLink to="/contact">
                    Get Quote
                  </NavLink>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">1 Year Warranty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Truck className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Free Delivery</span>
                </div>
                <div className="flex items-center space-x-2">
                  <HeadphonesIcon className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Fast Support</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <img
                src={heroImage}
                alt="Professional IT Equipment - Laptops and Computers"
                className="w-full h-auto rounded-2xl shadow-hover"
              />
              <div className="absolute inset-0 bg-gradient-primary/10 rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <Badge variant="outline" className="bg-accent/50">
              Featured Products
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold">
              Premium <span className="text-primary">IT Solutions</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our carefully selected range of professional-grade laptops, 
              desktop computers, and accessories from trusted brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart}
                onViewDetails={handleViewDetails}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="professional" size="lg" asChild>
              <NavLink to="/laptops">
                View All Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose <span className="text-primary">CLICKTECH SOLUTION?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Your trusted IT partner in Tanzania with professional service and quality guarantee.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-4 animate-fade-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Quality Guarantee</h3>
              <p className="text-muted-foreground">
                All products come with comprehensive warranty and quality assurance from trusted brands.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Professional Service</h3>
              <p className="text-muted-foreground">
                Expert advice and professional installation services for all your IT needs.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Fast Delivery</h3>
              <p className="text-muted-foreground">
                Free delivery within Dar es Salaam with quick and secure shipping options.
              </p>
            </div>

            <div className="text-center space-y-4 animate-fade-up">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Dedicated customer support to help you with any questions or technical issues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-dark text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Ready to Upgrade Your IT Setup?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Contact our experts for personalized recommendations and competitive pricing 
              on premium IT equipment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <NavLink to="/contact">
                  Get Free Consultation
                </NavLink>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                Call Now: +255 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
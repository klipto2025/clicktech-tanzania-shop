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
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-glow opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
            <div className="space-y-8 animate-fade-up">
              <div className="space-y-6">
                <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 glow-border animate-pulse-neon">
                  🇹🇿 Tanzania's Future Tech Partner
                </Badge>
                <h1 className="text-5xl lg:text-7xl font-black leading-tight">
                  Next-Gen 
                  <span className="text-cyber block"> Cyber Tech</span>
                  Solutions
                </h1>
                <p className="text-xl text-muted-foreground leading-relaxed">
                  Cutting-edge laptops, quantum-ready desktops, and futuristic IT accessories. 
                  Powering the digital revolution in Dar es Salaam with advanced tech solutions.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="cyber" size="lg" asChild>
                  <NavLink to="/laptops">
                    Enter Cyber Zone
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </NavLink>
                </Button>
                <Button variant="neon" size="lg" asChild>
                  <NavLink to="/contact">
                    Request Neural Link
                  </NavLink>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-6">
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/20 animate-pulse-neon">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold">Quantum Warranty</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/20 animate-pulse-neon" style={{animationDelay: '1s'}}>
                    <Truck className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold">Hyper Delivery</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="p-2 rounded-full bg-primary/20 animate-pulse-neon" style={{animationDelay: '2s'}}>
                    <HeadphonesIcon className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-sm font-bold">AI Support</span>
                </div>
              </div>
            </div>

            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-cyber/30 rounded-3xl blur-xl animate-glow"></div>
              <img
                src={heroImage}
                alt="Futuristic IT Equipment - Next-Gen Computing"
                className="relative w-full h-auto rounded-3xl shadow-neon border-2 border-primary/30 glow-border"
              />
              <div className="absolute inset-0 bg-gradient-cyber/20 rounded-3xl mix-blend-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-float"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-primary/10 rounded-full blur-2xl animate-float" style={{animationDelay: '3s'}}></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <Badge variant="outline" className="bg-accent/20 border-primary/30 glow-border animate-pulse-neon">
              Neural Network Selection
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-black">
              Elite <span className="text-cyber">Cyber Arsenal</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Handpicked quantum-enhanced devices and cybernetic accessories from the most advanced 
              tech manufacturers. Experience the future of computing today.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={product.id} className="animate-fade-up" style={{animationDelay: `${index * 0.2}s`}}>
                <ProductCard
                  product={product}
                  onAddToCart={handleAddToCart}
                  onViewDetails={handleViewDetails}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Button variant="cyber" size="lg" asChild>
              <NavLink to="/laptops">
                Access Full Arsenal
                <ArrowRight className="ml-2 h-5 w-5" />
              </NavLink>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 lg:py-32 relative">
        <div className="absolute inset-0 bg-gradient-dark/50"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/4 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 mb-16">
            <h2 className="text-4xl lg:text-6xl font-black">
              Why Join the <span className="text-cyber">Cyber Revolution?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your gateway to the future of technology in Tanzania. Experience next-level service 
              and quantum-grade quality assurance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center space-y-6 animate-fade-up group">
              <div className="relative mx-auto">
                <div className="w-20 h-20 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto animate-pulse-neon group-hover:animate-glow transition-all duration-500">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-cyber/30 rounded-2xl blur-xl animate-glow"></div>
              </div>
              <h3 className="text-2xl font-black">Quantum Guarantee</h3>
              <p className="text-muted-foreground">
                All products backed by advanced warranty protocols and quantum-level quality assurance 
                from elite manufacturers.
              </p>
            </div>

            <div className="text-center space-y-6 animate-fade-up group" style={{animationDelay: '0.2s'}}>
              <div className="relative mx-auto">
                <div className="w-20 h-20 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto animate-pulse-neon group-hover:animate-glow transition-all duration-500">
                  <Star className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-cyber/30 rounded-2xl blur-xl animate-glow"></div>
              </div>
              <h3 className="text-2xl font-black">Neural Service</h3>
              <p className="text-muted-foreground">
                AI-powered consultation and cybernetic installation services for all your 
                futuristic IT requirements.
              </p>
            </div>

            <div className="text-center space-y-6 animate-fade-up group" style={{animationDelay: '0.4s'}}>
              <div className="relative mx-auto">
                <div className="w-20 h-20 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto animate-pulse-neon group-hover:animate-glow transition-all duration-500">
                  <Truck className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-cyber/30 rounded-2xl blur-xl animate-glow"></div>
              </div>
              <h3 className="text-2xl font-black">Hyper Delivery</h3>
              <p className="text-muted-foreground">
                Lightning-fast quantum transport within Dar es Salaam with secure 
                teleportation delivery protocols.
              </p>
            </div>

            <div className="text-center space-y-6 animate-fade-up group" style={{animationDelay: '0.6s'}}>
              <div className="relative mx-auto">
                <div className="w-20 h-20 bg-gradient-cyber rounded-2xl flex items-center justify-center mx-auto animate-pulse-neon group-hover:animate-glow transition-all duration-500">
                  <HeadphonesIcon className="h-10 w-10 text-white" />
                </div>
                <div className="absolute inset-0 bg-gradient-cyber/30 rounded-2xl blur-xl animate-glow"></div>
              </div>
              <h3 className="text-2xl font-black">AI Support Matrix</h3>
              <p className="text-muted-foreground">
                24/7 neural network support system to assist with any technical anomalies 
                or cybernetic malfunctions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-cyber/10 animate-pulse-neon"></div>
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-glow opacity-30"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-5xl lg:text-7xl font-black text-white">
              Ready to <span className="text-cyber">Hack Reality?</span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-4xl mx-auto">
              Connect with our cyber specialists for quantum-level consultations and neural pricing 
              on next-generation IT arsenals.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center pt-4">
              <Button variant="cyber" size="lg" asChild>
                <NavLink to="/contact">
                  Initialize Connection
                </NavLink>
              </Button>
              <Button variant="glass" size="lg" className="text-white border-white/30 hover:border-white/60">
                Neural Link: +255 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingCart, Search, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Laptops', path: '/laptops' },
    { name: 'Desktops', path: '/desktops' },
    { name: 'Accessories', path: '/accessories' },
    { name: 'Services', path: '/services' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-card/50 backdrop-blur-md py-3 border-b border-primary/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center text-sm text-muted-foreground">
            <div className="flex items-center space-x-8">
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-full bg-primary/20 animate-pulse-neon">
                  <Phone className="h-3 w-3 text-primary" />
                </div>
                <span className="font-medium">+255 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="p-1 rounded-full bg-primary/20 animate-pulse-neon" style={{animationDelay: '1s'}}>
                  <Mail className="h-3 w-3 text-primary" />
                </div>
                <span className="font-medium">info@clicktechsinza.co.tz</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-bold">⚡ Quantum Delivery | 🚀 Neural Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-card/80 backdrop-blur-xl border-b border-primary/30 sticky top-0 z-50 shadow-neon">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center">
              <NavLink to="/" className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-cyber rounded-xl flex items-center justify-center animate-pulse-neon">
                    <span className="text-white font-black text-xl">CT</span>
                  </div>
                  <div className="absolute inset-0 bg-gradient-cyber/30 rounded-xl blur-lg animate-glow"></div>
                </div>
                <div>
                  <h1 className="text-xl font-black text-foreground">CLICKTECH SOLUTION</h1>
                  <p className="text-xs text-primary font-bold tracking-wider">CYBER SINZA</p>
                </div>
              </NavLink>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `px-5 py-3 rounded-xl text-sm font-bold transition-smooth ${
                      isActive
                        ? 'bg-gradient-cyber text-white shadow-neon glow-border'
                        : 'text-foreground hover:bg-primary/10 hover:text-primary border border-transparent hover:border-primary/30'
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
            </div>

            {/* Search and Cart */}
            <div className="flex items-center space-x-4">
              <Button variant="glass" size="icon" className="hidden md:flex">
                <Search className="h-5 w-5" />
              </Button>
              <Button variant="neon" size="sm" className="relative">
                <ShoppingCart className="h-4 w-4" />
                <span className="ml-2 hidden sm:inline font-bold">Cyber Cart</span>
                <span className="absolute -top-2 -right-2 bg-gradient-cyber text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold animate-pulse-neon">
                  0
                </span>
              </Button>

              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-background border-t border-border">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium transition-smooth ${
                      isActive
                        ? 'bg-primary text-primary-foreground'
                        : 'text-foreground hover:bg-accent hover:text-accent-foreground'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </NavLink>
              ))}
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { NavLink } from 'react-router-dom';
import { Shield, Award, Users, Wrench } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6">
            About CLICKTECH SOLUTION
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Your Trusted <span className="text-primary">IT Partner</span>
            <br />in Tanzania
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Since our establishment, CLICKTECH SOLUTION SINZA has been dedicated to providing 
            high-quality IT equipment and professional services to businesses and individuals 
            across Tanzania.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed">
                Located in the heart of Sinza, Dar es Salaam, CLICKTECH SOLUTION has grown 
                to become one of Tanzania's most trusted IT equipment suppliers. We specialize 
                in providing quality laptops, desktop computers, and comprehensive IT accessories 
                to meet the diverse needs of our clients.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our commitment to excellence, combined with our deep understanding of the local 
                market, has enabled us to build lasting relationships with customers ranging from 
                individual professionals to large corporations.
              </p>
              <Button variant="professional" size="lg" asChild>
                <NavLink to="/contact">Get In Touch</NavLink>
              </Button>
            </div>
            <div className="bg-gradient-primary/10 rounded-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Award className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Quality Assurance</h3>
                    <p className="text-muted-foreground text-sm">Premium products with warranty</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Customer Focus</h3>
                    <p className="text-muted-foreground text-sm">Personalized service approach</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold">Expert Support</h3>
                    <p className="text-muted-foreground text-sm">Technical expertise you can trust</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 lg:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do at CLICKTECH SOLUTION.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Integrity</h3>
              <p className="text-muted-foreground">
                We believe in honest business practices and transparent dealings with all our customers.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in every product we sell and every service we provide.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Customer Success</h3>
              <p className="text-muted-foreground">
                Your success is our success. We're committed to helping you achieve your IT goals.
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
              Ready to Experience the CLICKTECH Difference?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of satisfied customers who trust us for their IT equipment needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <NavLink to="/laptops">Shop Products</NavLink>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                <NavLink to="/contact">Contact Us</NavLink>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
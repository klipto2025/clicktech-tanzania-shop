import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { Wrench, Shield, Truck, HeadphonesIcon, Settings, Users } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Settings className="h-8 w-8" />,
      title: "IT Setup & Installation",
      description: "Professional setup and configuration of laptops, desktops, and networks.",
      features: ["Hardware installation", "Software configuration", "Network setup", "Data migration"]
    },
    {
      icon: <Wrench className="h-8 w-8" />,
      title: "Technical Support",
      description: "Comprehensive technical support for all your IT equipment and software.",
      features: ["Hardware repairs", "Software troubleshooting", "Performance optimization", "Virus removal"]
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Warranty & Maintenance",
      description: "Extended warranty options and preventive maintenance services.",
      features: ["Extended warranty", "Regular maintenance", "Hardware upgrades", "Backup solutions"]
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Business Solutions",
      description: "Tailored IT solutions for businesses of all sizes.",
      features: ["Bulk ordering", "Custom configurations", "Volume discounts", "Corporate support"]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20 mb-6">
            Professional Services
          </Badge>
          <h1 className="text-4xl lg:text-6xl font-bold mb-6">
            Complete <span className="text-primary">IT Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Beyond selling quality equipment, we provide comprehensive IT services to ensure 
            your technology works perfectly and continues to serve your needs.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-hover transition-smooth">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white">
                      {service.icon}
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 lg:py-24 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold">
              Why Choose Our <span className="text-primary">Services?</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Professional expertise you can trust for all your IT needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Certified Technicians</h3>
              <p className="text-muted-foreground">
                Our team consists of certified IT professionals with years of experience.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">On-Site Support</h3>
              <p className="text-muted-foreground">
                We provide on-site service throughout Dar es Salaam for your convenience.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <HeadphonesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">24/7 Support</h3>
              <p className="text-muted-foreground">
                Round-the-clock support for critical business systems and emergencies.
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
              Need Professional IT Services?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get expert help with your IT setup, maintenance, and support needs. 
              Contact us for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" asChild>
                <NavLink to="/contact">Request Service</NavLink>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-gray-900">
                Call: +255 123 456 789
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ship, Truck, Package } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Ship,
      title: "International Exports",
      description: "We supply a broad range of products to overseas markets, adhering to global regulations, industry benchmarks, and customer-specific requirements. Our export operations are supported by stable supply chains, rigorous quality control, and timely execution.",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-100 to-green-50",
      borderColor: "border-green-200",
      image: "./images/international.jpg",
    },
    {
      icon: Truck,
      title: "National Distribution",
      description: "Across India, we provide structured distribution solutions supported by an efficient logistics framework. Our domestic network ensures consistent supply, dependable service, and streamlined delivery throughout the country.",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      image: "./images/national.png",
    },
    {
      icon: Package,
      title: "Global Imports",
      description: "We procure goods from established international manufacturers, ensuring authenticity, operational efficiency, and full compliance with import standards. Our team handles procurement, documentation, and logistics, providing clients with a smooth and secure import experience.",
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-50",
      borderColor: "border-orange-200",
      image: "./images/global.jpg",
    },
  ];

  return (
    <section id="services" className="bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden py-12">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-4">
        <div className="text-center mb-10 animate-fade-in">
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
            Our Core Services
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive trading solutions designed for your business success
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`border-2 ${service.borderColor} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up bg-white/80 backdrop-blur-sm group overflow-hidden relative h-full flex flex-col`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <CardHeader className="relative z-10 pb-0">
                {service.image ? (
                  <div className="h-48 overflow-hidden rounded-2xl mb-6 group-hover:scale-105 transition-transform duration-300">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <div className={`w-20 h-20 ${service.bgColor} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                    <service.icon className={`h-10 w-10 ${service.color} group-hover:scale-110 transition-transform duration-300`} />
                  </div>
                )}
                <CardTitle className="text-2xl font-bold text-foreground mb-3 transition-all duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="relative z-10 flex-grow flex flex-col">
                <p className="text-muted-foreground leading-relaxed mb-6 text-base flex-grow">
                  {service.description}
                </p>
                {/* No interactive elements - just static cards */}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
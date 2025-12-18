// src/components/Testimonials.jsx
import { Card, CardContent } from "./ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Quote, Star, Globe, Package, Clock, Shield, TrendingUp, User, UserCircle } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Testimonials = () => {
  const [api, setApi] = useState(null);
  const autoplayIntervalRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Human icons for testimonials
  const humanIcons = [
    <UserCircle className="h-5 w-5 text-primary" />,
    <User className="h-5 w-5 text-primary" />,
  ];

  const testimonials = [
    // 01
    {
      name: "Rajesh Kumar",
      company: "Tech Imports Ltd.",
      role: "CEO",
      content: "Anand Imports & Exports has been our trusted partner for over 5 years. Their reliability and attention to detail in international trade is unmatched.",
      rating: 5,
      icon: humanIcons[0],
      country: "India",
      years: 5,
      industry: "Electronics"
    },
    // 02
    {
      name: "Sarah Johnson",
      company: "Global Distribution Corp",
      role: "Operations Director",
      content: "Working with Anand transformed our import operations. Their team is professional, responsive, and always delivers on time.",
      rating: 5,
      icon: humanIcons[1],
      country: "USA",
      years: 3,
      industry: "FMCG"
    },
    // 03
    {
      name: "Michael Chen",
      company: "Pacific Trading Group",
      role: "Founder",
      content: "The transparency and efficiency of Anand Imports & Exports is exceptional. They handle all documentation and logistics with expertise.",
      rating: 5,
      icon: humanIcons[0],
      country: "Singapore",
      years: 4,
      industry: "Textiles"
    },
    // 04
    {
      name: "Priya Sharma",
      company: "Eastern Exports Co.",
      role: "Export Manager",
      content: "Anand understands the complexities of international trade. Their network spans continents, helping us reach new customers worldwide.",
      rating: 5,
      icon: humanIcons[1],
      country: "India",
      years: 6,
      industry: "Consumer Goods"
    },
    // 05
    {
      name: "David Williams",
      company: "International Ventures",
      role: "CEO",
      content: "Anand Imports & Exports stands out with their commitment to quality, transparent pricing, and excellent customer service.",
      rating: 5,
      icon: humanIcons[0],
      country: "UK",
      years: 2,
      industry: "Industrial Materials"
    },
    // 06
    {
      name: "Aisha Al-Mansoori",
      company: "Middle East Trading House",
      role: "Procurement Head",
      content: "Anand's sourcing capabilities in health & wellness are remarkable. They secured premium suppliers at competitive rates.",
      rating: 5,
      icon: humanIcons[1],
      country: "UAE",
      years: 3,
      industry: "Health & Wellness"
    },
    // 07
    {
      name: "Kenji Tanaka",
      company: "Tokyo Electronics Inc.",
      role: "Supply Chain Director",
      content: "Their attention to detail in electronics import documentation saved us significant time and costs. Delivers with precision.",
      rating: 5,
      icon: humanIcons[0],
      country: "Japan",
      years: 4,
      industry: "Electronics"
    },
    // 08
    {
      name: "Maria Rodriguez",
      company: "European Lifestyle Brands",
      role: "CEO",
      content: "Expanding our home goods to India was seamless with Anand's national distribution network. Efficient and safe delivery.",
      rating: 5,
      icon: humanIcons[1],
      country: "Spain",
      years: 2,
      industry: "Lifestyle Goods"
    },
    // 09
    {
      name: "Arjun Patel",
      company: "AgriPro Exports",
      role: "Managing Director",
      content: "Anand's export services exceeded expectations. They navigated complex regulations ensuring perfect condition delivery.",
      rating: 5,
      icon: humanIcons[0],
      country: "India",
      years: 5,
      industry: "Food Products"
    },
    // 10
    {
      name: "Sophie Martin",
      company: "Paris Fashion Imports",
      role: "Owner",
      content: "Sourcing premium textiles was challenging until we partnered with Anand. Their quality verification is invaluable.",
      rating: 5,
      icon: humanIcons[1],
      country: "France",
      years: 3,
      industry: "Textiles"
    }
  ];

  // Update active index when carousel scrolls
  useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay functionality
  useEffect(() => {
    if (!api) {
      return;
    }

    const startAutoplay = () => {
      if (isHovered) {
        return;
      }

      autoplayIntervalRef.current = setInterval(() => {
        if (api && !isHovered) {
          api.scrollNext();
        }
      }, 3000);
    };

    const stopAutoplay = () => {
      if (autoplayIntervalRef.current) {
        clearInterval(autoplayIntervalRef.current);
        autoplayIntervalRef.current = null;
      }
    };

    if (!isHovered) {
      startAutoplay();
    } else {
      stopAutoplay();
    }

    return () => {
      stopAutoplay();
    };
  }, [api, isHovered]);

  // Get current testimonial stats for the summary
  const getTestimonialStats = () => {
    const totalYears = testimonials.reduce((sum, t) => sum + (t.years || 0), 0);
    const countries = [...new Set(testimonials.map(t => t.country))];
    const industries = [...new Set(testimonials.map(t => t.industry))];
    
    return {
      totalTestimonials: testimonials.length,
      averageRating: 5,
      countriesCount: countries.length,
      industriesCount: industries.length,
      totalYears: totalYears
    };
  };

  const stats = getTestimonialStats();

  return (
    <section 
      className="py-10 mt-4 pb-12 md:pb-16 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden"
      id="testimonials">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-gold/10 rounded-full mb-3">
            <Star className="h-3 w-3 text-brand-gold" />
            <span className="text-xs font-semibold text-brand-gold">Client Success Stories</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2 tracking-tight">
            Trusted by Global Businesses
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-3"></div>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join {stats.totalTestimonials}+ satisfied clients across {stats.countriesCount}+ countries
          </p>
        </div>

        {/* Stats Summary - Smaller */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-border/50 text-center shadow-sm">
            <div className="text-xl font-bold text-primary">{stats.totalTestimonials}+</div>
            <div className="text-xs text-muted-foreground">Satisfied Clients</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-border/50 text-center shadow-sm">
            <div className="text-xl font-bold text-primary">{stats.averageRating}.0</div>
            <div className="text-xs text-muted-foreground">Avg Rating</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-border/50 text-center shadow-sm">
            <div className="text-xl font-bold text-primary">{stats.countriesCount}+</div>
            <div className="text-xs text-muted-foreground">Countries</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-border/50 text-center shadow-sm">
            <div className="text-xl font-bold text-primary">{stats.totalYears}+</div>
            <div className="text-xs text-muted-foreground">Years of Trust</div>
          </div>
        </div>

        <div className="max-w-6xl mx-auto mb-10">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full">
            <CarouselContent className="-ml-1 md:-ml-2">
              {testimonials.map((testimonial, index) => (
                <CarouselItem 
                  key={index} 
                  className="pl-1 md:pl-2 basis-full md:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                  <Card 
                    className={`
                      border border-border/50 shadow-lg hover:shadow-xl 
                      transition-all duration-300 h-full bg-gradient-to-br 
                      from-white to-white/95 backdrop-blur-sm
                      transform hover:-translate-y-0.5
                      ${activeIndex === index ? 'ring-1 ring-primary/20' : ''}
                    `}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <CardContent className="p-5 md:p-6 flex flex-col h-full">
                      {/* Quote Icon & Industry Badge */}
                      <div className="flex justify-between items-start mb-3">
                        <Quote className="h-7 w-7 text-primary/20" />
                        <div className="px-2 py-0.5 bg-primary/5 rounded-full">
                          <span className="text-xs font-medium text-primary">{testimonial.industry}</span>
                        </div>
                      </div>
                      
                      {/* Rating */}
                      <div className="flex gap-0.5 mb-3">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-brand-gold text-brand-gold" />
                        ))}
                      </div>

                      {/* Content - Smaller text */}
                      <p className="text-foreground/80 leading-relaxed mb-4 flex-grow text-sm">
                        "{testimonial.content}"
                      </p>

                      {/* Author - Compact layout */}
                      <div className="flex items-center gap-3 pt-3 border-t border-border/50">
                        <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gradient-to-br from-primary/5 to-brand-gold/5 flex-shrink-0">
                          {testimonial.icon}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between mb-1">
                            <h4 className="font-bold text-foreground text-sm truncate">{testimonial.name}</h4>
                            <span className="text-xs font-medium px-1.5 py-0.5 bg-secondary/30 rounded text-nowrap">
                              {testimonial.country}
                            </span>
                          </div>
                          <p className="text-xs text-primary font-medium truncate">
                            {testimonial.company}
                          </p>
                          <div className="flex items-center justify-between mt-1">
                            <p className="text-xs text-muted-foreground">
                              {testimonial.role}
                            </p>
                            {testimonial.years && (
                              <div className="flex items-center gap-1">
                                <Clock className="h-2.5 w-2.5 text-muted-foreground" />
                                <span className="text-xs text-muted-foreground">
                                  {testimonial.years}y
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-10 hover:bg-primary hover:text-white transition-colors h-8 w-8" />
            <CarouselNext className="hidden md:flex -right-10 hover:bg-primary hover:text-white transition-colors h-8 w-8" />
          </Carousel>
        </div>

        {/* Navigation Dots - Smaller */}
        <div className="flex justify-center gap-1.5 mt-6">
          {testimonials.slice(0, Math.ceil(testimonials.length / 4)).map((_, index) => (
            <button
              key={index}
              onClick={() => api?.scrollTo(index * 4)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                Math.floor(activeIndex / 4) === index 
                  ? 'w-6 bg-primary' 
                  : 'w-1.5 bg-border hover:bg-primary/50'
              }`}
              aria-label={`Go to testimonial group ${index + 1}`}
            />
          ))}
        </div>

        {/* Trust Badges - Smaller */}
        <div className="mt-8 pt-6 border-t border-border/50">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-3">
              Trusted by businesses across {stats.industriesCount}+ industries
            </p>
            <div className="flex flex-wrap justify-center gap-3 md:gap-6">
              <div className="flex items-center gap-1.5">
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-xs font-medium">Verified Clients</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Globe className="h-4 w-4 text-blue-600" />
                <span className="text-xs font-medium">Global Network</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="h-4 w-4 text-orange-600" />
                <span className="text-xs font-medium">On-time Delivery</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="h-4 w-4 text-purple-600" />
                <span className="text-xs font-medium">Diverse Clients</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
import { useRef } from "react";
import { Package, ChefHat, Monitor, Shirt, Factory, Hospital, Sofa, Globe, ArrowRight, Users } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: Package,
      label: "Consumer Goods",
      description: "Personal care, home essentials, and retail products with consistent global quality standards. We ensure product compliance and market-ready packaging.",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50"
    },
    {
      icon: ChefHat,
      label: "Food Products & FMCG",
      description: "Packaged foods, beverages, and grocery staples with international safety certifications. Complete supply chain from farm to retail shelf.",
      gradient: "from-emerald-500 to-green-500",
      bgColor: "bg-emerald-50"
    },
    {
      icon: Monitor,
      label: "Electronics & Hardware",
      description: "Consumer electronics, components, and IT hardware for global tech supply chains. Sourcing, quality testing, and logistics support.",
      gradient: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50"
    },
    {
      icon: Shirt,
      label: "Textiles & Garments",
      description: "Raw textiles, fabrics, and finished apparel connecting producers with global fashion brands. End-to-end production and export services.",
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: Factory,
      label: "Industrial Materials",
      description: "Raw materials, chemicals, and components for manufacturing and construction sectors. Bulk procurement and JIT delivery solutions.",
      gradient: "from-gray-600 to-gray-700",
      bgColor: "bg-gray-100"
    },
    {
      icon: Hospital,
      label: "Health & Wellness",
      description: "Pharmaceuticals, medical equipment, and wellness products for healthcare providers. Regulatory compliance and cold chain logistics.",
      gradient: "from-red-500 to-orange-500",
      bgColor: "bg-red-50"
    },
    {
      icon: Sofa,
      label: "Lifestyle & Household",
      description: "Furniture, home decor, and kitchenware enhancing modern living spaces worldwide. Design, manufacturing, and global distribution.",
      gradient: "from-amber-500 to-yellow-500",
      bgColor: "bg-amber-50"
    },
    {
      icon: Globe,
      label: "General Trading",
      description: "Multi-commodity solutions and market access for diversified sourcing and expansion. Cross-border trade facilitation and market entry support.",
      gradient: "from-indigo-500 to-blue-600",
      bgColor: "bg-indigo-50"
    },
  ];

  return (
    <section id="industries" className="pt-12 pb-16 bg-white relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Compact Header */}
        <div className="text-center mb-10 lg:mb-12">
          <div className="inline-block px-3 py-1.5 rounded-full bg-primary/10 mb-3">
            <span className="text-xs font-medium text-primary">INDUSTRIES</span>
          </div>
         
          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2 tracking-tight">
            Industries We Serve
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive trading solutions across multiple sectors, connecting quality with opportunity.
          </p>
        </div>

        {/* Grid with larger font for description */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {industries.map((industry, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl border border-gray-200 p-6 hover:border-brand-orange/30 hover:shadow-lg transition-all duration-300 flex flex-col min-h-[300px]"
            >
              {/* Icon with Gradient */}
              <div className={`w-14 h-14 rounded-xl ${industry.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${industry.gradient} flex items-center justify-center`}>
                  <industry.icon className="h-5 w-5 text-white" strokeWidth={2} />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {industry.label}
                </h3>
                {/* Larger font size for description - changed from text-sm to text-base */}
                <p className="text-base text-gray-600 mb-4 leading-relaxed">
                  {industry.description}
                </p>
              </div>
              
            
             
            </div>
          ))}
        </div>

        {/* Additional description section - REMOVED motion components */}
        <section className="pt-5 md:pt-12 pb-4 md:pb-6 bg-white">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <div>
                <h2 className="text-2xl md:text-4xl font-bold text-blue-800 mb-4 md:mb-6">
                  Industries Provides
                </h2>
                <div className="w-20 h-1 md:w-24 md:h-1 bg-gradient-to-r from-blue-500 to-orange-500 mx-auto mb-6 md:mb-8 rounded-full"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 md:mb-8 px-2 sm:px-4">
                  With a diversified global trading portfolio, Anand Imports & Exports supports multiple industries through reliable sourcing, compliant trade practices, and efficient logistics solutions. Our industry-focused approach enables us to understand sector-specific requirements, maintain consistent quality standards, and deliver value-driven supply solutions across domestic and international markets. By combining strong partnerships, operational excellence, and market insight, we help businesses grow sustainably while meeting evolving global trade demands.
                </p>
                <div className="inline-block">
                  {/* Add any content here if needed */}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Compact CTA Section */}
        <div className="mt-12 bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-6 lg:p-8 text-center text-white">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl lg:text-2xl font-bold mb-3">
              Need Industry-Specific Solutions?
            </h3>
            <p className="text-gray-300 mb-6 text-base">
              Our industry specialists provide customized trading strategies, market insights, and complete supply chain solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button className="px-6 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2 text-sm">
                <Users className="h-4 w-4" />
                <span>Schedule Consultation</span>
              </button>
              <button className="px-6 py-2.5 bg-transparent border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors duration-300 text-sm">
                Download Industry Reports
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
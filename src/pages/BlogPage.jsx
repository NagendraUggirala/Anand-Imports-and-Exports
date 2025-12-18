// src/pages/BlogPage.jsx
import { useState } from "react";
import { Card, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { X, Package, ChefHat, Monitor, Shirt, Factory, Hospital, Sofa, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const industries = [
    { icon: Package, label: "Consumer Goods", description: "Everyday products for domestic and global markets" },
    { icon: ChefHat, label: "Food Products & FMCG", description: "Processed foods, packaged goods, and essentials" },
    { icon: Monitor, label: "Electronics & Hardware", description: "Reliable components and electronic equipment" },
    { icon: Shirt, label: "Textiles & Garments", description: "Fabrics, apparel, and fashion essentials" },
    { icon: Factory, label: "Industrial Materials", description: "Raw materials and industrial-grade supplies" },
    { icon: Hospital, label: "Health & Wellness Products", description: "Healthcare, personal care, and wellness items" },
    { icon: Sofa, label: "Lifestyle & Household Goods", description: "Home, lifestyle, and daily-use products" },
    { icon: Globe, label: "General Trading", description: "Cross-border trade facilitation and market access" },
  ];

  const blogPosts = [
    // your blog posts
  ];

  return (
    <div className="min-h-screen">
      <section className="py-12 bg-gradient-to-b from-secondary/30 via-background to-secondary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          {/* Heading */}
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold mb-2">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 mx-auto bg-gradient-to-r from-transparent via-brand-gold to-transparent mb-4" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the diverse industries we cater to with efficient global trade solutions.
            </p>
          </div>

          {/* Industry Cards */}
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* ICON */}
                <div className="w-14 h-14 rounded-xl bg-white shadow-md flex items-center justify-center mb-4">
                  <industry.icon
                    className="h-6 w-6 text-yellow-400"
                    strokeWidth={2}
                  />
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">
                  {industry.label}
                </h3>
                <p className="text-base text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </div>
  );
};

export default BlogPage;

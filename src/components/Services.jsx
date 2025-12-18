import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Ship, Truck, Package, Warehouse, Globe, BarChart3, Users, Target, Cpu, ArrowRight, X, Shield, Clock, Zap } from "lucide-react";

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const services = [
    {
      icon: Truck,
      title: "Domestic & National Distribution",
      description: "We supply goods across India with fast delivery, consistent quality, and strong supply chain networks.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-blue-50 to-cyan-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Domestic & National Distribution</h3>
            <p class="text-gray-700 leading-relaxed">
              Our Domestic & National Distribution service ensures seamless movement of goods across India through a strong logistics network and reliable transport partners.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-blue-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-blue-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Pan-India Coverage</h5>
                    <p class="text-sm text-gray-600">Nationwide network covering all major cities and rural areas</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-blue-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Real-time Tracking</h5>
                    <p class="text-sm text-gray-600">Live tracking of shipments with instant updates</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-blue-100">
                  <div class="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-blue-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Safe Handling</h5>
                    <p class="text-sm text-gray-600">Professional handling with proper packaging and care</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-blue-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Optimized route planning for faster delivery</li>
                <li>End-to-end supply chain support</li>
                <li>Transparent communication at every stage</li>
                <li>Dedicated customer support team</li>
                <li>Cost-effective solutions for all business sizes</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-blue-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-blue-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-blue-700">24-48</div>
                <div class="text-sm text-blue-600">Hours Delivery</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-700">99.5%</div>
                <div class="text-sm text-blue-600">On-time Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-700">500+</div>
                <div class="text-sm text-blue-600">Cities Covered</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-blue-700">24/7</div>
                <div class="text-sm text-blue-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-100 to-blue-50",
      borderColor: "border-blue-200",
      hoverGradient: "hover:from-blue-200 hover:to-blue-100",
      image: "./images/national.png",
    },
    {
      icon: Ship,
      title: "International Export Services",
      description: "We export premium-quality goods to global markets, ensuring every shipment meets international standards.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">International Export Services</h3>
            <p class="text-gray-700 leading-relaxed">
              Our International Export Services enable businesses to reach global markets with confidence and efficiency.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-green-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-100">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-green-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Global Compliance</h5>
                    <p class="text-sm text-gray-600">Adherence to international quality and packaging standards</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-100">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-green-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Documentation Support</h5>
                    <p class="text-sm text-gray-600">Complete documentation and paperwork assistance</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-green-100">
                  <div class="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-green-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Customs Clearance</h5>
                    <p class="text-sm text-gray-600">Expert handling of customs procedures worldwide</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-green-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Strong network of global logistics partners</li>
                <li>Safe handling and timely dispatch</li>
                <li>Real-time tracking and communication</li>
                <li>Secure and reliable export solutions</li>
                <li>Professional management throughout</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-green-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-green-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-green-700">50+</div>
                <div class="text-sm text-green-600">Countries</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-700">98%</div>
                <div class="text-sm text-green-600">Compliance Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-700">24/7</div>
                <div class="text-sm text-green-600">Documentation</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-green-700">1000+</div>
                <div class="text-sm text-green-600">Shipments/Month</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-100 to-green-50",
      borderColor: "border-green-200",
      hoverGradient: "hover:from-green-200 hover:to-green-100",
      image: "./images/international.jpg",
    },
    {
      icon: Package,
      title: "Global Import Solutions",
      description: "We import goods from trusted international suppliers with hassle-free service from sourcing to customs clearance.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-orange-50 to-amber-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Global Import Solutions</h3>
            <p class="text-gray-700 leading-relaxed">
              Our Global Import Solutions simplify the process of sourcing and importing goods from trusted international suppliers.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-orange-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-100">
                  <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-orange-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Vendor Coordination</h5>
                    <p class="text-sm text-gray-600">Direct coordination with international suppliers</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-100">
                  <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-orange-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Quality Checks</h5>
                    <p class="text-sm text-gray-600">Rigorous quality inspection and testing</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-orange-100">
                  <div class="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-orange-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Customs Clearance</h5>
                    <p class="text-sm text-gray-600">Efficient customs clearance and duty management</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-orange-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>End-to-end import operations management</li>
                <li>Compliance with global trade regulations</li>
                <li>Precision in documentation and procedures</li>
                <li>Timely delivery to your location</li>
                <li>Hassle-free and cost-effective solutions</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-orange-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-orange-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-orange-700">30+</div>
                <div class="text-sm text-orange-600">Source Countries</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-orange-700">99%</div>
                <div class="text-sm text-orange-600">Quality Pass Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-orange-700">48hr</div>
                <div class="text-sm text-orange-600">Customs Clearance</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-orange-700">500+</div>
                <div class="text-sm text-orange-600">Monthly Imports</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-orange-600",
      bgColor: "bg-gradient-to-br from-orange-100 to-orange-50",
      borderColor: "border-orange-200",
      hoverGradient: "hover:from-orange-200 hover:to-orange-100",
      image: "./images/global.jpg",
    },
    {
      icon: Warehouse,
      title: "Warehousing & Storage",
      description: "State-of-the-art warehousing solutions with climate control, inventory management, and secure storage facilities.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-purple-50 to-violet-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Warehousing & Storage</h3>
            <p class="text-gray-700 leading-relaxed">
              Our modern warehousing facilities provide secure, organized, and efficient storage solutions for all types of goods.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-purple-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-purple-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Climate Control</h5>
                    <p class="text-sm text-gray-600">Temperature-controlled units for sensitive goods</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-purple-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">24/7 Security</h5>
                    <p class="text-sm text-gray-600">Round-the-clock surveillance and access control</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-purple-100">
                  <div class="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-purple-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Automated Inventory</h5>
                    <p class="text-sm text-gray-600">Real-time stock management and tracking</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-purple-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Flexible storage options for all business needs</li>
                <li>Scalable space allocation as your business grows</li>
                <li>Integrated logistics support for seamless operations</li>
                <li>Customizable storage solutions available</li>
                <li>Professional handling and management</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-purple-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-purple-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-purple-700">100+</div>
                <div class="text-sm text-purple-600">Warehouses</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-purple-700">99.9%</div>
                <div class="text-sm text-purple-600">Security Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-purple-700">24/7</div>
                <div class="text-sm text-purple-600">Access Available</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-purple-700">1000+</div>
                <div class="text-sm text-purple-600">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-100 to-purple-50",
      borderColor: "border-purple-200",
      hoverGradient: "hover:from-purple-200 hover:to-purple-100",
      image: "https://img.freepik.com/premium-vector/warehouse-industry-with-storage-buildings_441769-251.jpg",
    },
    {
      icon: Globe,
      title: "Global Sourcing",
      description: "Access to international markets with strategic sourcing, quality assurance, and supplier relationship management.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Global Sourcing</h3>
            <p class="text-gray-700 leading-relaxed">
              Connect with premium suppliers worldwide through our extensive global sourcing network and expertise.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-cyan-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-cyan-100">
                  <div class="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-cyan-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Supplier Vetting</h5>
                    <p class="text-sm text-gray-600">Thorough verification across 50+ countries</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-cyan-100">
                  <div class="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-cyan-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Quality Control</h5>
                    <p class="text-sm text-gray-600">Factory audits and product testing before shipment</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-cyan-100">
                  <div class="w-8 h-8 bg-cyan-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-cyan-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Negotiation Support</h5>
                    <p class="text-sm text-gray-600">Competitive pricing and favorable terms</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-cyan-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Strategic supplier identification and matching</li>
                <li>Market intelligence and trend analysis</li>
                <li>Multi-lingual communication support</li>
                <li>Risk management through diversification</li>
                <li>End-to-end sourcing assistance</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-cyan-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-cyan-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-cyan-700">50+</div>
                <div class="text-sm text-cyan-600">Countries</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-cyan-700">1000+</div>
                <div class="text-sm text-cyan-600">Verified Suppliers</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-cyan-700">98%</div>
                <div class="text-sm text-cyan-600">Quality Pass Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-cyan-700">24/7</div>
                <div class="text-sm text-cyan-600">Support</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-cyan-600",
      bgColor: "bg-gradient-to-br from-cyan-100 to-cyan-50",
      borderColor: "border-cyan-200",
      hoverGradient: "hover:from-cyan-200 hover:to-cyan-100",
      image: "https://www.eagleyeventures.com/wp-content/uploads/2019/11/global-sourcing-2.jpg",
    },
    {
      icon: Users,
      title: "Strategic Partnerships",
      description: "Build powerful business alliances with industry leaders, suppliers, and distribution networks worldwide.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-amber-50 to-yellow-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Strategic Partnerships</h3>
            <p class="text-gray-700 leading-relaxed">
              We facilitate strategic partnerships that drive growth, innovation, and market expansion for businesses across industries.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-amber-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                  <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Supplier Partnerships</h5>
                    <p class="text-sm text-gray-600">Connect with reliable suppliers globally</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                  <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Distribution Alliances</h5>
                    <p class="text-sm text-gray-600">Expand market reach through established networks</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-amber-100">
                  <div class="w-8 h-8 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-amber-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Technology Collaborations</h5>
                    <p class="text-sm text-gray-600">Partner with tech providers for automation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-amber-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Needs assessment and partner matching</li>
                <li>Negotiation and agreement facilitation</li>
                <li>Implementation support and guidance</li>
                <li>Ongoing relationship management</li>
                <li>Performance monitoring and optimization</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-amber-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-amber-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-amber-700">200+</div>
                <div class="text-sm text-amber-600">Active Partners</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-amber-700">95%</div>
                <div class="text-sm text-amber-600">Success Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-amber-700">40%</div>
                <div class="text-sm text-amber-600">Cost Savings</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-amber-700">30+</div>
                <div class="text-sm text-amber-600">Countries</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-amber-600",
      bgColor: "bg-gradient-to-br from-amber-100 to-amber-50",
      borderColor: "border-amber-200",
      hoverGradient: "hover:from-amber-200 hover:to-amber-100",
      image: "https://t3.ftcdn.net/jpg/16/98/17/70/360_F_1698177027_1uOUekkQ4lxle77VY6kKv113aIthcZS2.jpg",
    },
   
    {
      icon: Shield,
      title: "Quality Assurance & Compliance",
      description: "Comprehensive quality control and regulatory compliance services ensuring international standards are met.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-red-50 to-pink-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Quality Assurance & Compliance</h3>
            <p class="text-gray-700 leading-relaxed">
              Our Quality Assurance & Compliance services guarantee that all products meet international quality standards and regulatory requirements.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-red-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-red-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Quality Inspections</h5>
                    <p class="text-sm text-gray-600">Thorough product inspections at every stage</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-red-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Regulatory Compliance</h5>
                    <p class="text-sm text-gray-600">Adherence to international trade regulations</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-red-100">
                  <div class="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-red-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Certification Support</h5>
                    <p class="text-sm text-gray-600">Assistance with ISO and other certifications</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-red-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Enhanced product reliability and safety</li>
                <li>Reduced risk of returns and rejections</li>
                <li>Improved customer satisfaction</li>
                <li>Competitive advantage in global markets</li>
                <li>Streamlined compliance processes</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-red-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-red-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-red-700">99.8%</div>
                <div class="text-sm text-red-600">Quality Pass Rate</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-red-700">50+</div>
                <div class="text-sm text-red-600">Standards Covered</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-red-700">100%</div>
                <div class="text-sm text-red-600">Compliance</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-red-700">24/7</div>
                <div class="text-sm text-red-600">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-red-600",
      bgColor: "bg-gradient-to-br from-red-100 to-red-50",
      borderColor: "border-red-200",
      hoverGradient: "hover:from-red-200 hover:to-red-100",
      image: "https://www.shutterstock.com/image-photo/quality-assurance-certification-compliance-concept-260nw-2676612179.jpg",
    },
    {
      icon: Clock,
      title: "Just-in-Time Delivery",
      description: "Precision logistics ensuring timely delivery with optimized inventory management and supply chain efficiency.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-teal-50 to-emerald-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Just-in-Time Delivery</h3>
            <p class="text-gray-700 leading-relaxed">
              Our Just-in-Time Delivery service optimizes your supply chain with precision timing, reducing inventory costs while ensuring products arrive exactly when needed.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-teal-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-teal-100">
                  <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-teal-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Precision Scheduling</h5>
                    <p class="text-sm text-gray-600">Accurate delivery timing to match production needs</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-teal-100">
                  <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-teal-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Real-time Coordination</h5>
                    <p class="text-sm text-gray-600">Continuous communication with all stakeholders</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-teal-100">
                  <div class="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-teal-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Inventory Optimization</h5>
                    <p class="text-sm text-gray-600">Minimal inventory with maximum efficiency</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-teal-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Significant reduction in inventory holding costs</li>
                <li>Improved cash flow management</li>
                <li>Enhanced supply chain responsiveness</li>
                <li>Reduced warehouse space requirements</li>
                <li>Minimized stock obsolescence risk</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-teal-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-teal-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-teal-700">99.9%</div>
                <div class="text-sm text-teal-600">On-time Delivery</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-teal-700">40%</div>
                <div class="text-sm text-teal-600">Cost Reduction</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-teal-700">24/7</div>
                <div class="text-sm text-teal-600">Tracking</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-teal-700">1000+</div>
                <div class="text-sm text-teal-600">JIT Deliveries</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-teal-600",
      bgColor: "bg-gradient-to-br from-teal-100 to-teal-50",
      borderColor: "border-teal-200",
      hoverGradient: "hover:from-teal-200 hover:to-teal-100",
      image: "https://www.procore.com/library/wp-content/uploads/2024/04/Just_in_Time_Delivery_Construction-768x384.png",
    },
    {
      icon: Zap,
      title: "Supply Chain Optimization",
      description: "Advanced analytics and process improvements to enhance supply chain efficiency, reduce costs, and increase profitability.",
      detailedContent: `
        <div class="space-y-6">
          <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-5 rounded-xl mb-4">
            <h3 class="text-2xl font-bold text-gray-900 mb-3">Supply Chain Optimization</h3>
            <p class="text-gray-700 leading-relaxed">
              Leverage our expertise to transform your supply chain with data-driven insights, process improvements, and innovative technologies for maximum efficiency.
            </p>
          </div>
          
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 class="font-semibold text-indigo-800 text-lg mb-4">Service Features:</h4>
              <div class="space-y-3">
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100">
                  <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-indigo-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Process Analysis</h5>
                    <p class="text-sm text-gray-600">Comprehensive supply chain assessment</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100">
                  <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-indigo-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Technology Integration</h5>
                    <p class="text-sm text-gray-600">Implementing latest supply chain technologies</p>
                  </div>
                </div>
                <div class="flex items-start gap-3 p-3 bg-white rounded-lg border border-indigo-100">
                  <div class="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span class="text-indigo-700 font-bold">✓</span>
                  </div>
                  <div>
                    <h5 class="font-semibold text-gray-800">Performance Monitoring</h5>
                    <p class="text-sm text-gray-600">Continuous tracking and improvement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h4 class="font-semibold text-indigo-800 text-lg mb-4">Key Benefits:</h4>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Reduced operational costs by up to 30%</li>
                <li>Improved delivery times and reliability</li>
                <li>Enhanced visibility across supply chain</li>
                <li>Better resource utilization and planning</li>
                <li>Increased customer satisfaction and loyalty</li>
              </ul>
            </div>
          </div>
          
          <div class="bg-indigo-50 p-4 rounded-lg mt-4">
            <h4 class="font-semibold text-indigo-900 mb-3">Performance Metrics:</h4>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div class="text-2xl font-bold text-indigo-700">30%</div>
                <div class="text-sm text-indigo-600">Cost Reduction</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-indigo-700">99.5%</div>
                <div class="text-sm text-indigo-600">Efficiency Gain</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-indigo-700">50+</div>
                <div class="text-sm text-indigo-600">Optimized Processes</div>
              </div>
              <div>
                <div class="text-2xl font-bold text-indigo-700">200+</div>
                <div class="text-sm text-indigo-600">Clients Served</div>
              </div>
            </div>
          </div>
        </div>
      `,
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-100 to-indigo-50",
      borderColor: "border-indigo-200",
      hoverGradient: "hover:from-indigo-200 hover:to-indigo-100",
      image: "https://media.istockphoto.com/id/1253841426/vector/smart-logistics-industry-4-0-inventory-optimization-isometric-asset-warehouse-and-inventory.jpg?s=612x612&w=0&k=20&c=VbaxeCdgZ7mMktZIuRAf0ZmXMa9iKPToH41eGB6DxxI=",
    },
  ];

  const handleLearnMore = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <section id="services" className="bg-gradient-to-b from-background via-secondary/20 to-background relative overflow-hidden py-12">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 -mt-4">
          <div className="text-center mb-10 animate-fade-in">
            <div className="inline-block px-3 py-1.5 bg-primary/10 rounded-full mb-3">
              <span className="text-xs font-semibold text-primary">Our Services</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-3 tracking-tight">
              What We Do
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto rounded-full mb-4"></div>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Comprehensive trading solutions tailored to your business needs. We bridge markets with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                className={`border-2 ${service.borderColor} shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 animate-slide-up bg-white/80 backdrop-blur-sm group overflow-hidden relative cursor-pointer h-full flex flex-col`}
                style={{ animationDelay: `${index * 0.15}s` }}
                onClick={() => handleLearnMore(service)}
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
                  <button
                    className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100 mt-auto"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleLearnMore(service);
                    }}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4 mt-1 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal with Left Image and Right Content */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-6xl w-full max-h-[90vh] overflow-y-auto animate-scale-in">
            <div className="relative">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b">
                <div className="flex items-center gap-3">
                  <div className={`w-12 h-12 ${selectedService.bgColor} rounded-xl flex items-center justify-center`}>
                    <selectedService.icon className={`h-6 w-6 ${selectedService.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">
                    {selectedService.title}
                  </h2>
                </div>
                <button
                  onClick={closeModal}
                  className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Content - Left Image and Right Text */}
              <div className="p-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Left Side - Image (Centered) */}
                  <div className="space-y-4 flex flex-col items-center justify-center">
                    {selectedService.image && (
                      <div className="h-80 overflow-hidden rounded-xl w-full max-w-lg flex items-center justify-center">
                        <img
                          src={selectedService.image}
                          alt={selectedService.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                  </div>

                  {/* Right Side - Content */}
                  <div className="space-y-4">
                    <div
                      className="prose prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: selectedService.detailedContent }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
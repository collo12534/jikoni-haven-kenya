import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Shop', href: '#shop' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const categories = [
    { name: 'Cookware', href: '#cookware' },
    { name: 'Utensils', href: '#utensils' },
    { name: 'Storage', href: '#storage' },
    { name: 'Bakeware', href: '#bakeware' },
  ];

  const support = [
    { name: 'Shipping Info', href: '#shipping' },
    { name: 'Returns', href: '#returns' },
    { name: 'Size Guide', href: '#size-guide' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-charcoal text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 lg:px-6 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-kitchen-green rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">K</span>
              </div>
              <span className="text-xl font-bold">KitchenCraft</span>
            </div>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Premium kitchenware for passionate home chefs across Kenya and beyond. 
              Quality, style, and functionality in every product.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-kitchen-green" />
                <span className="text-gray-300">+254 712 345 678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-kitchen-green" />
                <span className="text-gray-300">hello@kitchencraft.co.ke</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-kitchen-green" />
                <span className="text-gray-300">Nakuru, Kenya</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-gray-300 hover:text-kitchen-green transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Categories</h3>
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href}
                    className="text-gray-300 hover:text-kitchen-green transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Customer Support</h3>
            <ul className="space-y-3">
              {support.map((item) => (
                <li key={item.name}>
                  <a 
                    href={item.href}
                    className="text-gray-300 hover:text-kitchen-green transition-colors"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Payment Methods */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">We Accept</h4>
              <div className="flex flex-wrap gap-2">
                <div className="bg-kitchen-green text-white px-2 py-1 rounded text-xs font-medium">
                  M-Pesa
                </div>
                <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium">
                  PayPal
                </div>
                <div className="bg-gray-600 text-white px-2 py-1 rounded text-xs font-medium">
                  Visa
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-700">
        <div className="container mx-auto px-4 lg:px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © {currentYear} KitchenCraft. All rights reserved.
            </div>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              <div className="flex space-x-3">
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-8 h-8 p-0 hover:bg-kitchen-green hover:text-white"
                >
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-8 h-8 p-0 hover:bg-kitchen-green hover:text-white"
                >
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button 
                  size="sm" 
                  variant="ghost" 
                  className="w-8 h-8 p-0 hover:bg-kitchen-green hover:text-white"
                >
                  <Twitter className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm">
              <a href="#privacy" className="text-gray-400 hover:text-kitchen-green transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-400 hover:text-kitchen-green transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-kitchen.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="max-w-2xl">
          <div className="flex items-center space-x-2 mb-6 fade-in">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-terracotta text-terracotta" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">
              Trusted by 10,000+ home chefs
            </span>
          </div>

          <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 leading-tight slide-up">
            Shop Premium
            <span className="block text-kitchen-green">Kitchenware</span>
            <span className="block text-3xl lg:text-5xl text-muted-foreground">
              Today!
            </span>
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-8 max-w-lg slide-up">
            Discover our curated collection of professional-grade kitchen tools, 
            cookware, and accessories. From Kenya to the world, we bring quality 
            to your kitchen.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 slide-up">
            <Button 
              size="lg" 
              className="btn-hero text-lg px-8 py-6 group"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-6 border-kitchen-green text-kitchen-green hover:bg-kitchen-green hover:text-white"
            >
              View Categories
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center space-x-6 mt-12 fade-in">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-kitchen-green-light rounded-full flex items-center justify-center">
                <span className="text-kitchen-green text-sm">✓</span>
              </div>
              <span className="text-sm text-muted-foreground">Free Shipping</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-kitchen-green-light rounded-full flex items-center justify-center">
                <span className="text-kitchen-green text-sm">✓</span>
              </div>
              <span className="text-sm text-muted-foreground">Quality Guarantee</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-kitchen-green-light rounded-full flex items-center justify-center">
                <span className="text-kitchen-green text-sm">✓</span>
              </div>
              <span className="text-sm text-muted-foreground">Mpesa Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-kitchen-green-light rounded-full opacity-20 blur-xl"></div>
      <div className="absolute bottom-20 right-32 w-20 h-20 bg-terracotta rounded-full opacity-30 blur-lg"></div>
    </section>
  );
};

export default Hero;
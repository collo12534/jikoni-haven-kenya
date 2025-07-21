import { ChefHat, UtensilsCrossed, Package, Cookie } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const FeaturedCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Cookware',
      description: 'Professional pots, pans & skillets',
      icon: ChefHat,
      itemCount: '120+ items',
      color: 'kitchen-green',
    },
    {
      id: 2,
      name: 'Utensils',
      description: 'Essential cooking tools & gadgets',
      icon: UtensilsCrossed,
      itemCount: '85+ items',
      color: 'terracotta',
    },
    {
      id: 3,
      name: 'Storage',
      description: 'Containers & organization solutions',
      icon: Package,
      itemCount: '60+ items',
      color: 'sage',
    },
    {
      id: 4,
      name: 'Bakeware',
      description: 'Baking sheets, molds & accessories',
      icon: Cookie,
      itemCount: '45+ items',
      color: 'charcoal',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/50">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Shop by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collection of kitchen essentials, 
            designed to elevate your culinary experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.id}
                className="product-card cursor-pointer group border-0 bg-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div 
                    className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    style={{ backgroundColor: `hsl(var(--${category.color}))` }}
                  >
                    <IconComponent 
                      className="h-8 w-8 text-white" 
                    />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {category.name}
                  </h3>
                  
                  <p className="text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  
                  <p className="text-sm font-medium text-kitchen-green mb-4">
                    {category.itemCount}
                  </p>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="w-full group-hover:bg-kitchen-green group-hover:text-white group-hover:border-kitchen-green transition-all duration-300"
                  >
                    Browse {category.name}
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            variant="outline"
            className="border-kitchen-green text-kitchen-green hover:bg-kitchen-green hover:text-white"
          >
            View All Categories
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCategories;
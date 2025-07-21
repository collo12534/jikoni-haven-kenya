import { useState } from 'react';
import { Star, ShoppingCart, Heart, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const BestSellers = () => {
  const [hoveredProduct, setHoveredProduct] = useState<number | null>(null);

  const products = [
    {
      id: 1,
      name: 'Professional Chef Knife Set',
      price: 12500,
      originalPrice: 15000,
      rating: 4.9,
      reviews: 234,
      image: 'https://images.unsplash.com/photo-1594736797933-d0a9ba44a7ee?w=400&h=400&fit=crop',
      badge: 'Best Seller',
      discount: '17%',
    },
    {
      id: 2,
      name: 'Non-Stick Cookware Set',
      price: 8900,
      originalPrice: null,
      rating: 4.8,
      reviews: 189,
      image: 'https://images.unsplash.com/photo-1556909114-b5445744cd6b?w=400&h=400&fit=crop',
      badge: 'Popular',
      discount: null,
    },
    {
      id: 3,
      name: 'Bamboo Cutting Board Set',
      price: 3200,
      originalPrice: 4000,
      rating: 4.7,
      reviews: 156,
      image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=400&h=400&fit=crop',
      badge: 'Eco-Friendly',
      discount: '20%',
    },
    {
      id: 4,
      name: 'Stainless Steel Measuring Set',
      price: 1800,
      originalPrice: null,
      rating: 4.9,
      reviews: 312,
      image: 'https://images.unsplash.com/photo-1556909114-ba5b5d2c5dd3?w=400&h=400&fit=crop',
      badge: 'Essential',
      discount: null,
    },
  ];

  const formatPrice = (price: number) => {
    return `KSh ${price.toLocaleString()}`;
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Best Selling Products
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover what other home chefs are loving. These top-rated kitchen essentials 
            are flying off our shelves.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <Card 
              key={product.id}
              className="product-card cursor-pointer group border-0"
              style={{ animationDelay: `${index * 0.1}s` }}
              onMouseEnter={() => setHoveredProduct(product.id)}
              onMouseLeave={() => setHoveredProduct(null)}
            >
              <CardContent className="p-0">
                {/* Product Image */}
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Badges */}
                  <div className="absolute top-3 left-3">
                    <Badge 
                      variant="secondary" 
                      className="bg-kitchen-green text-white"
                    >
                      {product.badge}
                    </Badge>
                  </div>
                  
                  {product.discount && (
                    <div className="absolute top-3 right-3">
                      <Badge 
                        variant="destructive"
                        className="bg-terracotta"
                      >
                        -{product.discount}
                      </Badge>
                    </div>
                  )}

                  {/* Quick Actions */}
                  <div className={`absolute inset-0 bg-black/40 flex items-center justify-center space-x-2 transition-opacity duration-300 ${
                    hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'
                  }`}>
                    <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100">
                      <Eye className="h-4 w-4" />
                    </Button>
                    <Button size="sm" variant="secondary" className="bg-white hover:bg-gray-100">
                      <Heart className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  {/* Rating */}
                  <div className="flex items-center space-x-1 mb-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-3 w-3 ${
                            i < Math.floor(product.rating) 
                              ? 'fill-terracotta text-terracotta' 
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-kitchen-green transition-colors">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-lg font-bold text-kitchen-green">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>

                  {/* Add to Cart Button */}
                  <Button 
                    className="w-full bg-kitchen-green hover:bg-sage text-white"
                    size="sm"
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button 
            size="lg"
            className="bg-kitchen-green hover:bg-sage text-white px-8"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BestSellers;
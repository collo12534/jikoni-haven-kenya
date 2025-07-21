import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Mutindi',
      location: 'Nairobi, Kenya',
      rating: 5,
      comment: 'The quality is outstanding! My new knife set has completely transformed my cooking experience. Fast delivery to Nairobi too.',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      product: 'Chef Knife Set',
    },
    {
      id: 2,
      name: 'James Kipkurui',
      location: 'Eldoret, Kenya',
      rating: 5,
      comment: 'Amazing cookware! The non-stick pans are perfect and the customer service was exceptional. Highly recommend KitchenCraft.',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      product: 'Non-Stick Cookware Set',
    },
    {
      id: 3,
      name: 'Grace Wanjiku',
      location: 'Mombasa, Kenya',
      rating: 5,
      comment: 'Love the bamboo cutting boards! Eco-friendly and beautiful. The whole family enjoys cooking with these quality tools.',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      product: 'Bamboo Cutting Board Set',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of satisfied customers across Kenya and beyond who trust 
            KitchenCraft for their culinary needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id}
              className="product-card border-0 bg-card relative"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-kitchen-green-light">
                  <Quote className="h-8 w-8" />
                </div>

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-terracotta text-terracotta mr-1"
                    />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-muted-foreground mb-6 italic">
                  "{testimonial.comment}"
                </p>

                {/* Customer Info */}
                <div className="flex items-center space-x-3">
                  <img 
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                    <p className="text-xs text-kitchen-green font-medium">
                      Purchased: {testimonial.product}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-12 border-t border-border">
          <div className="text-center">
            <div className="text-3xl font-bold text-kitchen-green mb-2">10K+</div>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-kitchen-green mb-2">4.9</div>
            <p className="text-muted-foreground">Average Rating</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-kitchen-green mb-2">500+</div>
            <p className="text-muted-foreground">Products</p>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-kitchen-green mb-2">47</div>
            <p className="text-muted-foreground">Counties Served</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
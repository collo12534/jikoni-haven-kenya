import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubscribed(true);
      setIsLoading(false);
      setEmail('');
    }, 1500);
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-6">
        <Card className="card-gradient border-0 overflow-hidden">
          <CardContent className="p-8 lg:p-12">
            <div className="max-w-3xl mx-auto text-center">
              {!isSubscribed ? (
                <>
                  <div className="w-16 h-16 bg-kitchen-green-light rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="h-8 w-8 text-kitchen-green" />
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Get Kitchen Tips & Special Offers
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Join our community of passionate home chefs! Get exclusive recipes, 
                    cooking tips, and be the first to know about our latest products and special deals.
                  </p>

                  <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 h-12 border-kitchen-green/30 focus:border-kitchen-green"
                      required
                    />
                    <Button 
                      type="submit"
                      disabled={isLoading}
                      className="bg-kitchen-green hover:bg-sage text-white px-8 h-12"
                    >
                      {isLoading ? 'Subscribing...' : 'Subscribe'}
                    </Button>
                  </form>

                  <p className="text-sm text-muted-foreground mt-4">
                    No spam, unsubscribe anytime. We respect your privacy.
                  </p>

                  {/* Benefits */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-kitchen-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-kitchen-green font-bold">🍳</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Weekly Recipes</h4>
                      <p className="text-sm text-muted-foreground">
                        Get delicious, kitchen-tested recipes delivered to your inbox
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-kitchen-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-kitchen-green font-bold">💰</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Exclusive Deals</h4>
                      <p className="text-sm text-muted-foreground">
                        Access subscriber-only discounts and early product launches
                      </p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-kitchen-green-light rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-kitchen-green font-bold">🎯</span>
                      </div>
                      <h4 className="font-semibold text-foreground mb-2">Cooking Tips</h4>
                      <p className="text-sm text-muted-foreground">
                        Professional techniques and kitchen hacks from expert chefs
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="fade-in">
                  <div className="w-16 h-16 bg-kitchen-green rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="h-8 w-8 text-white" />
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
                    Welcome to KitchenCraft!
                  </h2>
                  
                  <p className="text-lg text-muted-foreground mb-6">
                    Thank you for subscribing! Check your email for a special welcome offer.
                  </p>

                  <Button 
                    onClick={() => setIsSubscribed(false)}
                    variant="outline"
                    className="border-kitchen-green text-kitchen-green hover:bg-kitchen-green hover:text-white"
                  >
                    Subscribe Another Email
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Newsletter;
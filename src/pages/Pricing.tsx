import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Sparkles, Zap } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";

const Pricing = () => {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("create-payment", {
        body: { email: null },
      });

      if (error) throw error;
      if (data?.url) {
        window.open(data.url, "_blank");
      }
    } catch (error) {
      console.error("Checkout error:", error);
      toast.error("Failed to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">Simple Pricing</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Unlock{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Pro Access
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              One simple price. All premium features. No subscriptions.
            </p>
          </div>

          {/* Pricing Card */}
          <div className="max-w-md mx-auto">
            <div className="relative rounded-2xl border-2 border-primary bg-card p-8 shadow-elegant">
              {/* Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                  <Zap className="w-4 h-4" />
                  Best Value
                </div>
              </div>

              <div className="text-center mb-8 mt-2">
                <h2 className="text-2xl font-bold mb-2">Pro Access</h2>
                <p className="text-muted-foreground mb-4">
                  Unlock all premium features
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-5xl font-bold">$29</span>
                  <span className="text-muted-foreground">one-time</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {[
                  "Unlimited projects",
                  "Priority support",
                  "Advanced AI features",
                  "Custom integrations",
                  "Lifetime updates",
                  "No recurring fees",
                ].map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleCheckout}
                disabled={loading}
              >
                {loading ? "Processing..." : "Get Pro Access"}
              </Button>

              <p className="text-center text-sm text-muted-foreground mt-4">
                Secure payment via Stripe
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;

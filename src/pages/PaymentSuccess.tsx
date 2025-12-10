import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          <div className="max-w-md mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-green-600 dark:text-green-400" />
            </div>
            
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            
            <p className="text-muted-foreground mb-8">
              Thank you for your purchase. You now have full access to all Pro features.
            </p>

            <div className="bg-card rounded-xl border p-6 mb-8">
              <h2 className="font-semibold mb-2">What's next?</h2>
              <p className="text-sm text-muted-foreground">
                You can now access all premium features. Check your email for a receipt and getting started guide.
              </p>
            </div>

            <Link to="/">
              <Button variant="hero" size="lg" className="gap-2">
                Go to Dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PaymentSuccess;

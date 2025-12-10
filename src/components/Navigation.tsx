import { Button } from "@/components/ui/button";

export const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md z-50 border-b">
      <div className="container px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <a href="/" className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              YourBrand
            </a>
            <div className="hidden md:flex gap-6">
              <a href="/#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="/pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="/about" className="text-sm font-medium hover:text-primary transition-colors">
                About
              </a>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden sm:inline-flex">
              Sign In
            </Button>
            <Button size="sm">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

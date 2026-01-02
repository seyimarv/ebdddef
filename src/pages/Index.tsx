import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { ProductGrid } from "@/components/ProductGrid";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-16">
        <Hero />
        <section id="products" className="py-20">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Our Products
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Discover our curated selection of premium products
              </p>
            </div>
            <ProductGrid />
          </div>
        </section>
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

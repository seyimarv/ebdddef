import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-24 pb-16">
        <div className="container px-4 md:px-6">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              About Us
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to transform the way businesses operate through innovative solutions
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-20 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4">
                We believe in creating solutions that empower businesses to reach their full potential. 
                Our platform is designed to simplify complex processes and drive meaningful results.
              </p>
              <p className="text-muted-foreground">
                Since our founding, we've helped thousands of companies streamline their operations 
                and achieve sustainable growth through cutting-edge technology and exceptional support.
              </p>
            </div>
            <div className="bg-gradient-subtle rounded-2xl p-8 border shadow-elegant animate-fade-in">
              <div className="space-y-6">
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">10K+</div>
                  <div className="text-muted-foreground">Active Users</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">99%</div>
                  <div className="text-muted-foreground">Customer Satisfaction</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">Support Available</div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-xl bg-card border hover-scale animate-fade-in">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🚀
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Constantly pushing boundaries to deliver cutting-edge solutions
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border hover-scale animate-fade-in" style={{ animationDelay: "0.1s" }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  🤝
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust</h3>
                <p className="text-muted-foreground">
                  Building lasting relationships through transparency and reliability
                </p>
              </div>
              <div className="text-center p-6 rounded-xl bg-card border hover-scale animate-fade-in" style={{ animationDelay: "0.2s" }}>
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center text-3xl">
                  ⚡
                </div>
                <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                <p className="text-muted-foreground">
                  Committed to delivering the highest quality in everything we do
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-subtle rounded-2xl p-12 border shadow-elegant">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of satisfied customers and transform your business today
            </p>
            <Button size="lg" className="shadow-glow">
              Start Your Journey
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;

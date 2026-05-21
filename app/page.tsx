import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Works } from "@/components/works";
import { About } from "@/components/about";
import { Footer } from "@/components/portfolio-footer";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Works />
      <Footer />
    </main>
  );
}

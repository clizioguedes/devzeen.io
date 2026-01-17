import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { About } from "@/components/sections/about";
import { Clients } from "@/components/sections/clients";
import { Contact } from "@/components/sections/contact";
import { BackToTop } from "@/components/ui/back-to-top";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Projects />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

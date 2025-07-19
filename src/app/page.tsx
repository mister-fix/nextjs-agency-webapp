import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Clients from "@/components/Clients";
import Services from "@/components/Services";
import Work from "@/components/Work";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Aside from "@/components/Aside";
import Blogs from "@/components/Blogs";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";

export default function Home() {
  return (
    <div className="font-sans bg-background min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-start">
        <Hero />
        <Clients />
        <Services />
        <Work />
        <Aside />
        <About />
        <Blogs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center min-h-[80vh] pt-32 pb-16 text-left bg-background">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12">
        <div className="flex flex-row items-start justify-between w-full">
          <div className="flex-1 flex flex-col items-start">
            {/* Badge */}
            <div className="flex items-center mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full border border-orange-400/90 bg-orange-300/20 text-orange-400/90 text-sm font-medium">
                <span className="inline-block animate-spin-slow">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="10" cy="10" r="8" stroke="#fb923c" strokeWidth="2" strokeDasharray="8 8" /></svg>
                </span>
                Now booking
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-6 text-primary">
              We build modern brands <br />for the digital age
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl">
              Devhaus crafts digital experiences that elevate your brand and drive results. Let’s create something remarkable together.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="rounded-full text-lg px-6 py-6 bg-neutral-900 text-white tracking-tighter hover:bg-neutral-800 border border-neutral-900">
                Learn More
              </Button>
              <Button variant="outline" size="lg" className="rounded-full text-lg tracking-tighter px-6 py-6 bg-white border border-neutral-200 text-neutral-900 hover:bg-neutral-100 shadow-none">
                View work
              </Button>
            </div>
          </div>
          <div className="shrink-1 hidden md:flex items-center justify-center">
            <Image src="/illustrations/oc-thinking.svg" alt="Illustration" width={475} height={475} className="scale-x-[-1]"/>
          </div>
        </div>
        
      </div>
    </section>
  );
}

// Add this to your globals.css or tailwind config for slow spin:
// .animate-spin-slow { animation: spin 2s linear infinite; } 
"use client";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const brands = [
  { name: "Stripe", logo: "/logos/stripe_ar21.svg" },
  { name: "Notion", logo: "/logos/notion_ar21.svg" },
  { name: "Linear", logo: "/logos/linear_ar21.svg" },
  { name: "Airbnb", logo: "/logos/airbnb_ar21.svg" },
  { name: "Slack", logo: "/logos/slack_ar21.svg" },
  { name: "Zapier", logo: "/logos/zapier_ar21.svg" },
  { name: "Shopify", logo: "/logos/shopify_ar21.svg" },
  { name: "Intercom", logo: "/logos/intercom_ar21.svg" },
];

export default function Clients() {

  return (
    <section className="w-full py-12 bg-background">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12">
        <hr className="border-t border-border mb-10" />
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 md:gap-16">
          <div className="text-left mb-8 md:mb-0">
            <p className="text-md md:text-md font-regular text-muted-foreground">Trusted by innovative and growing companies:</p>
          </div>
          <div className="relative w-full col-span-2">
            {/* Blur overlays */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-12 z-10 bg-gradient-to-r from-background via-background/80 to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-12 z-10 bg-gradient-to-l from-background via-background/80 to-transparent" />
            <Carousel plugins={[Autoplay({delay: 2000,})]} opts={{ align: "start", loop: true }} className="overflow-visible">
              <CarouselContent className="flex items-center">
                {brands.concat(brands).map((brand, i) => (
                  <CarouselItem key={i} className="basis-auto px-4 py-2 flex items-center justify-center">
                    <div className="w-32 h-16 flex items-center justify-center grayscale opacity-80 hover:opacity-100 transition-all">
                      {/* Replace with next/image and real logos later */}
                      {/* <span className="text-3xl text-gray-300 font-bold select-none">{brand.name}</span> */}
                      <Image src={brand.logo} alt={brand.name} width={100} height={85} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
} 
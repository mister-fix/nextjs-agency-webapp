"use client";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const blogs = [
  {
    title: "Balancing Creativity & Strategy in Design",
    description: "A complete rebrand and website redesign for a leading SaaS company.",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    aspect: "aspect-[4/2]",
  },
  {
    title: "Cutting edge Development",
    description: "Design and development of a modern, conversion-focused online store.",
    image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    aspect: "aspect-[1/1]",
  },
  {
    title: "The Art of Visual Storytelling",
    description: "Logo, brand guidelines, and web presence for a sustainable brand.",
    image: "https://images.unsplash.com/photo-1580907826414-5345a5aa68ad?q=80&w=1074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    aspect: "aspect-[1/1]",
  },
  {
    title: "Mobile App for Eventify",
    description: "UI/UX and development for a productivity mobile app.",
    image: "https://cdn.dribbble.com/userupload/16030575/file/original-963ddac180a0b92b81ae9f46eccd0c2c.jpg?resize=1024x768&vertical=center",
    link: "#",
    aspect: "aspect-[4/2]",
  },
  {
    title: "Personal Finance iOS App",
    description: "Personal brand and portfolio site for a creative professional.",
    image: "https://cdn.dribbble.com/userupload/10245104/file/original-5e76a4e8b2496cb86a2b37ca18923b2a.png?resize=1600x1200&vertical=center",
    link: "#",
    aspect: "aspect-[4/3]",
  },
];

export default function Blogs() {
  return (
    <section id="work" className="w-full py-24">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12">
        <div className="w-full flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary tracking-tighter">Our Blog</h2>
          <Button variant="outline" size="lg" className="rounded-full text-lg tracking-tighter shadow-none">Read all blogs</Button>
        </div>
        <Carousel
          plugins={[Autoplay({ delay: 5000 })]}
          opts={{ align: "start", loop: true, containScroll: "trimSnaps" }}
          className="overflow-visible"
        >
          <CarouselContent className="flex flex-row items-center">
            {blogs.concat(blogs).map((blog, i) => (
              <CarouselItem
                key={i}
                className="md:basis-1/3 flex-shrink-0"
              >
                <a
                  key={blog.title}
                  href={blog.link}
                  className="block w-full break-inside-avoid group focus:outline-none focus:ring-2 focus:ring-primary"
                  tabIndex={0}
                >
                  <div className="overflow-hidden rounded-xl bg-gray-200 w-full h-80 mb-4 relative">
                    <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-focus:scale-105">
                      <Image src={blog.image} alt="Project image" fill className="object-cover" />
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold mb-1 text-primary group-hover:underline tracking-tighter">
                    {blog.title}
                  </h3>
                  <div className="relative h-13 flex items-center">
                    <p className="text-base font-normal text-muted-foreground mb-0 w-full absolute left-0 top-0 text-left transition-all duration-400 group-hover:-translate-y-8 group-hover:opacity-0 group-focus:-translate-y-8 group-focus:opacity-0 group-hover:delay-0 group-focus:delay-0 group-hover:duration-400 group-focus:duration-400">
                      {blog.description}
                    </p>
                    <span className="text-base font-normal text-primary w-full absolute left-0 top-0 text-left opacity-0 translate-y-8 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-hover:delay-100 group-focus:delay-100 group-hover:duration-400 group-focus:duration-400">
                      View Case
                    </span>
                  </div>
                </a>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
} 
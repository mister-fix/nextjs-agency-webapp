import Image from 'next/image';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: "Brand Refresh for DealTick",
    description: "A complete rebrand and website redesign for a leading SaaS company.",
    image: "https://cdn.dribbble.com/userupload/16601755/file/original-170215c1b242be0a9ad9045152609dbe.png?resize=1024x768&vertical=center",
    link: "#",
    aspect: "aspect-[4/2]",
  },
  {
    title: "E-commerce Experience for Shoply",
    description: "Design and development of a modern, conversion-focused online store.",
    image: "https://images.unsplash.com/photo-1556740714-a8395b3bf30f?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "#",
    aspect: "aspect-[1/1]",
  },
  {
    title: "Brand Identity for hamilton",
    description: "Logo, brand guidelines, and web presence for a sustainable brand.",
    image: "https://cdn.dribbble.com/userupload/10546829/file/original-48ffbac01b91e66e3182700b6606fadf.png?resize=1600x1200&vertical=center",
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

export default function Work() {
  return (
    <section id="work" className="w-full py-24">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12">
        <div className="w-full flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary tracking-tighter">Selected Works</h2>
          <Button variant="outline" size="lg" className="rounded-full text-lg tracking-tighter shadow-none">See all works</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, i) => {
            // Set grid column span based on index
            let colSpan = "";
            if (i === 0 || i === 3) colSpan = "md:col-span-2";
            else if (i === 4) colSpan = "md:col-span-3";
            else colSpan = "md:col-span-1";
            return (
              <a
                key={project.title}
                href={project.link}
                className={`block w-full break-inside-avoid group focus:outline-none focus:ring-2 focus:ring-primary ${colSpan}`}
                tabIndex={0}
              >
                <div className={`overflow-hidden rounded-xl bg-gray-200 w-full h-80 mb-4 relative`}>
                  <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-focus:scale-105">
                    <Image src={project.image} alt="Project image" fill className="object-cover" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold mb-1 text-primary group-hover:underline tracking-tighter">
                  {project.title}
                </h3>
                <div className="relative h-8 flex items-center">
                  <p className="text-base font-normal text-muted-foreground mb-0 w-full absolute left-0 top-0 text-left transition-all duration-400 group-hover:-translate-y-8 group-hover:opacity-0 group-focus:-translate-y-8 group-focus:opacity-0 group-hover:delay-0 group-focus:delay-0 group-hover:duration-400 group-focus:duration-400">
                    {project.description}
                  </p>
                  <span className="text-base font-normal text-primary w-full absolute left-0 top-0 text-left opacity-0 translate-y-8 transition-all duration-400 group-hover:opacity-100 group-hover:translate-y-0 group-focus:opacity-100 group-focus:translate-y-0 group-hover:delay-100 group-focus:delay-100 group-hover:duration-400 group-focus:duration-400">
                    View Case
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
} 
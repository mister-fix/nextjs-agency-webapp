import { Button } from "@/components/ui/button";
import { Icon } from '@/components/Icon';

const services = [
  {
    icon: "Paintbrush",
    title: "Branding",
    description: "Crafting unique brand identities that stand out.",
  },
  {
    icon: "Proportions",
    title: "Web Design",
    description: "Designing visually stunning and user-friendly websites.",
  },
  {
    icon: "SquareTerminal",
    title: "Development",
    description: "Building robust, scalable, and high-performance web solutions.",
  },
  {
    icon: "ShoppingBag",
    title: "E-Commerce",
    description: "Developing data-driven strategies to grow your business online.",
  },
  {
    icon: "ChartLine",
    title: "Strategy",
    description: "Developing data-driven strategies to grow your business online.",
  },
];

export default function Services() {
  return (
    <section id="services" className="w-full py-24 bg-white">
      <div className="max-w-7xl w-full mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch bg-white px-2 py-2 border rounded-3xl">
          {/* Left column: main text and button */}
          <div className="flex flex-col justify-between bg-neutral-100/50 rounded-tl-2xl rounded-tr-2xl md:rounded-tr-none md:rounded-tl-2xl md:rounded-bl-2xl border md:border-r-1 h-full p-10">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-primary tracking-tighter mb-4">We create websites, e-commerce platforms, and more...</h2>
              <p className="text-lg text-muted-foreground mb-0">From branding to launch, we help ambitious teams and founders build digital experiences that drive results.</p>
            </div>
            <Button size="lg" className="rounded-full w-fit mt-8 self-start text-lg tracking-tighter font-semibold">Start a Project</Button>
          </div>
          {/* Right column: services list */}
          <div className="flex flex-col justify-center border border-t-0 md:border-t md:border-l-0 rounded-bl-2xl rounded-br-2xl md:rounded-bl-none md:rounded-tr-2xl md:rounded-br-2xl md:border-l-none">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`flex items-center gap-4 px-6 py-6${idx !== 0 ? ' border-t' : ''} hover:bg-neutral-100/50`}
                style={{ borderRadius: 0, boxShadow: 'none' }}
              >
                <div className="p-3.5 bg-black rounded-full flex items-center justify-center">
                    <Icon name={service.icon} color="white" className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-0 text-primary tracking-tighter">{service.title}</h3>
                  <p className="text-base text-muted-foreground">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 
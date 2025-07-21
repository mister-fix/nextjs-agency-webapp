import Image from 'next/image';
import { Button } from '@/components/ui/button';

const team = [
  {
    name: "Morten Pedersen",
    role: "Co-Founder",
    image: "https://images.unsplash.com/photo-1534399315465-2b91232de345?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Leonard Theo",
    role: "Creative Director",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Rachel McDermott",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1506863530036-1efeddceb993?q=80&w=1044&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Taylor Jeffries",
    role: "Lead Developer",
    image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: 'Miranda Stevens',
    role: 'iOS Developer',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=761&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: "Alexander Hipp",
    role: "Brand Strategist",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: 'Sasha Orlova',
    role: 'iOS Developer',
    image: 'https://images.unsplash.com/photo-1598897468838-e750a545847d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Jacob Tisch',
    role: 'iOS Developer',
    image: 'https://images.unsplash.com/photo-1722489873772-28815bb7e4f3?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    name: 'Usman Yousaf',
    role: 'iOS Developer',
    image: 'https://images.unsplash.com/photo-1610430238543-79c8a825a0fc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

export default function About() {
  return (
    <section id="about" className="w-full py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-12">
        <div className="w-full flex justify-between items-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary tracking-tighter">About us</h2>
          <Button variant="outline" size="lg" className="rounded-full text-lg tracking-tighter shadow-none">Learn more</Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <div
            key={i}
            className="block w-full break-inside-avoid group focus:outline-none focus:ring-2 focus:ring-primary"
            tabIndex={0}
          >
            <div className="overflow-hidden rounded-xl bg-gray-200 w-full h-80 mb-4 relative">
              <div className="w-full h-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 group-focus:scale-105">
                <Image src={member.image} alt="Project image" fill className="object-cover grayscale" />
              </div>
            </div>
            <h3 className="text-lg font-semibold mb-1 text-primary group-hover:underline tracking-tighter">
              {member.name}
            </h3>
            <div className="relative h-13 flex items-center">
              <p className="text-base font-normal text-muted-foreground mb-0 w-full absolute left-0 top-0 text-left transition-all duration-400 ">
                {member.role}
              </p>
            </div>
          </div>
          ))}
        </div>
      </div>
    </section>
  );
} 
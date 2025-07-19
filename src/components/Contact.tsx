import { Button } from "@/components/ui/button";
import { Icon } from "@/components/Icon";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-24">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-x-4 border p-1 rounded-xl items-stretch">
          {/* Column 1 */}
          <div className="hidden xl:block flex-1 rounded-lg bg-muted border">
            <div className="rounded-2xl h-full w-full flex items-end justify-start">
              {/* <Icon name="Plane" /> */}
              <Image src="/illustrations/oc-growing.svg" alt="High five illustration" width={400} height={400} draggable="false" className="object-contain w-full"/>
            </div>
          </div>

          {/* Column 2 */}
          <div className="flex-1 bg-white p-12 md:p-24">
            <h2 className="text-primary tracking-tighter text-3xl/6 font-semibold">Contact us</h2>
            <form action="#" className="mt-8 flex flex-col gap-y-8">
              <div className="flex flex-row items-center gap-y-4 gap-x-0 md:gap-y-0 md:gap-x-4">
                <input type="text" placeholder="First name" className="border-b rounded-none border-neutral-300/30 h-10 focus:outline-none focus:border-primary tracking-tighter" />
                <input type="text" placeholder="Last name" className="border-b rounded-none border-neutral-300/30 h-10 focus:outline-none focus:border-primary tracking-tighter" />
              </div>
              <div className="flex">
                <input type="email" placeholder="Your email address" className="w-full border-b rounded-none border-neutral-300/30 h-10 focus:outline-none focus:border-primary tracking-tighter" />
              </div>
              <div className="flex">
                <input type="text" placeholder="Subject" className="w-full border-b rounded-none border-neutral-300/30 h-10 focus:outline-none focus:border-primary tracking-tighter" />
              </div>
              <div className="flex">
                <textarea placeholder="Type your message here" className="w-full border-b rounded-none border-neutral-300/30 h-30 focus:outline-none focus:border-primary tracking-tighter" />
              </div>
              <div className="flex">
                <Button type="submit" variant="default" size="lg" className="rounded-full p-4 font-semibold text-lg tracking-tighter">Send it <Icon name="Send" /></Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );

} 
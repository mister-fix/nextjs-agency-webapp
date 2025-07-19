// import { Icon } from '@/components/Icon';

const socials = [
  {
    platform: 'LinkedIn',
    link: 'https://linkedin.com/',
    // icon: 'Linkedin'
  },
  {
    platform: 'X/Twitter',
    link: 'https://twitter.com/',
    // icon: 'Twitter'
  },
  {
    platform: 'Substack',
    link: 'https://substack.com/',
    // icon: 'Substack'
  },
  {
    platform: 'Dribbble',
    link: 'https://dribbble.com/',
    // icon: 'Github'
  },
  {
    platform: 'Behance',
    link: 'https://behance.net',
    // icon: 'Globe'
  }
]

const platforms = [
  {
    name: 'Web',
    link: '#'
  },
  {
    name: 'Mobile',
    link: '#',
  },
  {
    name: 'iOS',
    link: '#',
  },
  {
    name: 'Android',
    link: '#',
  }
]

const legal = [
  {
    name: 'Privacy Policy',
    link: '#'
  },
  {
    name: 'Terms of Use',
    link: '#',
  },
]

const resources = [
  {
    name: 'Blog',
    link: '#'
  },
  {
    name: 'Customer Stories',
    link: '#'
  },
  {
    name: 'Careers',
    link: '#'
  }
]

export default function Footer() {
  return (
    <footer className="relative w-full py-12 bg-black text-center text-sm text-muted-foreground mt-24 overflow-y-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-start py-6 px-4 md:px-12">
        <div className="w-full flex flex-col divide-y divide-neutral-800 gap-y-12">
          {/* <div className="grid grid-cols-1 md:grid-cols-2 pb-12">
            <div className="col-span-1 w-full text-left">
              <h3 className="text-xl font-semibold text-gray-300 tracking-tighter">Get in touch</h3>
            </div>
            <div className="col-span-1 w-full flex flex-row justify-start gap-x-12">
              <a href="#" className="flex-1 text-left text-5xl text-white tracking-tighter underline font-semibold">E-Mail</a>
              <a href="#" className="flex-1 text-left text-5xl text-white tracking-tighter underline font-semibold">Call us</a>
            </div>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-2 pb-12">
            <div className="col-span-1 w-full text-left">
              <h3 className="text-xl font-semibold text-gray-300 tracking-tighter">Locations</h3>
            </div>
            <div className="col-span-1 w-full flex flex-row justify-start gap-x-12">
              <div className="flex-1 text-white text-left">
                <h5 className="text-xl font-semibold mb-2 tracking-tighter">Primary office</h5>
                <p className="font-medium text-neutral-400 text-lg/5 tracking-tighter">60 East 42nd St Suite 4600 21st Floor, New York, NY 10165</p>
              </div>

              <div className="flex-1 text-white text-left">
                <h5 className="text-xl font-semibold mb-2 tracking-tighter">Secondary office</h5>
                <p className="font-medium text-neutral-400 text-lg/5 tracking-tighter">285 Fulton St Suite 8500 85th Floor, New York, NY 10007</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 pb-12">
            <div className="col-span-1 w-full text-left">
              <h3 className="text-xl font-semibold text-gray-300 tracking-tighter">Stay connected</h3>
            </div>
            <div className="col-span-1 w-full flex flex-row justify-start gap-x-12">
              <div className="flex flex-col text-white text-left gap-y-2">
                {socials.map((social, i) => (
                  <a key={i} href={social.link} target="_blank" rel="noreferrer noopener" className="text-lg/5 tracking-tighter text-neutral-400 hover:underline">
                    {/* <Icon name={social.icon} size={16} /> */}
                    {social.platform}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 pb-12">
            <div className="col-span-1 w-full text-left">
              <h3 className="text-xl font-semibold text-gray-300 tracking-tighter">Company</h3>
            </div>

            <div className="col-span-1 w-full flex flex-row justify-start gap-x-12">
              <div className="flex-1 text-white text-left">
                <h5 className="text-xl font-semibold mb-2 tracking-tighter">Resources</h5>
                <div className="flex flex-col text-left gap-y-2">
                  {resources.map((resource, i) => (
                    <a key={i} href={resource.link} className="block text-lg/5 tracking-tighter text-neutral-400 hover:underline hover:text-white">{resource.name}</a>
                  ))}
                </div>
              </div>

              <div className="flex-1 text-white text-left">
                <h5 className="text-xl font-semibold mb-2 tracking-tighter">Platform</h5>
                <div className="flex flex-col text-left gap-y-2">
                  {platforms.map((platform, i) => (
                    <a key={i} href={platform.link} className="block text-lg/5 tracking-tighter text-neutral-400 hover:underline hover:text-white">{platform.name}</a>
                  ))}
                </div>
              </div>

              <div className="flex-1 text-white text-left">
                <h5 className="text-xl font-semibold mb-2 tracking-tighter">Legal</h5>
                <div className="flex flex-col tracking-tighter text-left gap-y-2">
                  {legal.map((legal, i) => (
                    <a key={i} href={legal.link} className="block text-lg/5 tracking-tighter text-neutral-400 hover:underline hover:text-white">{legal.name}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-center justify-end">
            {/* <a href="#" className="text-3xl tracking-tighter text-white font-semibold hover:border-b">Devhaus</a> */}
            <p className="text-neutral-400 tracking-tighter">&copy; {new Date().getFullYear()} Devhaus Studios. Page built with <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer" className="border-b text-white">NextJS</a>.</p>
          </div>
        </div>
      </div>

      {/* Devhaus Text with Blur Effect */}
      <div className="relative w-full h-min pointer-events-none"> {/* Added fixed height */}
        <span
          className="absolute left-1/2 -translate-x-1/2 bottom-[-100px] select-none font-semibold bg-gradient-to-r from-neutral-200 via-neutral-200/95 to-transparent bg-clip-text text-transparent -tracking-widest"
          style={{
            fontSize: '8vw',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            userSelect: 'none',
          }}
        >
          Devhaus
        </span>
        
        {/* Blur Overlay - Positioned at bottom of footer */}
        <div className="absolute bottom-[-88px] left-0 w-full h-[50px] z-10">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {/* Stronger blur at the very bottom */}
            <div 
              className="absolute inset-0 backdrop-blur-[2px]"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 30%)',
                height: '40%'
              }}
            />
            <div 
              className="absolute inset-0 backdrop-blur-[2px]"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 36%)',
                height: '40%'
              }}
            />
            {/* Subtler blur above */}
            <div 
              className="absolute inset-0 backdrop-blur-[8px]"
              style={{
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, black 100%)',
                height: '100%'
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
} 
import { Icon } from '@/components/Icon';

export default function Aside() {
    return (
        <aside className="w-full py-24 flex flex-row items-center justify-stretch">
            <div className="flex flex-row flex-nowrap gap-[40px] justify-start items-start content-start overflow-hidden py-0 px-4 md:px-12 relative w-full container-xl max-w-7xl h-min mx-auto">
                <div className="bg-black p-14 rounded-xl opacity-100 flex shrink-0 flex-nowrap items-start justify-start overflow-hidden relative w-full">
                    <div className="flex flex-col md:flex-row flex-nowrap shrink-0 basis-0 flex-1 overflow-visible p-0 z-3 gap-[38px] will-change-auto">
                        <div className="flex flex-col flex-nowrap flex-1 shrink-0 basis-0 items-start content-start justify-between p-0 overflow-visible relative w-full z-3 min-h-full">
                            <div className="flex flex-col flex-nowrap items-start justify-center content-center gap-0 overflow-visible relative w-full max-h-full">
                                <div className="outline-none flex flex-col justify-start shrink-0 text-white transform-none opacity-100">
                                    <h2 className="text-6xl text-white text-left tracking-tighter font-semibold">Tired of sh*tty</h2>
                                </div>
                                <div className="outline-none flex flex-col justify-start shrink-0 text-white opacity-50 transform-none">
                                    <h2 className="text-6xl text-white text-left tracking-tighter font-semibold">digital products.</h2>
                                </div>
                            </div>
                            <div className="flex-none h-auto w-auto opacity-70 absolute bottom-0 left-0">
                                <a href="#" className="border-b border-neutral-500 opacity-100 hover:border-neutral-200 flex flex-row flex-nowrap justify-center items-center content-center cursor-pointer overflow-visible w-min pb-0.5 transition-colors duration-300">
                                    <div className="outline-none flex flex-col justify-start shrink-0 text-white opacity-100 transform-none basis-auto h-auto relative whitespace-pre w-auto select-none">
                                        <p className="font-medium text-3xl text-white tracking-tighter flex items-center justify-start">Work with us <Icon name="ChevronRight" color="white" className="ms-1"/></p>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="flex-1 flex justify-end opacity-100 [mask-image:linear-gradient(125deg,rgba(0,_0,_0,_0)_0%,rgb(0,0,0)_50%)] rotate-[-5deg] [inset:155px_56px_90px_58px]">
                            {/* <video src="https://framerusercontent.com/assets/KsUqgbzpTCYOU7oLgJj5dc76FPo.mp4" loop preload="auto" muted playsInline autoPlay className="cursor-auto w-100 h-100 rounded-none block object-cover bg-transparent object-center"></video> */}
                            <div className="relative h-[300px] w-[300px] perspective-1000">
                                {/* Sphere */}
                                <div className="absolute inset-0 rounded-full animate-spin-slow end-0 right-0">
                                    {/* Inner gradient for metallic effect */}
                                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-200 via-yellow-100 to-gray-300 shadow-[inset_0_0_50px_rgba(255,215,0,0.3),inset_0_0_100px_rgba(192,192,192,0.2)]" />
                                    
                                    {/* Shine/reflection */}
                                    <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 rounded-full bg-white/30 blur-[15px]" />
                                </div>
                            </div>
                        </div>
                        <div className="absolute top-0 left-0 z-3 h-20 w-full">
                            {/* Blur Overlay */}
                            <div className="absolute inset-0 overflow-hidden rounded-xl pointer-events-none">
                                {/* Primary blur layer */}
                                <div className="absolute inset-0 backdrop-blur-[2px]" style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 12%, black 80%, transparent 100%)' }} />

                                {/* Primary blur layer */}
                                <div  className="absolute inset-0 backdrop-blur-[2px]" style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 18%, black 80%, transparent 100%)' }} />
                                
                                {/* Final stronger blur at top */}
                                <div className="absolute inset-0 backdrop-blur-[8px]" style={{ maskImage: 'linear-gradient(to top, transparent 0%, black 30%, transparent 70%)', height: '40%' }} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    )
}

// export default function Aside() {
//     return (
//         <aside className="w-full py-24">
//             <div className="max-w-7xl w-full mx-auto px-4 md:px-12 md:py-12">
//                 <div className="relative h-[full] w-full p-12 flex flex-col md:flex-row items-center justify-start bg-black rounded-xl relative overflow-y-auto">
//                     {/* Top fade overlay */}
                    
//                     <div className="absolute top-0 left-0 w-full h-20 z-[1] pointer-events-none overflow-hidden">
//                         <div className="absolute inset-0 backdrop-blur-[8px] [mask-image:linear-gradient(to_top, transparent_0%, black_30%, black_70%, transparent_100%)] [mask-mode:alpha] [mask-repeat:no-repeat] [mask-size:100%_100%] will-change-auto" />
//                     </div>

// {/* <div className="absolute top-0 left-0 w-full h-20 z-[1] pointer-events-none overflow-hidden">
//     <div className="absolute inset-0 bg-white/5 backdrop-blur-[12px] [mask-image:linear-gradient(to_top,transparent_0%,black_30%,black_70%,transparent_100%)] [mask-mode:alpha] [mask-repeat: no-repeat] [mask-size: 100%_100%] will-change-auto" />
// </div> */}
                    
//                     {/* Main content */}
//                     <div className="flex-1 flex-col relative z-10">
//                         <h2 className="text-6xl text-white tracking-tighter font-bold">
//                             Tired of sh*tty <br />
//                             <span className="text-neutral-400">digital products.</span>
//                         </h2>
                        
//                         <Button variant="ghost" size="lg" className="mt-[300px] shadow-none rounded-full text-xl font-semibold tracking-tighter text-white hover:text-black border">
//                             Work with us <Icon name="ChevronRight" />
//                         </Button>
//                     </div>

//                     {/* Column 2 */}
//                     <div className="border border-red-500 flex-1 relative z-10">Hello world</div>
//                 </div>
//             </div>
//         </aside>
//     )
// }

{/* <div className="absolute top-0 left-0 w-full h-20 z-20 bg-gradient-to-b from-black/90 via-black/40 to-transparent blur-[15px] backdrop-blur-lg pointer-events-none" /> */}
                    {/* <div className="h-1/7 opacity-100 z-[3] w-full absolute top-0 left-0">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="opacity-100 absolute inset-0 z-[1] [mask-image:linear-gradient(to_top,_rgba(0,_0,_0,_0)_0%,_rgb(0,_0,_0)_12.5%,_rgb(0,_0,_0)_25%,_rgba(0,_0,_0,_0)_37.5%)] rounded-none pointer-events-none backdrop-blur-[0.078125px]"></div>
                            <div className="opacity-100 absolute inset-0 z-[2] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 12.5%, rgb(0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgba(0, 0, 0, 0) 50%)] rounded-none pointer-events-none backdrop-blur-[0.15625px]"></div>
                            <div className="opacity-100 absolute inset-0 z-[3] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 25%, rgb(0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgba(0, 0, 0, 0) 62.5%)] rounded-none pointer-events-none backdrop-blur-[0.3125px]"></div>
                            <div className="opacity-100 absolute inset-0 z-[4] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 37.5%, rgb(0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgba(0, 0, 0, 0) 75%)] rounded-none pointer-events-none backdrop-blur-[0.625px]"></div>
                            <div className="opacity-100 absolute inset-0 z-[5] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 50%, rgb(0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgba(0, 0, 0, 0) 87.5%)] rounded-none pointer-events-none backdrop-blur-[1.25px]"></div>
                            <div className="opacity-100 absolute inset-0 z-[6] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 62.5%, rgb(0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgba(0, 0, 0, 0) 100%)] rounded-none pointer-events-none backdrop-blur-[2.5px]"></div>
                            <div className="opacity-100 absolute inset-0 z-[7] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 75%, rgb(0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)] rounded-none pointer-events-none backdrop-blur-[5px] will-change-auto"></div>
                            <div className="opacity-100 absolute inset-0 z-[8] [mask-image:linear-gradient(to top, rgba(0, 0, 0, 0) 87.5%, rgb(0, 0, 0) 100%)] rounded-none pointer-events-none backdrop-blur-[10px] will-change-auto"></div>
                        </div>
                    </div> */}
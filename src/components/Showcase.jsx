// import { useGSAP } from "@gsap/react";
// import { useMediaQuery } from "react-responsive";
// import { useRef } from "react";
// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Showcase = () => {
  
//     const isTablet = useMediaQuery({query: '(max-width: 1024px)'})
//     const videoRef = useRef(null);

//     useGSAP(() => {
//         if(!isTablet) {
//             gsap.to('.content', {
//                 scrollTrigger: {
//                     trigger: '#showcase',
//                     start: 'top center',
//                     end: 'center center',
//                     scrub: 0.5,
//                 },
//                 opacity: 1,
//                 y: 0,
//                 ease: 'power2.inOut'
//             });

//             // Optimize video rendering with will-change
//             if(videoRef.current) {
//                 videoRef.current.style.willChange = 'auto';
//             }
//         }
//     }, [isTablet]);
    
//   return (

//     <section id="showcase">
//         <div className="media">
//            <video 
//              ref={videoRef}
//              src="/videos/game.mp4" 
//              loop 
//              muted 
//              autoPlay 
//              playsInline
//              preload="metadata"
//            />
//            <div className="mask">
//              <img src="/mask-logo.svg" alt="mask" loading="lazy"></img>
//            </div>

//         </div>

//         <div className="content">
//             <div className="wrapper">
//                 <div className="lg:max-w-md">
//                     <h2>Rocket Chip</h2>
//                     <div className="space-w-5 mt-7 pe-0">
//                         <p>
//                             Introducing {" "}
//                             <span className="text-white">
//                                 M4, Happily ever faster.
//                             </span>
//                             . M4 powers
//                         </p>
//                         <p>With an advanced 12MP Center Stage camera, Thunderbolt 5 on M4 Pro and M4 Max models, and an all-new nano-texture display option, MacBook Pro gets even more capable and even more pro 

//                         </p>
                        
//                         <p>
//                         A powerful Neural Accelerator is built into each GPU core of the M5 chip, which dramatically speeds up AI tasks like image generation from diffusion models and large language model (LLM) prompt processing. The 16-core Neural Engine drives Apple Intelligence features, making on-device AI powerful and energy efficient.
//                         </p>

//                         <p className="text-primary">
//                             Learn more about apple intelligence
//                         </p>
//                     </div>
//                 </div>

//                 <div className="max-w-3xs space-y-14">
//                     <div className="space-y-2">
//                         <p>Up to</p>
//                         <h3>6x faster</h3>
//                         <p>pro rendering performance than M2</p>
//                     </div>

//                     <div className="space-y-2">
//                         <p>Up to</p>
//                         <h3>1.5x faster</h3>
//                         <p>CPU performance than M2</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//   )
// }


// export default Showcase;

























// github v 


import { useGSAP } from "@gsap/react";
import { useMediaQuery } from "react-responsive";
import gsap from "gsap";



const Showcase = () => {
  
    const isTablet = useMediaQuery({query: '(max-width: 1024px)'})

    useGSAP(() => {
        if(!isTablet) {
            const timeline = gsap.timeline({
                scrollTrigger: {
                    trigger: '#showcase',
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                    pin: true

                }
            });
            timeline
            .to('.mask img', {
                transform: 'scale(1.1)'
            }).to('.content' , {opacity: 1, y:0, ease: 'power1.in'})

        }
    }, [isTablet])



  return (

    <section id="showcase">
        <div className="media">
           <video src="/videos/game.mp4" loop muted autoPlay playsInline />
           <div className="mask">
             <img src="/mask-logo.svg"></img>
           </div>

        </div>

        <div className="content">
            <div className="wrapper">
                <div className="lg:max-w-md">
                    <h2>Rocket Chip</h2>
                    <div className="space-w-5 mt-7 pe-0">
                        <p>
                            Introducing {" "}
                            <span className="text-white">
                                M4, Happily ever faster.
                            </span>
                            . M4 powers
                        </p>
                        <p>With an advanced 12MP Center Stage camera, Thunderbolt 5 on M4 Pro and M4 Max models, and an all-new nano-texture display option, MacBook Pro gets even more capable and even more pro 

                        </p>
                        
                        <p>
                        A powerful Neural Accelerator is built into each GPU core of the M5 chip, which dramatically speeds up AI tasks like image generation from diffusion models and large language model (LLM) prompt processing. The 16-core Neural Engine drives Apple Intelligence features, making on-device AI powerful and energy efficient.
                        </p>

                        <p className="text-primary">
                            Learn more about apple intelligence
                        </p>
                    </div>
                </div>

                <div className="max-w-3xs space-y-14">
                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3>6x faster</h3>
                        <p>pro rendering performance than M2</p>
                    </div>

                    <div className="space-y-2">
                        <p>Up to</p>
                        <h3>1.5x faster</h3>
                        <p>CPU performance than M2</p>
                    </div>
                </div>

            </div>
        </div>
    </section>
  )
}


export default Showcase;
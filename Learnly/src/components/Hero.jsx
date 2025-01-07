import { useEffect } from "react";
import '../componentsStyle/Hero.css';
import Button from "./Button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    // GSAP animation for styling and animating the video frame
    useEffect(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(10% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame', // Element to trigger the animation
                start: 'center center', // Animation starts when this position is reached
                end: 'bottom center', // Animation ends when this position is reached
                scrub: true, // Smooth animation based on scroll
            },
        });
    }, []); // Runs once when the component mounts

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                {/* Single background video */}
                <video
                    src="videos/hero-1.mp4" // Replace with the path to your video file
                    autoPlay
                    loop
                    muted
                    className="absolute left-0 top-0 size-full object-cover object-center"
                />
                
                {/* Hero section heading */}
                {/* <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    Learn
                </h1> */}
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-black">Learnly</h1>
                        <p className="mb-5 font-robert-regular text-gray-800 text-20 font-bold" style={{ fontSize: "45px" }}>
                            Learn, Explore, <br />Succeed with <span className="bg-yellow-200 p-2 rounded-full text-black animated-bg">Learnly</span>.
                        </p>

                        {/* Call-to-action button */}
                        <Button text="Start your learning journey" custemStyle="bg-gray-700 text-white rounded-full px-5 py-5 flex-center gap-2 font-robert-regular text-lg" id="#learn-section" />
                    </div>
                </div>
            </div>
            {/* <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-black">
                Learn
            </h1> */}
        </div>
    );
};

export default Hero;

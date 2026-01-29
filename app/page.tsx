"use client";
import Image from "next/image";
import { motion, useInView} from "framer-motion";
import { useEffect, useState , useRef} from "react";
import { once } from "events";
import AnimatedList from "@/components/lists/AnimatedList";
import SystemList from "@/components/lists/SystemList";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // type System = {
  //   name: string;
  //   description: string;
  //   containerClassName: string;
  //   itemClassName?: string;
  // };

  // const systems: System[] = [
  //   { 
  //     name: "Web Development", 
  //     description: "Building responsive and dynamic websites.", 
  //     containerClassName: "flex flex-col justify-center items-start mt-32 w-[350px]", 
  //     itemClassName: "text-left -rotate-2 lg:text-4xl text-2xl font-raleway text-custom-blush-ivory tracking-[-0.08em] font-light" 
  //   },
  // ];

  return (
    <div className="flex flex-col space-y-28 items-center justify-center font-sans z-0">
      <div className="mt-18 max-w-3xl flex flex-col relative p-4 lg:p-2">
        <div className="">
          <p className="text-5xl tracking-tighter lg:text-[86px] font-light font-raleway text-custom-brown">HELLO</p>
        </div>
        <div className="flex flex-row gap-0">
          <div className="mr-2">
            <p className="lg:text-[86px] tracking-tighter text-5xl font-light font-raleway text-custom-brown">I'M</p>
          </div>
          <div className="lg:w-63 w-30 relative lg:h-70 h-40 mt-1 lg:-ml-8 z-10">
            <Image 
              src="/images/LourdesKyle.png"
              alt="gawon"
              fill
            ></Image>
          </div>
          <div className="lg:ml-2 lg:-mt-3 ml-2 -mt-1">
             <p className="lg:text-[98px] -tracking-[0.08em] text-5xl font-extralght italic font-cormorant text-custom-brown lg:-ml-9 -ml-5">RACHEL</p>
          </div>
        </div>

        <div className="absolute self-end -mr-4 lg:top-48 top-28 lg:w-[38%] w-[40%] h-56 lg:mr-2 text-wrap truncate">
          <p className="lg:text-[20px] text-[16px] font-medium font-raleway text-custom-brown">
            a Software Developer crafting scalable applications and elegant user experiences — from concept to production.
          </p> 
        </div>
      </div>

      {/* second section */}

      <motion.div
      initial={{ opacity: 0 , y: 100, backgroundColor: "#f2e9e4"}}
      animate={{ opacity: 1, y: scrolled ? 0 : -100, backgroundColor: scrolled ? "#8B5C2A" : "#f2e9e4" }}
      transition={{ type: "spring", bounce: 0.3, stiffness: 100, damping: 10 }}
      className="min-h-screen flex flex-row w-full space-y-0 justify-center"
      >
        <div className="w-1/3">
          <div className="flex flex-col justify-center items-center mt-28 p-8">
            <div className="p-2 w-fit">
              <p className="lg:text-6xl -rotate-2 text-2xl font-cormorant text-custom-blush-ivory tracking-[-0.05em] font-medium">E-commerce</p>
              <p className="lg:text-6xl text-2xl -rotate-2 -mt-4 place-self-center font-cormorant text-custom-blush-ivory tracking-[-0.05em] font-medium"> Systems</p>
              <p className="lg:text-[18px] text-2xl place-self-center mt-3 font-raleway text-custom-blush-ivory tracking-[-0.05em] font-medium">WHAT I HANDLED :</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">User Authentication</p>
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">Product Listing and Management</p>
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">Orders and Checkout Flow</p>
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">Stripe Payment</p>
            </div>
          </div>
        </div>

        <div className="w-1/3 relative overflow-visible">
         <div className="flex flex-col space-y-0 h-full items-center justify-center relative z-10">
            <AnimatedList />
         </div>
        </div>
        <div className="w-1/3">
          {/* <div className="flex flex-col justify-center items-end mt-32 mr-4 p-8">
            <p className="text-left -rotate-2 lg:text-4xl text-2xl font-raleway text-custom-blush-ivory tracking-[-0.08em] font-light">Information</p>
            <p className="lg:text-5xl text-2xl font-raleway text-custom-blush-ivory tracking-[-0.08em] font-light">Systems</p>
          </div> */}
          <div className="flex flex-col justify-center items-center mt-28 p-8">
            <div className="p-2 w-fit">
              <p className="lg:text-6xl rotate-2 text-2xl font-cormorant text-custom-blush-ivory tracking-[-0.05em] font-medium">Information</p>
              <p className="lg:text-6xl text-2xl rotate-2 -mt-4 place-self-center font-cormorant text-custom-blush-ivory tracking-[-0.05em] font-medium"> Systems</p>
              <p className="lg:text-[18px] text-2xl place-self-center mt-3 font-raleway text-custom-blush-ivory tracking-[-0.05em] font-medium">WHAT I HANDLED :</p>
            </div>
            <div className="flex flex-col space-y-4">
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">CRUD Operations</p>
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">User Roles</p>
              <p className="lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium p-2 bg-custom-blush-ivory rounded-2xl border-1 border-black">Data Validation & Reporting</p>
            </div>
          </div>
        </div>
      </motion.div>
{/* 
      <div className="grid grid-flow-col grid-rows-2 lg:p-8">
      </div> */}

      {/* end of second section */}

    </div>
);
}

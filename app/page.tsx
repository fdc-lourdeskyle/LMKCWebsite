"use client";
import Image from "next/image";
import { motion, useInView} from "framer-motion";
import { useEffect, useState , useRef} from "react";
import { once } from "events";
import AnimatedList from "@/components/lists/AnimatedList";
import Heading from "@/components/texts/Heading";
import Label from "@/components/texts/Label";
import Text from "@/components/texts/Text";
import TextContainer from "@/components/containers/TextContainer";

export default function Home() {

  const [scrolled, setScrolled] = useState(false);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
              <div className="-rotate-2">
                <Heading children="E-commerce"></Heading>
              </div>

              <div className="-mt-2 -rotate-2 place-self-center">
                <Heading children="Systems"></Heading>
              </div>

              <div className="mt-3">
                <Label children="WHAT I HANDLED :"></Label>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <TextContainer animate={isInView ? "show" : "hidden"}> 
                <Text children="User Authentication"></Text>
              </TextContainer>
              <TextContainer> 
                <Text children="Product Listing and Management"></Text>
              </TextContainer>
              <TextContainer> 
                <Text children="Orders and Checkout Flow"></Text>
              </TextContainer>
              <TextContainer> 
                <Text children="Stripe Payment"></Text>
              </TextContainer>
            </div>
          </div>
        </div>

        <div className="w-1/3 relative overflow-visible">
         <div className="flex flex-col space-y-0 h-full items-center justify-center relative z-10">
            <AnimatedList />
         </div>
        </div>
        <div className="w-1/3">
          <div className="flex flex-col justify-center items-center mt-28 p-8">
            <div className="p-2 w-fit">
              <div className="rotate-2">
                <Heading children="Information"></Heading>
              </div>

              <div className="-mt-2 rotate-2 place-self-center">
                <Heading children="Systems"></Heading>
              </div>

              <div className="mt-3">
                <Label children="WHAT I HANDLED :"></Label>
              </div>
            </div>
            <div className="flex flex-col space-y-4">
              <TextContainer> 
                <Text children="CRUD Operations"></Text>
              </TextContainer>
              <TextContainer> 
                <Text children="User Roles"></Text>
              </TextContainer>
              <TextContainer> 
                <Text children="Data Validation & Reporting"></Text>
              </TextContainer>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
);
}

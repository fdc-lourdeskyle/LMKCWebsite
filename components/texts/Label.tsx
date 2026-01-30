"use client";
import { motion, useInView, Variants, Transition} from "framer-motion";
import { useEffect, useState , useRef, ReactNode} from "react";


type LabelProps = {
   children?: ReactNode;

   variants?: Variants;
   transition?: Transition;
   initial?: string;
   animate?: string;
   className?: string;
}

export default function Label({
    children,
    variants,
    transition,
    initial = "hidden",
    animate = "visible",
    className = "lg:text-[18px] text-2xl place-self-center mt-3 font-raleway text-custom-blush-ivory tracking-[-0.05em] font-medium",
}: LabelProps) {  
    return (
        <motion.p
        className={className}
        variants={variants}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.p>
    ); 
}
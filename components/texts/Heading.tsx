"use client";
import { motion, useInView, Variants, Transition} from "framer-motion";
import { useEffect, useState , useRef, ReactNode} from "react";


type HeadingProps = {
   children?: ReactNode;

   variants?: Variants;
   transition?: Transition;
   initial?: string;
   animate?: string;
   className?: string;
}

export default function Heading({
    children,
    variants,
    transition,
    initial = "hidden",
    animate = "show",
    className = "lg:text-6xl text-2xl font-cormorant text-custom-blush-ivory tracking-[-0.05em] font-medium",
}: HeadingProps) {  
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
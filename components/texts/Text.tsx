"use client";
import { motion, useInView, Variants, Transition} from "framer-motion";
import { useEffect, useState , useRef, ReactNode} from "react";


type TextProps = {
   children?: ReactNode;

   variants?: Variants;
   transition?: Transition;
   initial?: string;
   animate?: string;
   className?: string;
}

export default function Text({
    children,
    variants,
    transition,
    initial = "hidden",
    animate = "visible",
    className = "lg:text-[18px]  text-2xl font-raleway text-custom-brown tracking-[-0.05em] font-medium",
}: TextProps) {  
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
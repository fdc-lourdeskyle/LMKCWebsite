"use client";
import { motion, useInView, Variants, Transition} from "framer-motion";
import { useEffect, useState , useRef, ReactNode} from "react";


type TextContainerProps = {
   children?: ReactNode;

   variants?: Variants;
   transition?: Transition;
   initial?: string;
   animate?: string;
   className?: string;
}

export default function TextContainer({
    children,
    variants,
    transition,
    initial = "hidden",
    animate = "visible",
    className = "p-2 bg-custom-blush-ivory rounded-[14px] border border-black mt-2",
}: TextContainerProps) {  
    return (
    <motion.div
        className={className}
        variants={variants}
        initial={initial}
        animate={animate}
        transition={transition}
      >
        {children}
      </motion.div>
    ); 
}
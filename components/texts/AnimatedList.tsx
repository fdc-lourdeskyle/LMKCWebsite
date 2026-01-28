"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 1.0,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0 },
};

export default function AnimatedList() {

    const textRef = useRef(null);
    const isInView = useInView(textRef, { once: false });

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col space-y-0 h-full items-center justify-center relative z-10"
    >
      <motion.p
        variants={itemVariants}
        ref={textRef}
        animate={isInView ? "show" : "hidden"}
        transition={{ type: "tween", duration: 0.7, ease: "backOut", stiffness: 200 }}
        className="lg:text-8xl text-6xl font-cormorant text-custom-creamy-beige tracking-[-0.08em] font-light"
      >
        Building
      </motion.p>
      <motion.p
        variants={itemVariants}
        ref={textRef}
        animate={isInView ? "show" : "hidden"}
        transition={{ type: "spring",  duration: 0.8, stiffness: 200 }}
        className="lg:text-8xl text-6xl font-cormorant text-custom-creamy-beige tracking-[-0.08em] font-light -mt-5"
      >
        End-to-End
      </motion.p>
      <motion.p
        variants={itemVariants}
        ref={textRef}
        animate={isInView ? "show" : "hidden"}
        transition={{ type: "tween", duration: 0.9, ease: "backIn" }}
        className="lg:text-8xl text-6xl italic font-cormorant text-custom-creamy-beige font-light tracking-[-0.08em] -mt-4"
      >
        Experiences
      </motion.p>
    </motion.div>
  );
}




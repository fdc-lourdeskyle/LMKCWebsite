"use client";

import React from "react";
import { motion } from "framer-motion";

type SystemListProps<T> = {
  items: T[];

  containerVariants?: any;
  itemVariants?: any;

  containerTransition?: any;
  itemTransition?: any;

  containerClassName?: string;
  itemClassName?: string;

  renderItem?: (item: T, index: number) => React.ReactNode;
};

export default function SystemList<T>({
  items,
  containerVariants,
  itemVariants,
  containerTransition,
  itemTransition,
  containerClassName = "",
  itemClassName = "",
  renderItem,
}: SystemListProps<T>) {
  return (
    <motion.div
      className={containerClassName}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      transition={containerTransition}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className={itemClassName}
          variants={itemVariants}
          transition={itemTransition}
        >
          {renderItem?.(item, index)}
        </motion.div>
      ))}
    </motion.div>
  );
}

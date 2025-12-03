"use client"

import { motion } from "motion/react"
import { ReactNode } from "react"

interface MotionTransitionProps {
  children: ReactNode
  position: "right" | "bottom" | 'left' | 'top'
  className?: string,
  duration?: number,
  delay?: number
}

export const MotionTransition = ({ children, position, className, duration = 1.4, delay = 0.5 }: MotionTransitionProps) => {

  const initialPos = {
    x: position === "right" ? 20 : position === "left" ? -20 : 0,
    y: position === "bottom" ? -20 : position === "top" ? 20 : 0,
    opacity: 0
  }
  return (
    <motion.div
      initial={initialPos}

      animate={{
        opacity: 1,
        y: 0,
        x: 0
      }}

      transition={{
        duration,
        delay,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

interface AnimatedTextProps {
  text: string
  className?: string
  delay?: number
}

export const AnimatedText = ({ text, className, delay = 0 }: AnimatedTextProps) => {
  const letters = text.split("");

  const container = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: delay,
        staggerChildren: 0.05,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.h2
      className={`${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span key={index} variants={child}>
          {letter}
        </motion.span>
      ))}
    </motion.h2>
  );
};
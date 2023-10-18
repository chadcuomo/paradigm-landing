"use client";

import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.25, // time between each child animation
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 25 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 3, // Initial delay for the first child
      },
    },
  };

  

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 sm:py-10 sm:px-5 xl:px-20 uppercase">
      <div className="flex justify-between w-full font-semibold text-xs">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <p>Kouame N&apos;dri</p>
          <p>Chad Cuomo</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.25, duration: 0.5 }}
          className="text-center"
        >
          <p>Paradigm</p>
          <p>Labs</p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="text-right"
        >
          <p>Iconic digital</p>
          <p>products (2023)</p>
        </motion.div>
      </div>
      <div className="text-center w-full">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.75 }}
          style={{ marginBlock: 0, marginInline: 0 }}
          className="font-black sm:text-8xl text-6xl md:text-9xl lg:text-[175px] xl:text-[195px]"
        >
          Paradigm
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.65 }}
          className="text-xs md:text-base md:mt-4 font-semibold mt-2 lg:mt-[0px]"
        >
          Your vision &#xB7; Our execution &#xB7; One paradigm
        </motion.p>
      </div>
      <motion.div
        className="w-full"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div
          className="w-full max-w-[450px] flex flex-col gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h3
            className="font-extrabold text-lg sm:text-2xl border-b border-black"
            variants={childVariants}
          >
            Work
          </motion.h3>
          <motion.p
            className="text-sm font-semibold border-b border-black"
            variants={{
              ...childVariants,
              show: {
                ...childVariants.show,
                transition: { ...childVariants.show.transition, delay: 3.25 },
              }, // Incremented delay
            }}
          >
            Sage.ai <span className="pl-3">&#183;</span>{" "}
            <span className="font-normal text-xs sm:text-sm pl-3">
              (Upcoming) - Web application
            </span>
          </motion.p>
          <motion.p
            className="font-semibold border-b border-black text-sm"
            variants={{
              ...childVariants,
              show: {
                ...childVariants.show,
                transition: { ...childVariants.show.transition, delay: 3.5 },
              }, // Further incremented delay
            }}
          >
            Mayson.ai <span className="pl-3">&#183;</span>{" "}
            <span className="font-normal text-xs sm:text-sm pl-3">
              (Upcoming) - Web application
            </span>
          </motion.p>
          <motion.p
            className="text-sm font-semibold border-b border-black"
            variants={{
              ...childVariants,
              show: {
                ...childVariants.show,
                transition: { ...childVariants.show.transition, delay: 3.75 },
              }, // Even further incremented delay
            }}
          >
            Stealth Product <span className="pl-3">&#183;</span>{" "}
            <span className="font-normal text-xs sm:text-sm pl-3">
              (Upcoming)
            </span>
          </motion.p>
        </motion.div>
      </motion.div>
    </main>
  );
}

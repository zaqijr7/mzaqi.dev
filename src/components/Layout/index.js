import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 },
};

const Layout = ({ children }) => {
  const router = useRouter();
  return (
    <>
      {!router.query.blogPage ? (
        <motion.main
          initial="hidden"
          animate="enter"
          exit="exit"
          variants={variants}
          transition={{ type: "linear" }}
          className="xl:w-10/12 lg:overflow-auto"
        >
          {children}
        </motion.main>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default Layout;

import React from "react";
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const Collections = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();
  const [ref3, inView3] = useInView();

  React.useEffect(() => {
    if (inView1) {
      controls1.start({ x: 0, opacity: 1 });
    } else {
      controls1.start({ x: '-100%', opacity: 0 });
    }
  }, [controls1, inView1]);

  React.useEffect(() => {
    if (inView2) {
      controls2.start({ y: '3.5rem', opacity: 1 });
    } else {
      controls2.start({ y: '-50%', opacity: 0 });
    }
  }, [controls2, inView2]);

  React.useEffect(() => {
    if (inView3) {
      controls3.start({ y: '-2.5rem', x: '7rem', opacity: 1 });
    } else {
      controls3.start({ y: '-50%', opacity: 0 });
    }
  }, [controls3, inView3]);

  return (
    <div className="h-fit mid:h-screen mid:pb-10 text-white pt-4 md:pt-16 relative ">
      <div className="flex relative flex-col md:flex-row md:mb-32  mx-auto p-4 mt-6 md:pt-20 justify-center gap-14 ">
        
        <motion.div
          ref={ref1}
          initial={{ x: '-100%', opacity: 0 }}
          animate={controls1}
          transition={{ duration: 0.8 }}
          className="w-full mid:w-1/3"
        >
          <h4 className="mb-4 text-3xl font-serif">Collections</h4>
          <p className="text-left justify-start font-light">
            Welcome to Zerah-Luxury, where fashion meets individuality. Our
            journey began with a simple idea: to create clothing that not only
            looks good but feels good. We believe that every piece of clothing
            tells a story, and we are here to help you write yours. Founded in
            2024, Zerah-Luxury has grown from a passion project into a
            community-driven brand cherished by fashion enthusiasts worldwide.
            Our designs are inspired by the perfect blend of tradition and
            innovation, capturing the spirit of those who dare to stand out.
          </p>
        </motion.div>
        <div className="relative w-full mid:w-1/2 h-64">
          <motion.img
            ref={ref2}
            initial={{ y: '-50%', opacity: 0 }}
            animate={controls2}
            transition={{ duration: 0.8, delay: 0.5 }}
            src="/images/samson.jpg"
            alt="First Image"
            className="absolute top-0 left-0 w-96 h-[30rem] object-cover z-10 transform translate-y-14 "
          />
          <motion.img
            ref={ref3}
            initial={{ y: '-50%', opacity: 0 }}
            animate={controls3}
            transition={{ duration: 0.8, delay: 1 }}
            src="/images/jeremy.jpg"
            alt="Second Image"
            className="absolute top-0 left-0 w-96 h-[30rem] object-cover z-0 transform -translate-y-10 translate-x-28"
          />
        </div>
      </div>
    </div>
  );
};

export default Collections;
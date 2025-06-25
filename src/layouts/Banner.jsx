import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { motion } from "motion/react";
import { Link } from "react-router";

const Banner = () => {
  return (
    <>
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 7000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
        direction="horizontal"
      >
        <SwiperSlide>
          <div className="w-full relative bg-[url('https://i.ibb.co/RkhLg4TQ/Banner-photo-3.jpg')] bg-cover bg-center h-[40rem] md:h-screen">
            <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full px-20 md:w-9/12 mx-auto">
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-5xl md:text-7xl text-yellow-100 font-bold mb-8"
              >
                Unveiling the Past: Explore the World’s Greatest Artifacts
              </motion.h1>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-2xl md:text-3xl text-white"
              >
                Discover the stories behind legendary relics like the Rosetta
                Stone, the Antikythera Mechanism and many more!.
              </motion.p>
              <Link to="/allArtifacts">
                <motion.button
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="btn btn-outline text-yellow-100 text-3xl mt-5 rounded-xl"
                >
                  Visit the Collection
                </motion.button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative bg-[url('https://i.ibb.co/4RDZD56F/Banner-photo-2.jpg')] bg-cover bg-center h-[40rem] md:h-screen">
            <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full px-20">
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-5xl md:text-7xl text-yellow-100 font-bold mb-8"
              >
                Preserve History, Share Knowledge
              </motion.h1>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-2xl md:text-3xl text-white"
              >
                Contribute artifacts, engage with history, and be part of a
                thriving community of enthusiasts.
              </motion.p>
              <Link to="/allArtifacts">
                <motion.button
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="btn btn-outline text-yellow-100 text-3xl mt-8 rounded-xl"
                >
                  Visit the Collection
                </motion.button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full relative bg-[url('https://i.ibb.co/6J4jqgNG/Banner-photo-1.jpg')] bg-cover bg-center h-[40rem] md:h-screen">
            <div class="absolute inset-0 bg-gradient-to-t from-black/100 to-transparent"></div>
            <div class="relative z-10 flex flex-col items-center justify-center h-full px-20">
              <motion.h1
                initial={{ x: -200, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-5xl md:text-7xl text-yellow-100 font-bold mb-8"
              >
                Your Gateway to Timeless Discoveries
              </motion.h1>
              <motion.p
                initial={{ y: 200, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 3 }}
                className="text-2xl md:text-3xl text-white"
              >
                Browse, learn, and track historical artifacts in a beautifully
                designed, user-friendly platform.
              </motion.p>
              <Link to="/allArtifacts">
                <motion.button
                  initial={{ y: 200, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 3 }}
                  className="btn btn-outline text-yellow-100 text-3xl mt-8 rounded-xl"
                >
                  Visit the Collection
                </motion.button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Banner;

import { motion } from "framer-motion";
import Typed from "react-typed";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-white" />
          <div className="w-1 sm:h-55 h-40 bg-white" />
        </div>

        <div>
          <div className="flex items-center">
            <h1 className={`${styles.heroHeadText}text-black mt-10`}>
              <span className="text-black">Dev </span>{" "}
              <span className="text-white">Hassan</span>
            </h1>
          </div>
          <p className={`${styles.heroSubText} mt-2 text-black`}>
            I can create
            <Typed
              strings={[
                "<span style='color: white; font-weight: bold;'> 3D Visuals</span>",
                "<span style='color: white; font-weight: bold;'> Web Applications</span>",
                "<span style='color: white; font-weight: bold;'> User Interfaces</span>",
                "<span style='color: white; font-weight: bold;'> UX/UI Designs</span>",
                "<span style='color: white; font-weight: bold;'> tools that Automate User Tasks</span>",
              ]}
              typeSpeed={50}
              backSpeed={30}
              cursorChar="_"
              showCursor={true}
              loop
            />
            <br className="hidden" />
          </p>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-10 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;

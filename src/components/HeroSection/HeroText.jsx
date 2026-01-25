import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const HeroText = () => {
  return (
    <div className="flex flex-col gap-4 h-full justify-center text-center md:text-left">
      <motion.h2
        variants={fadeIn("down", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-xl lg:text-2xl uppercase text-lightGrey"
      >
        FULL STACK WEB DEVELOPER
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl md:text-[2.8rem] lg:text-6xl text-red font-bold uppercase"
      >
        Caroline <br className="hidden md:block" />
        Mutemi
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        Innovative full-stack developer crafting seamless, high-performance
        <br /> web experiences with precision and creativity.
      </motion.p>

      {/* CV Section */}
      <motion.div
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="mt-6"
      >
        <a
          href="public/images/CAROLINEMUTEMI11CV(1).pdf"
          download
          className="inline-block mt-4 px-6 py-3 bg-red text-white rounded-md hover:bg-orange-dark transition duration-300"
        >
          Download My CV
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;

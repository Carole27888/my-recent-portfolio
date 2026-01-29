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
        VIRTUAL ASSISTANT & SOCIAL MEDIA MANAGER
      </motion.h2>
      <motion.h1
        variants={fadeIn("right", 0.4)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-4xl md:text-[2.8rem] lg:text-6xl text-red font-bold uppercase"
      >
        Carole
      </motion.h1>
      <motion.p
        variants={fadeIn("up", 0.6)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
        className="text-lg mt-4 text-white"
      >
        I support busy teams and creators with organized, consistent,
        <br /> and responsive day-to-day operations.
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
          href="#contact"
          className="inline-block mt-4 px-6 py-3 bg-red text-white rounded-md hover:bg-orange-dark transition duration-300"
        >
          Let's Work Together
        </a>
      </motion.div>
    </div>
  );
};

export default HeroText;

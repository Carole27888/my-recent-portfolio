import RealEstateText from "./RealEstateText";
import RealEstateCards from "./RealEstateCards";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const RealEstateMain = () => {
  return (
    <div id="real-estate" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <RealEstateText />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <RealEstateCards />
      </motion.div>
    </div>
  );
};

export default RealEstateMain;

import AllEducation from "./AllEducation";
import EducationText from "./EducationText";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const EducationMain = () => {
  return (
    <div id="education" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("down", 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <EducationText />
      </motion.div>

      <motion.div
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <AllEducation />
      </motion.div>
    </div>
  );
};

export default EducationMain;

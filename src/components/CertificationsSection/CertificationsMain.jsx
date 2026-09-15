import CertificationsText from './CertificationsText';
import AllCertifications from './AllCertifications';
import { motion } from 'framer-motion';
import { fadeIn } from '../../framerMotion/variants';

const CertificationsMain = () => {
  return (
    <div id="certifications" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn('down', 0)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
      >
        <CertificationsText />
      </motion.div>

      <motion.div
        variants={fadeIn('up', 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
      >
        <AllCertifications />
      </motion.div>
    </div>
  );
};

export default CertificationsMain;

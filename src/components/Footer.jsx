import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="py-8 px-6 bg-black">
      <div className="container mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          © 2025 Tomer Negad. All rights reserved.
        </motion.p>
      </div>
    </footer>
  );
};

export default Footer;
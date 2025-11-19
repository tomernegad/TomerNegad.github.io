import { motion } from 'framer-motion';

const Header = () => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-black bg-opacity-80 backdrop-blur-md z-50"
    >
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold neon-text">Tomer Negad</h1>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:neon-text transition">Home</a></li>
          <li><a href="#about" className="hover:neon-text transition">About</a></li>
          <li><a href="#skills" className="hover:neon-text transition">Skills</a></li>
          <li><a href="#projects" className="hover:neon-text transition">Projects</a></li>
          <li><a href="#contact" className="hover:neon-text transition">Contact</a></li>
        </ul>
      </nav>
    </motion.header>
  );
};

export default Header;
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-20 left-20 w-72 h-72 bg-purple-600 rounded-full blur-3xl opacity-20"
        />
        <motion.div
          animate={{
            y: [20, 0, 20],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-20 right-20 w-72 h-72 bg-indigo-600 rounded-full blur-3xl opacity-20"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center z-10 px-4"
      >
        <h1 className="text-6xl md:text-7xl font-bold neon-text mb-4">Tomer Negad</h1>
        <p className="text-2xl md:text-3xl mb-8 text-gray-300">Fullstack Junior Developer</p>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400 mb-8">
          Passionate about creating innovative web applications with modern technologies.
          Building scalable solutions with React, Node.js, and more.
        </p>
        <motion.a
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-3 border-2 border-purple-500 rounded-lg text-lg font-semibold hover:bg-purple-500 hover:text-white transition"
        >
          View My Work
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
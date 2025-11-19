import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto text-center"
        >
          <p className="text-lg mb-6">
            Hi, I'm Tomer Negad, a dedicated fullstack junior developer with a passion for creating
            efficient and user-friendly web applications. I specialize in modern web technologies
            and enjoy tackling complex problems with innovative solutions.
          </p>
          <p className="text-lg">
            With experience in both frontend and backend development, I strive to build scalable
            and maintainable code that delivers exceptional user experiences.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
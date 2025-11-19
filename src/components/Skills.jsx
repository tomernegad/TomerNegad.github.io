import { motion } from 'framer-motion';

const Skills = () => {
  const technologies = ['React', 'Docker', 'MongoDB', 'Node.js', 'Kubernetes'];
  const additionalSkills = ['Full-Stack Development', 'Express', 'Windows', 'Linux', 'Database Management'];
  const languages = ['JavaScript', 'C', 'Python'];

  const SkillTag = ({ skill }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-3 rounded-lg text-center shadow-lg"
    >
      {skill}
    </motion.div>
  );

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          Technical Skills
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Technologies</h3>
            <div className="grid gap-3">
              {technologies.map((tech) => (
                <SkillTag key={tech} skill={tech} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Additional Skills</h3>
            <div className="grid gap-3">
              {additionalSkills.map((skill) => (
                <SkillTag key={skill} skill={skill} />
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">Programming Languages</h3>
            <div className="grid gap-3">
              {languages.map((lang) => (
                <SkillTag key={lang} skill={lang} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
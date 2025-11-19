import { motion } from 'framer-motion';

const Skills = () => {
  const technologies = ['React', 'Docker', 'MongoDB', 'Node.js', 'Kubernetes'];
  const additionalSkills = ['Full-Stack Development', 'Express', 'Linux', 'Database Management'];
  const languages = ['JavaScript', 'C', 'Python'];

  const SkillBar = ({ skill, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span>{skill}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1 }}
          className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full"
        ></motion.div>
      </div>
    </div>
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
            <h3 className="text-2xl font-semibold mb-6">Technologies</h3>
            {technologies.map((tech, index) => (
              <SkillBar key={tech} skill={tech} level={80 + index * 5} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Additional Skills</h3>
            {additionalSkills.map((skill, index) => (
              <SkillBar key={skill} skill={skill} level={75 + index * 5} />
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Programming Languages</h3>
            {languages.map((lang, index) => (
              <SkillBar key={lang} skill={lang} level={85 + index * 5} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
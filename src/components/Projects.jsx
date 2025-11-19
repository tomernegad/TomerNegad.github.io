import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'BookStore App',
      description: 'A full-featured bookstore application with user authentication and book management.',
      link: 'https://github.com/tomernegad/BookStore-App.git',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'FoodApp',
      description: 'A food delivery app with real-time ordering and payment integration.',
      link: 'https://github.com/tomernegad/FoodApp.git',
      tech: ['React', 'Express', 'MongoDB']
    },
    {
      title: 'Todo App',
      description: 'A simple yet powerful todo application with drag-and-drop functionality.',
      link: 'https://github.com/tomernegad/todoapp.git',
      tech: ['React', 'JavaScript']
    },
    {
      title: 'Booking App',
      description: 'A booking system for reservations with calendar integration.',
      link: 'https://github.com/tomernegad/BOOKINGAPP.git',
      tech: ['React', 'Node.js', 'Express']
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          My Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800 p-6 rounded-lg neon-border hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="mb-4">
                {project.tech.map(tech => (
                  <span key={tech} className="inline-block bg-cyan-600 text-xs px-2 py-1 rounded mr-2 mb-2">
                    {tech}
                  </span>
                ))}
              </div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 transition"
              >
                View on GitHub →
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
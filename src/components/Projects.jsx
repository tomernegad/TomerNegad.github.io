import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: 'BookStore App',
      description: 'A full-featured bookstore application with user authentication and book management.',
      link: 'https://github.com/tomernegad/BookStore-App',
      image: 'https://private-user-images.githubusercontent.com/107677845/398362251-12654c93-9500-4aae-83cf-0f76cded1484.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM1NTI5ODgsIm5iZiI6MTc2MzU1MjY4OCwicGF0aCI6Ii8xMDc2Nzc4NDUvMzk4MzYyMjUxLTEyNjU0YzkzLTk1MDAtNGFhZS04M2NmLTBmNzZjZGVkMTQ4NC5wbmciLCJuYmYiOjE3NjM1NTI2ODgsImV4cCI6MTc2MzU1MzU4OH0',
      tech: ['React', 'Node.js', 'MongoDB']
    },
    {
      title: 'FoodApp',
      description: 'A food delivery app with real-time ordering and payment integration.',
      link: 'https://github.com/tomernegad/FoodApp',
      image: 'https://private-user-images.githubusercontent.com/107677845/446948850-37a6de5c-6abb-4291-bd68-64fa62fc5426.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM1NTI5ODgsIm5iZiI6MTc2MzU1MjY4OCwicGF0aCI6Ii8xMDc2Nzc4NDUvNDQ2OTQ4ODUwLTM3YTZkZTVjLTZhYmItNDI5MS1iZDY4LTY0ZmE2MmZjNTQyNi5wbmciLCJuYmYiOjE3NjM1NTI2ODgsImV4cCI6MTc2MzU1MzU4OH0',
      tech: ['React', 'Express', 'MongoDB']
    },
    {
      title: 'Todo App',
      description: 'A simple yet powerful todo application with drag-and-drop functionality.',
      link: 'https://github.com/tomernegad/todoapp',
      image: 'https://private-user-images.githubusercontent.com/107677845/416112564-3ae44b06-bc7c-4476-9515-d7a25d550490.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM1NTI5ODgsIm5iZiI6MTc2MzU1MjY4OCwicGF0aCI6Ii8xMDc2Nzc4NDUvNDE2MTEyNTY0LTNhZTQ0YjA2LWJjN2MtNDQ3Ni05NTE1LWQ3YTI1ZDU1MDQ5MC5wbmciLCJuYmYiOjE3NjM1NTI2ODgsImV4cCI6MTc2MzU1MzU4OH0',
      tech: ['React', 'JavaScript']
    },
    {
      title: 'Booking App',
      description: 'A booking system for reservations with calendar integration.',
      link: 'https://github.com/tomernegad/BOOKINGAPP',
      image: 'https://private-user-images.githubusercontent.com/107677845/409452179-afde8e1b-989e-4901-a46a-5053877035e0.png?jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NjM1NTI5OTAsIm5iZiI6MTc2MzU1MjY5MCwicGF0aCI6Ii8xMDc2Nzc4NDUvNDA5NDUyMTc5LWFmZGU4ZTFiLTk4OWUtNDkwMS1hNDZhLTUwNTM4NzcwMzVlMC5wbmciLCJuYmYiOjE3NjM1NTI2OTAsImV4cCI6MTc2MzU1MzU5MH0',
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
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-lg overflow-hidden border-2 border-purple-500 hover:shadow-xl transition"
            >
              <div className="relative h-48 bg-gray-700 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = 'https://via.placeholder.com/400x200/1a1a2e/8b5cf6?text=' + encodeURIComponent(project.title);
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                <p className="mb-4 text-gray-300">{project.description}</p>
                <div className="mb-4">
                  {project.tech.map(tech => (
                    <span key={tech} className="inline-block bg-purple-600 text-xs px-2 py-1 rounded mr-2 mb-2">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-400 hover:text-purple-300 transition font-semibold"
                >
                  View on GitHub →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
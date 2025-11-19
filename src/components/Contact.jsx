import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-gray-900">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-center mb-12 neon-text"
        >
          Get In Touch
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="text-lg mb-8">
            I'm always open to discussing new opportunities and interesting projects.
            Feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:tomernegad@gmail.com" className="text-cyan-400 hover:text-cyan-300">tomernegad@gmail.com</a></p>
              <p className="mb-2"><strong>Phone:</strong> 0528993367</p>
              <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tomer-negad-computer-scientist" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">View Profile</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/tomernegad" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300">View Profile</a></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-800 border border-cyan-400 rounded" />
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-800 border border-cyan-400 rounded" />
                <textarea placeholder="Your Message" rows="4" className="w-full p-3 bg-gray-800 border border-cyan-400 rounded"></textarea>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="w-full py-3 bg-cyan-600 hover:bg-cyan-700 rounded font-semibold"
                >
                  Send Message
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
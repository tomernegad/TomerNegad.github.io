import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    // Using formsubmit.co to send emails
    const form = e.target;
    const formDataObj = new FormData(form);
    
    try {
      const response = await fetch('https://formsubmit.co/tomernegad@gmail.com', {
        method: 'POST',
        body: formDataObj,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

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
              <p className="mb-2"><strong>Email:</strong> <a href="mailto:tomernegad@gmail.com" className="text-purple-400 hover:text-purple-300">tomernegad@gmail.com</a></p>
              <p className="mb-2"><strong>Phone:</strong> 0528993367</p>
              <p className="mb-2"><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tomer-negad-computer-scientist" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">View Profile</a></p>
              <p><strong>GitHub:</strong> <a href="https://github.com/tomernegad" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300">View Profile</a></p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Your Name" 
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-purple-400 rounded text-white" 
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Your Email" 
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-purple-400 rounded text-white" 
                />
                <textarea 
                  name="message"
                  placeholder="Your Message" 
                  rows="4" 
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full p-3 bg-gray-800 border border-purple-400 rounded text-white"
                ></textarea>
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_template" value="table" />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded font-semibold disabled:opacity-50"
                >
                  {status === 'sending' ? 'Sending...' : status === 'success' ? 'Sent!' : 'Send Message'}
                </motion.button>
                {status === 'error' && <p className="text-red-400 text-sm">Failed to send. Please try again.</p>}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
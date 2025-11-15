import { motion } from 'framer-motion';
import { FiMail, FiMapPin, FiLinkedin, FiGithub, FiFileText, FiBriefcase } from 'react-icons/fi';

export default function Contact() {
  const contactMethods = [
    {
      icon: <FiMail className="text-2xl" />,
      title: 'Email',
      value: 'carter@carterbridges.dev',
      href: 'mailto:carter@carterbridges.dev',
    },
    {
      icon: <FiMapPin className="text-2xl" />,
      title: 'Location',
      value: 'Union Grove, NC',
      href: 'https://maps.google.com?q=Union+Grove+NC',
    },
  ];

  const socialLinks = [
    {
      icon: <FiGithub className="w-6 h-6" />,
      label: 'GitHub',
      href: 'https://github.com/carterbridges2001',
    },
    {
      icon: <FiLinkedin className="w-6 h-6" />,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/carterbridges2001/',
    },
    {
      icon: <FiBriefcase className="w-6 h-6" />,
      label: 'Handshake',
      href: 'https://app.joinhandshake.com/profiles/carterb',
    },
    {
      icon: <FiFileText className="w-6 h-6" />,
      label: 'Resume',
      href: 'https://drive.google.com/file/d/1DSArMoLreWH64E68uK11EUP9El4HazVV/view?usp=sharing',
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll get back to you as soon as possible!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-dark mb-6">Contact Information</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{method.title}</h4>
                    <a
                      href={method.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-primary transition-colors"
                    >
                      {method.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <h4 className="font-medium text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-gray-700 hover:bg-primary hover:text-white shadow-md hover:shadow-lg transition-all duration-300"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h3 className="text-2xl font-semibold text-dark mb-6">Send Me a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="How can I help you?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 px-6 rounded-lg font-medium hover:bg-secondary transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                >
                  Send Message
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

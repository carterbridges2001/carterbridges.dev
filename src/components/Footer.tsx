import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const socialLinks = [
  {
    icon: <FiGithub className="w-5 h-5" />,
    href: 'https://github.com/carterbridges',
    label: 'GitHub',
  },
  {
    icon: <FiLinkedin className="w-5 h-5" />,
    href: 'https://linkedin.com/in/carterbridges',
    label: 'LinkedIn',
  },
  {
    icon: <FiTwitter className="w-5 h-5" />,
    href: 'https://twitter.com/carterbridges',
    label: 'Twitter',
  },
  {
    icon: <FiMail className="w-5 h-5" />,
    href: 'mailto:contact@carterbridges.dev',
    label: 'Email',
  },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <a
            href="#"
            className="text-2xl font-bold text-white hover:text-primary transition-colors inline-block mb-6"
          >
            Carter Bridges
          </a>
          
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Software engineer passionate about building exceptional digital experiences and solving complex problems through code.
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={link.label}
              >
                <span className="sr-only">{link.label}</span>
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} Carter Bridges. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-2">
              Built with React, TypeScript, and Tailwind CSS
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Project One',
    description: 'A modern web application built with React and Node.js that helps users manage their daily tasks efficiently.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express'],
    github: 'https://github.com/carterbridges/project-one',
    demo: 'https://project-one-demo.com',
    image: '/project1.jpg'
  },
  {
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform with user authentication, product catalog, and payment integration.',
    technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
    github: 'https://github.com/carterbridges/ecommerce-platform',
    demo: 'https://ecommerce-demo.com',
    image: '/project2.jpg'
  },
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'Real-time data visualization and analytics dashboard with machine learning predictions.',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: 'https://github.com/carterbridges/ai-analytics',
    demo: 'https://analytics-demo.com',
    image: '/project3.jpg'
  },
  {
    title: 'Mobile Task Manager',
    description: 'Cross-platform mobile application for task management with offline support and cloud sync.',
    technologies: ['React Native', 'Redux', 'Firebase', 'TypeScript'],
    github: 'https://github.com/carterbridges/task-manager-app',
    demo: 'https://apps.apple.com/app/task-manager',
    image: '/project4.jpg'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="h-48 bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                  <span className="text-gray-400 text-lg">Project Image</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs font-medium rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center text-gray-700 hover:text-primary transition-colors"
                      aria-label="View live demo"
                    >
                      <FiExternalLink className="mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://github.com/carterbridges"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border-2 border-primary text-primary font-medium rounded-lg hover:bg-primary hover:text-white transition-colors duration-300"
          >
            <FiGithub className="mr-2" />
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}

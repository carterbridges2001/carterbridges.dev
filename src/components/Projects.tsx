import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const projects = [
  {
    title: 'Ruminary Exchange',
    description: 'High-end goat auction platform featuring real-time bidding, secure payments, and comprehensive livestock management tools.',
    technologies: ['html', 'css', 'js', 'Firebase', 'Stripe'],
    github: 'https://github.com/carterbridges2001/Ruminary',
    demo: 'https://ruminaryexchange.com',
    image: '/images/ruminary-logo-mk1.png'
  },
  {
    title: 'Ruminary Exchange Mobile',
    description: 'iOS and Android app for the Ruminary Exchange platform, enabling users to bid, manage listings, and track auctions on the go.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Stripe'],
    github: 'https://github.com/carterbridges2001/ruminary-exchange-mobile',
    demo: 'https://apps.apple.com/app/ruminary-exchange/idYOUR_APP_ID',
    image: '/images/ruminarymobile.png'
  },
  {
    title: 'Project 3',
    description: 'Feature coming soon',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: 'https://github.com/carterbridges2001',
    demo: '#',
    image: '/images/project3.jpg'
  },
  {
    title: 'Project 4',
    description: 'Feature coming soon',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: 'https://github.com/carterbridges2001',
    demo: '#',
    image: '/images/project3.jpg'
  },
    {
    title: 'Project 5',
    description: 'Feature coming soon',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: 'https://github.com/carterbridges2001',
    demo: '#',
    image: '/images/project3.jpg'
  },
    {
    title: 'Project 6',
    description: 'Feature coming soon',
    technologies: ['Python', 'TensorFlow', 'D3.js', 'FastAPI'],
    github: 'https://github.com/carterbridges2001',
    demo: '#',
    image: '/images/project3.jpg'
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
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23e5e7eb"><rect width="100%" height="100%" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%239ca3af">Image not found</text></svg>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-100 to-indigo-100 flex items-center justify-center">
                    <span className="text-gray-400 text-lg">No Image Available</span>
                  </div>
                )}
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
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-700 hover:text-primary transition-colors"
                    aria-label="View live demo"
                  >
                    <FiExternalLink className="mr-1" /> Demo
                  </a>
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
            href="https://github.com/carterbridges2001"
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

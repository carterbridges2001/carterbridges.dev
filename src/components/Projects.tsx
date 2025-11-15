import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

const featuredProjects = [
  {
    title: 'Ruminary Exchange',
    description: 'A high-end goat auction platform with real-time bidding, secure payments, and breeder management tools. This production application serves real users and handles live transactions.',
    technologies: ['React', 'Node.js', 'Firebase', 'Express', 'WebSockets', 'Stripe'],
    github: 'https://github.com/carterbridges2001/Ruminary',
    demo: 'https://ruminaryexchange.com',
    image: '/images/ruminary-logo-mk1.png'
  },
  {
    title: 'Ruminary Exchange Mobile',
    description: 'The mobile companion to Ruminary Exchange, providing a seamless bidding and management experience on iOS and Android devices. Built with a focus on performance and user experience.',
    technologies: ['React Native', 'TypeScript', 'Redux', 'Firebase', 'Stripe'],
    github: 'https://github.com/carterbridges2001/ruminary-exchange-mobile',
    demo: 'https://apps.apple.com/app/ruminary-exchange/idYOUR_APP_ID',
    image: '/images/ruminarymobile.png'
  }
];

const experimentalProjects = [
  {
    title: 'DefenSense',
    description: 'An experimental cybersecurity platform exploring AI-powered threat detection. This project was built to learn about machine learning in security contexts.',
    technologies: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'PostgreSQL'],
    github: 'https://github.com/carterbridges2001/defensense',
    demo: 'https://defensense.com',
    image: '/images/DefenSense.png',
    status: 'Experimental'
  },
  {
    title: 'TallyFlux',
    description: 'A learning project to understand financial system architecture. Built to explore Java Spring Boot and modern accounting practices.',
    technologies: ['Java', 'Spring Boot', 'MySQL', 'JWT', 'Hibernate'],
    github: 'https://github.com/carterbridges2001/tallyflux',
    demo: 'https://tallyflux.com',
    image: '/images/tallyflux.png',
    status: 'Experimental'
  },
  {
    title: 'SocketSprint',
    description: 'A playground for real-time communication patterns. This project helped me understand WebSockets and reactive programming in depth.',
    technologies: ['Java', 'Spring WebFlux', 'Redis Streams', 'WebSocket', 'JWT', 'MongoDB'],
    github: 'https://github.com/carterbridges2001/socketsprint',
    demo: 'https://socketsprint.com',
    image: '/images/socketsprint.png',
    status: 'Experimental'
  },
  {
    title: 'Idenclave',
    description: 'An exploration of identity and access management. Built to understand OAuth2 and JWT implementation at scale.',
    technologies: ['Java', 'Spring Security', 'OAuth2', 'JWT', 'MySQL', 'Docker'],
    github: 'https://github.com/carterbridges2001/idenclave',
    demo: 'https://idenclave.com',
    image: '/images/idenclave.png',
    status: 'Experimental'
  },
  {
    title: 'DataCascade',
    description: 'A data pipeline experiment focusing on ETL processes and API design. Built to explore data engineering concepts.',
    technologies: ['Python', 'Pandas', 'FastAPI', 'Airflow', 'Docker'],
    github: 'https://github.com/carterbridges2001/datacascade',
    demo: 'https://datacascade.com',
    image: '/images/datacascade.png',
    status: 'Experimental'
  },
  {
    title: 'StratusWatch',
    description: 'A personal project to visualize IoT data. Built to learn about real-time data visualization and MQTT protocols.',
    technologies: ['Node.js', 'MQTT', 'React', 'D3.js', 'InfluxDB'],
    github: 'https://github.com/carterbridges2001/stratuswatch',
    demo: 'https://stratuswatch.com',
    image: '/images/stratuswatch.png',
    status: 'Experimental'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Featured Projects Section */}
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
            Production-grade applications that I've developed and maintained. These projects are actively used and represent my professional work.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {featuredProjects.map((project, index) => (
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

        {/* Experimental Projects Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Experimental Projects</h2>
          <div className="w-20 h-1 bg-gray-300 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            These are learning projects where I explore new technologies and architectures. 
            Each one represents a deep dive into specific technical concepts and patterns.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {experimentalProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="absolute top-4 right-4 bg-gray-100 text-gray-700 text-xs font-medium px-3 py-1 rounded-full">
                {project.status}
              </div>
              <div className="h-48 bg-gray-100 overflow-hidden">
                {project.image ? (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 opacity-90"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" fill="%23e5e7eb"><rect width="100%" height="100%" /><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="12" fill="%239ca3af">Image not found</text></svg>';
                    }}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-r from-blue-50 to-indigo-50 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">No Image Available</span>
                  </div>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 text-gray-600 text-xs font-medium rounded"
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
                    className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm"
                    aria-label="View on GitHub"
                  >
                    <FiGithub className="mr-1" /> Code
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-gray-600 hover:text-primary transition-colors text-sm"
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

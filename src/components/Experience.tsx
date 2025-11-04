import { motion } from 'framer-motion';

const experiences = [
  {
    role: 'Senior Software Engineer',
    company: 'Tech Innovations Inc.',
    period: '2022 - Present',
    description: [
      'Led a cross-functional team to develop and deploy a microservices-based architecture, improving system scalability by 40%',
      'Implemented CI/CD pipelines reducing deployment time by 60%',
      'Mentored junior developers and conducted code reviews to maintain code quality'
    ],
    technologies: ['React', 'Node.js', 'AWS', 'Docker', 'Kubernetes']
  },
  {
    role: 'Software Engineer',
    company: 'Digital Solutions LLC',
    period: '2019 - 2022',
    description: [
      'Developed and maintained customer-facing web applications using React and TypeScript',
      'Optimized database queries, improving application performance by 30%',
      'Collaborated with product managers to implement new features and improve user experience'
    ],
    technologies: ['TypeScript', 'React', 'PostgreSQL', 'GraphQL']
  },
  {
    role: 'Junior Developer',
    company: 'WebCraft Studios',
    period: '2017 - 2019',
    description: [
      'Built responsive websites and web applications using modern JavaScript frameworks',
      'Worked closely with designers to implement pixel-perfect UIs',
      'Participated in agile development processes and code reviews'
    ],
    technologies: ['JavaScript', 'React', 'CSS3', 'HTML5']
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">Work Experience</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 w-1 h-full bg-gray-200 transform -translate-x-1/2"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 rounded-full bg-primary z-10"></div>
                
                {/* Content */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} mb-2`}>
                      <h3 className="text-xl font-bold text-dark">{exp.role}</h3>
                    </div>
                    <div className={`flex items-center ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'} text-gray-600 mb-4`}>
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <ul className="space-y-2 text-gray-600">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex">
                          <span className="mr-2 text-primary">▹</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Spacer for even items */}
                <div className="hidden md:block w-5/12"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

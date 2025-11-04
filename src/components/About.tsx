import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'JavaScript (ES6+)', 'TypeScript', 'React', 'Node.js', 'Python',
    'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'PostgreSQL',
    'MongoDB', 'Git', 'CI/CD', 'Microservices', 'REST APIs'
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary rounded-2xl opacity-50 group-hover:opacity-70 transition duration-300 blur"></div>
              <div className="relative bg-white p-1 rounded-2xl shadow-xl">
                <img
                  src="/profile.jpg"
                  alt="Carter Bridges"
                  className="rounded-2xl w-full h-auto"
                />
              </div>
            </div>
          </motion.div>

          <motion.div 
            className="lg:w-2/3 text-gray-700"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold text-dark mb-6">
              A little about me
            </h3>
            <div className="space-y-4 text-gray-600">
              <p>
                Hello! I'm Carter, a passionate software engineer with a love for building
                exceptional digital experiences. My journey in software development started
                when I built my first website in high school, and I've been hooked ever since.
              </p>
              <p>
                I specialize in building scalable web applications using modern technologies
                like React, Node.js, and cloud platforms. I'm a strong believer in clean code,
                test-driven development, and continuous learning.
              </p>
              <p>
                When I'm not coding, you can find me hiking in the mountains, reading
                science fiction, or experimenting with new technologies and side projects.
              </p>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-dark mb-4">
                Here are a few technologies I've been working with recently:
              </h4>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-primary hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

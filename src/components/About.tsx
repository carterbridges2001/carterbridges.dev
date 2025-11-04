import { motion } from 'framer-motion';

export default function About() {
  const skills = [
    'Java', 'Python', 'C++', 'C#', 'SQL',
    'React', 'Angular', 'HTML/CSS', 'Network Monitoring',
    'Data Backup Solutions', 'Team Collaboration', 'Cybersecurity',
    'System Administration', 'Technical Support', 'Project Management'
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
              <p className="text-lg mb-6">
                Motivated Computer Science graduate with a strong foundation in software engineering and information technology. Eager to apply technical expertise in application development, system support, and cybersecurity while contributing to a dynamic, growth-oriented organization.
              </p>
              <p className="text-lg mb-6">
                Dynamic Software Engineer with hands-on experience in Java, Python, C++, and SQL, and a strong background in hardware implementation and network management. Focused on delivering scalable, secure, and efficient solutions across enterprise environments. Committed to excellence in every project.
              </p>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">Contact</h3>
                <p className="mb-2">Email: carter@carterbridges.dev</p>
                <p className="mb-2">Phone: 704-412-7870</p>
                <p className="mb-2">Location: Union Grove, NC</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="mb-4">
                  <h4 className="font-semibold">Bachelor of Science in Computer Science</h4>
                  <p>Appalachian State University, Boone, NC (2022-2025)</p>
                  <p>Department GPA: 3.4, Cumulative GPA: 3.37</p>
                </div>
                <div>
                  <h4 className="font-semibold">Associate of Science in Information Technology</h4>
                  <p>Surry Community College, Dobson, NC (2020-2022)</p>
                  <p>Graduated with Honors, GPA: 4.0</p>
                </div>
              </div>
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

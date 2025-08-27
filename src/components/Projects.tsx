import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, ArrowRight, Code2 } from 'lucide-react'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with real-time inventory, payment processing, and admin dashboard. Built with Next.js, TypeScript, and Stripe integration.',
      image: '/api/placeholder/600/400',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL', 'Tailwind CSS'],
      category: 'Full-Stack',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time data visualization platform with machine learning insights. Features interactive charts, predictive analytics, and automated reporting.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Python', 'TensorFlow', 'D3.js', 'FastAPI'],
      category: 'AI/ML',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Social Media Management Tool',
      description: 'Comprehensive social media platform with scheduling, analytics, and content creation tools. Supports multiple platforms and team collaboration.',
      image: '/api/placeholder/600/400',
      technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Socket.io', 'AWS'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      title: 'Mobile Banking App',
      description: 'Secure mobile banking application with biometric authentication, real-time transactions, and financial planning tools.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'Firebase', 'Redux', 'Biometrics', 'Plaid API'],
      category: 'Mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Real Estate Platform',
      description: 'Property listing and management platform with virtual tours, mortgage calculator, and agent matching system.',
      image: '/api/placeholder/600/400',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'WebRTC', 'Google Maps API'],
      category: 'Web App',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    },
    {
      title: 'Fitness Tracking App',
      description: 'Comprehensive fitness tracking application with workout plans, nutrition tracking, and social features for community engagement.',
      image: '/api/placeholder/600/400',
      technologies: ['React Native', 'GraphQL', 'MongoDB', 'JWT', 'Push Notifications'],
      category: 'Mobile',
      liveUrl: '#',
      githubUrl: '#',
      featured: false
    }
  ]

  // const categories = ['All', 'Full-Stack', 'Web App', 'Mobile', 'AI/ML']

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text">
            PROJECTS_ARCHIVE.EXE
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A showcase of my best work, demonstrating creativity, technical expertise, and problem-solving skills
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="elegant-card group"
            >
                                     {/* Interactive Project Image */}
                       <div className="relative overflow-hidden rounded-t-xl">
                         <motion.div 
                           className="w-full h-64 bg-gradient-to-br from-green-400/20 to-cyan-400/20 flex items-center justify-center"
                           whileHover={{ scale: 1.05 }}
                           transition={{ duration: 0.3 }}
                         >
                           <motion.div
                             animate={{ rotate: [0, 360] }}
                             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                           >
                             <Code2 className="w-16 h-16 text-green-400" />
                           </motion.div>
                         </motion.div>
                         <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Project Links */}
                <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                  >
                    <ExternalLink className="w-5 h-5 text-black" />
                  </motion.a>
                  <motion.a
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </motion.a>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-primary-500/90 backdrop-blur-sm text-black text-sm font-semibold rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-primary-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-white/5 text-primary-400 text-sm rounded-full border border-primary-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="group/btn flex items-center space-x-2 text-primary-500 hover:text-primary-400 transition-colors duration-300"
                >
                  <span className="font-semibold">View Project</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">More Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => !p.featured).map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="elegant-card group"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden rounded-t-xl">
                  <div className="w-full h-48 bg-gradient-to-br from-primary-500/20 to-primary-600/20 flex items-center justify-center">
                    <Code2 className="w-12 h-12 text-primary-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Project Links */}
                  <div className="absolute top-3 right-3 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors duration-300"
                    >
                      <ExternalLink className="w-4 h-4 text-black" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 bg-black/50 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-black/70 transition-colors duration-300"
                    >
                      <Github className="w-4 h-4 text-white" />
                    </motion.a>
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-1 bg-primary-500/90 backdrop-blur-sm text-black text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-4">
                  <h4 className="text-lg font-bold text-white mb-2 group-hover:text-primary-500 transition-colors duration-300">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-white/5 text-primary-400 text-xs rounded-full border border-primary-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Have a Project in Mind?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate to bring your ideas to life with cutting-edge technology and creative solutions.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Start Your Project
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

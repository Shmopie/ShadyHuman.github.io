import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Gamepad2, 
  Bot,
  Smartphone,
  Server,
  Zap,
  Shield,
  Globe
} from 'lucide-react'

const TechnicalBackground = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const technicalAreas = [
    {
      title: 'World of Warcraft Development',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
      description: '3 years of private server development',
      skills: [
        'Custom Script Systems',
        'Database Management',
        'Server Architecture',
        'Game Mechanics',
        'Player Systems',
        'Economy Systems',
        'Quest Systems',
        'PvP Systems',
        'Guild Systems',
        'Auction House'
      ],
      details: 'Extensive experience developing custom scripts and systems for WoW private servers, including player progression, economy management, and complex game mechanics.'
    },
    {
      title: 'Software Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      description: 'Advanced programming expertise',
      skills: [
        'C++ Development',
        'Object-Oriented Design',
        'Memory Management',
        'Performance Optimization',
        'Multi-threading',
        'Data Structures',
        'Algorithms',
        'System Programming',
        'Low-level Programming',
        'Cross-platform Development'
      ],
      details: 'Deep knowledge of C++ with focus on performance-critical applications, system programming, and low-level development.'
    },
    {
      title: 'Python & Automation',
      icon: Bot,
      color: 'from-green-500 to-emerald-500',
      description: 'Automation and scripting expert',
      skills: [
        'Python Development',
        'Automation Scripts',
        'Web Scraping',
        'Data Processing',
        'API Integration',
        'Task Automation',
        'Bot Development',
        'Script Optimization',
        'Testing Automation',
        'CI/CD Pipelines'
      ],
      details: 'Proficient in Python for automation, data processing, and creating efficient scripts to streamline workflows.'
    },
    {
      title: 'Gaming Development',
      icon: Gamepad2,
      color: 'from-orange-500 to-red-500',
      description: 'Game development and modding',
      skills: [
        'Game Engine Development',
        'Mod Development',
        'Game Mechanics',
        'Physics Systems',
        'AI Programming',
        'Graphics Programming',
        'Sound Systems',
        'Networking',
        'Game Optimization',
        'Cross-platform Gaming'
      ],
      details: 'Experience in game development, modding, and creating custom gaming experiences across multiple platforms.'
    },
    {
      title: 'Android Development',
      icon: Smartphone,
      color: 'from-indigo-500 to-blue-500',
      description: 'Mobile app development',
      skills: [
        'Android SDK',
        'Kotlin/Java',
        'UI/UX Design',
        'App Architecture',
        'Database Integration',
        'API Development',
        'Push Notifications',
        'App Store Deployment',
        'Performance Optimization',
        'Cross-platform Apps'
      ],
      details: 'Mobile app development experience with focus on user experience, performance, and modern Android development practices.'
    },
    {
      title: 'System Architecture',
      icon: Server,
      color: 'from-gray-500 to-slate-500',
      description: 'Complex system design',
      skills: [
        'Server Architecture',
        'Database Design',
        'API Development',
        'Microservices',
        'Load Balancing',
        'Security Implementation',
        'Scalability Design',
        'Monitoring Systems',
        'Backup Solutions',
        'Disaster Recovery'
      ],
      details: 'Experience designing and implementing complex server architectures, database systems, and scalable solutions.'
    }
  ]

  return (
    <section id="technical-background" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text pixel-glitch" data-text="Technical Background">
            Technical Background
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Diverse technical expertise spanning game development, software engineering, and system architecture
          </p>
        </motion.div>

        {/* Technical Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {technicalAreas.map((area, areaIndex) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: areaIndex * 0.1 }}
              className="elegant-card interactive-hover"
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.02 }}
              >
                <motion.div 
                  className={`w-12 h-12 rounded-lg bg-gradient-to-r ${area.color} flex items-center justify-center mr-4 relative overflow-hidden`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: [-100, 100] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  />
                  <area.icon className="w-6 h-6 text-white relative z-10" />
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 font-mono uppercase">{area.title}</h3>
                  <p className="text-sm text-gray-400 font-mono">{area.description}</p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                {area.details}
              </p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-cyan-300 font-mono uppercase tracking-wide">Key Skills:</h4>
                <div className="grid grid-cols-2 gap-2">
                  {area.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, x: -10 }}
                      animate={inView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.3, delay: areaIndex * 0.1 + skillIndex * 0.05 }}
                      className="text-xs text-gray-400 font-mono bg-white/5 px-2 py-1 rounded border border-white/10"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Experience Timeline</h3>
            <p className="text-gray-400">My journey through different technical domains</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Gamepad2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">WoW Private Server Development</h4>
                  <p className="text-green-400 font-mono text-sm mb-2">3 Years • 2020-2023</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Developed custom scripts and systems for World of Warcraft private servers, including player progression systems, 
                    economy management, quest systems, and complex game mechanics. Managed server architecture and database optimization.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Software Development & C++</h4>
                  <p className="text-green-400 font-mono text-sm mb-2">6 Years • 2018-Present</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Advanced C++ development with focus on performance-critical applications, system programming, 
                    memory management, and low-level development. Experience with multi-threading and optimization.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Python & Automation</h4>
                  <p className="text-green-400 font-mono text-sm mb-2">4 Years • 2019-Present</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Python development for automation, data processing, web scraping, and API integration. 
                    Created efficient scripts and bots to streamline workflows and improve productivity.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.4 }}
                className="flex items-start space-x-6"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Smartphone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white mb-2">Android Development</h4>
                  <p className="text-green-400 font-mono text-sm mb-2">3 Years • 2020-Present</p>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Mobile app development using Android SDK, Kotlin/Java. Focus on user experience, 
                    performance optimization, and modern Android development practices.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Technical Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 text-white">Technical Philosophy</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <Zap className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Performance First</h4>
                <p className="text-gray-400 text-sm">
                  Optimize for speed and efficiency in every system I build
                </p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Robust Architecture</h4>
                <p className="text-gray-400 text-sm">
                  Design scalable and maintainable systems that grow with your needs
                </p>
              </div>
              <div className="text-center">
                <Globe className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">Cross-Platform</h4>
                <p className="text-gray-400 text-sm">
                  Build solutions that work seamlessly across different platforms
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechnicalBackground

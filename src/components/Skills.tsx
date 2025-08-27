import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Zap,
  Globe,
  Shield,
  GitBranch
} from 'lucide-react'

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript (ES6+)', level: 95 },
        { name: 'HTML5 & CSS3', level: 98 },
        { name: 'Next.js', level: 85 },
        { name: 'Vue.js', level: 80 },
        { name: 'Tailwind CSS', level: 92 },
        { name: 'Sass/SCSS', level: 88 },
        { name: 'Redux/Zustand', level: 85 },
        { name: 'GraphQL', level: 82 }
      ]
    },
    {
      title: 'Backend Development',
      icon: Database,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'Node.js', level: 90 },
        { name: 'Express.js', level: 88 },
        { name: 'Python', level: 85 },
        { name: 'Django', level: 80 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 82 },
        { name: 'Redis', level: 78 },
        { name: 'RESTful APIs', level: 92 },
        { name: 'Microservices', level: 80 },
        { name: 'Serverless', level: 75 }
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Docker', level: 85 },
        { name: 'Kubernetes', level: 75 },
        { name: 'AWS', level: 80 },
        { name: 'Vercel', level: 90 },
        { name: 'Netlify', level: 88 },
        { name: 'Git & GitHub', level: 95 },
        { name: 'CI/CD', level: 85 },
        { name: 'Webpack/Vite', level: 88 },
        { name: 'Testing (Jest)', level: 82 },
        { name: 'Monitoring', level: 78 }
      ]
    },
    {
      title: 'Design & UX',
      icon: Palette,
      color: 'from-orange-500 to-red-500',
      skills: [
        { name: 'Figma', level: 85 },
        { name: 'Adobe XD', level: 80 },
        { name: 'UI/UX Design', level: 88 },
        { name: 'Responsive Design', level: 95 },
        { name: 'Accessibility', level: 85 },
        { name: 'Design Systems', level: 82 },
        { name: 'Prototyping', level: 80 },
        { name: 'User Research', level: 75 },
        { name: 'Animation', level: 78 },
        { name: 'Brand Identity', level: 70 }
      ]
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'from-indigo-500 to-blue-500',
      skills: [
        { name: 'React Native', level: 85 },
        { name: 'Progressive Web Apps', level: 90 },
        { name: 'Mobile-First Design', level: 92 },
        { name: 'App Store Deployment', level: 80 },
        { name: 'Mobile Performance', level: 85 },
        { name: 'Cross-Platform', level: 88 },
        { name: 'Native APIs', level: 75 },
        { name: 'Push Notifications', level: 82 },
        { name: 'Offline Support', level: 78 },
        { name: 'Mobile Testing', level: 80 }
      ]
    },
    {
      title: 'Performance & Security',
      icon: Shield,
      color: 'from-yellow-500 to-orange-500',
      skills: [
        { name: 'Web Performance', level: 90 },
        { name: 'SEO Optimization', level: 85 },
        { name: 'Security Best Practices', level: 88 },
        { name: 'OWASP Guidelines', level: 82 },
        { name: 'Performance Monitoring', level: 85 },
        { name: 'Code Optimization', level: 90 },
        { name: 'Lighthouse', level: 88 },
        { name: 'Bundle Optimization', level: 85 },
        { name: 'Caching Strategies', level: 82 },
        { name: 'CDN Management', level: 80 }
      ]
    }
  ]

  const additionalSkills = [
    'Agile/Scrum', 'Project Management', 'Team Leadership', 'Code Review',
    'Technical Writing', 'Mentoring', 'Problem Solving', 'System Architecture',
    'API Design', 'Database Design', 'Cloud Architecture', 'Machine Learning Basics',
    'Data Visualization', 'E-commerce', 'Payment Integration', 'Analytics',
    'A/B Testing', 'User Analytics', 'Conversion Optimization', 'Internationalization'
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text">
            SKILLS_DATABASE.JSON
          </h2>
          <p className="text-xl text-cyan-300 max-w-3xl mx-auto font-mono">
            <span className="text-green-400">$</span> cat skills.json | jq '.technologies[]'
          </p>
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
                           <motion.div
                 key={category.title}
                 initial={{ opacity: 0, y: 30 }}
                 animate={inView ? { opacity: 1, y: 0 } : {}}
                 transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                 className="elegant-card"
               >
                                   <motion.div 
                       className="flex items-center mb-6"
                       whileHover={{ scale: 1.02 }}
                     >
                       <motion.div 
                         className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mr-4 relative overflow-hidden`}
                         whileHover={{ rotate: 360 }}
                         transition={{ duration: 0.6 }}
                       >
                         <motion.div
                           className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                           animate={{ x: [-100, 100] }}
                           transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                         />
                         <category.icon className="w-6 h-6 text-white relative z-10" />
                       </motion.div>
                       <h3 className="text-xl font-bold text-green-400 font-mono uppercase">{category.title}</h3>
                     </motion.div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-cyan-300 font-mono">{skill.name}</span>
                      <span className="text-sm text-green-400 font-mono">[{skill.level}%]</span>
                    </div>
                    <div className="retro-progress">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: categoryIndex * 0.1 + skillIndex * 0.05 }}
                        className="retro-progress-bar"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-4">Additional Expertise</h3>
            <p className="text-gray-400">Technologies and methodologies I work with</p>
          </div>
          
          <div className="glass-effect rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {additionalSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.02 }}
                  className="text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors duration-300"
                >
                  <span className="text-sm text-gray-300 font-medium">{skill}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 glass-effect rounded-xl">
            <Globe className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Full-Stack Expertise</h4>
            <p className="text-gray-400">
              End-to-end development from database design to user interface
            </p>
          </div>
          
          <div className="text-center p-6 glass-effect rounded-xl">
            <Zap className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Performance Focus</h4>
            <p className="text-gray-400">
              Optimized applications that load fast and run smoothly
            </p>
          </div>
          
          <div className="text-center p-6 glass-effect rounded-xl">
            <GitBranch className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h4 className="text-xl font-bold text-white mb-2">Modern Workflow</h4>
            <p className="text-gray-400">
              Agile development with version control and CI/CD pipelines
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

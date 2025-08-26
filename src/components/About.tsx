import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { User, MapPin, Calendar, Award, Code2, Palette, Zap } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const stats = [
    { icon: Code2, label: 'Projects Completed', value: '50+' },
    { icon: Calendar, label: 'Years Experience', value: '6' },
    { icon: Award, label: 'Awards Won', value: '12' },
    { icon: Zap, label: 'Happy Clients', value: '30+' }
  ]

  const interests = [
    { icon: Code2, title: 'Coding', description: 'Building innovative web solutions' },
    { icon: Palette, title: 'Design', description: 'Creating beautiful user experiences' },
    { icon: Zap, title: 'Performance', description: 'Optimizing for speed and efficiency' }
  ]

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Passionate web developer with a love for creating exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left Column - Image and Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Image Placeholder */}
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-primary-500 to-primary-600 p-1">
                <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
                  <User className="w-32 h-32 text-primary-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center animate-float">
                <span className="text-black font-bold text-lg">24</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="text-center p-4 glass-effect rounded-lg"
                >
                  <stat.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                Who I Am
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm Shady Hayman, a 24-year-old web developer with 6 years of experience crafting 
                digital experiences that matter. My journey in web development started with curiosity 
                and has evolved into a passion for creating innovative, user-centric applications.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                I specialize in modern web technologies and believe in writing clean, maintainable code 
                that not only works flawlessly but also provides an exceptional user experience. 
                Every project I work on is an opportunity to push boundaries and create something extraordinary.
              </p>
            </div>

            {/* Personal Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-primary-500" />
                <span className="text-gray-300">Based in Cairo, Egypt</span>
              </div>
              <div className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-primary-500" />
                <span className="text-gray-300">Available for new opportunities</span>
              </div>
              <div className="flex items-center space-x-3">
                <Award className="w-5 h-5 text-primary-500" />
                <span className="text-gray-300">Certified Full-Stack Developer</span>
              </div>
            </div>

            {/* Interests */}
            <div>
              <h4 className="text-xl font-semibold mb-4 text-white">What I Love</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="p-4 glass-effect rounded-lg text-center"
                  >
                    <interest.icon className="w-8 h-8 text-primary-500 mx-auto mb-2" />
                    <h5 className="font-semibold text-white mb-1">{interest.title}</h5>
                    <p className="text-sm text-gray-400">{interest.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Ready to Build Something Amazing?
            </h3>
            <p className="text-gray-300 mb-6">
              Let's collaborate to bring your vision to life with cutting-edge web technologies 
              and creative solutions that stand out in the digital landscape.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-primary-500 to-primary-600 text-black font-semibold px-8 py-3 rounded-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all duration-300"
            >
              Let's Talk
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About


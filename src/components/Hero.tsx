import { motion } from 'framer-motion'
import { ChevronDown, ArrowRight, Github, Linkedin, Mail } from 'lucide-react'

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(22,163,74,0.1),transparent_50%)]" />
      
      {/* Grid Background */}
      <div className="absolute inset-0 retro-grid opacity-30" />
      
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 left-20 w-32 h-32 border-2 border-green-400 rotate-45 opacity-30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [45, 50, 45],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileHover={{ 
          scale: 1.2,
          opacity: 0.6
        }}
      />
      <motion.div 
        className="absolute top-40 right-32 w-24 h-24 border-2 border-green-500 opacity-30"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, 90, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2
        }}
        whileHover={{ 
          scale: 1.3,
          opacity: 0.6
        }}
      />
      <motion.div 
        className="absolute bottom-32 left-32 w-40 h-40 border-2 border-green-600 rotate-12 opacity-30"
        animate={{ 
          y: [0, -15, 0],
          rotate: [12, -12, 12],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4
        }}
        whileHover={{ 
          scale: 1.1,
          opacity: 0.6
        }}
      />
      
      {/* Code Elements */}
      <motion.div
        className="absolute top-1/4 right-1/4 text-green-400 font-mono text-xs opacity-40"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 3, repeat: Infinity }}
        whileHover={{ opacity: 1, scale: 1.1 }}
      >
        function createPortfolio()
      </motion.div>
      <motion.div
        className="absolute bottom-1/4 left-1/4 text-green-500 font-mono text-xs opacity-40"
        animate={{ opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        whileHover={{ opacity: 1, scale: 1.1 }}
      >
        return "Amazing Developer"
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mb-8"
          >
            <div className="text-green-400 font-mono text-lg mb-4 retro-typing inline-block">
              Creating amazing web experiences...
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-5xl md:text-8xl lg:text-9xl mb-6 elegant-title"
          >
            <span className="gradient-text block">SHADY</span>
            <span className="gradient-text block">HAYMAN</span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-2xl md:text-4xl text-gray-300 mb-8 font-mono uppercase tracking-widest pixel-text"
          >
            Full Stack Web Developer
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed"
          >
            <div className="elegant-glass p-6 rounded-lg">
              Passionate about creating beautiful, functional, and user-friendly web applications. 
              With 6 years of experience in modern web technologies, I bring ideas to life through 
              clean code and innovative design solutions.
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToAbout}
            className="elegant-button flex items-center space-x-2"
          >
            <span>Explore My Work</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="elegant-button-outline flex items-center space-x-2"
          >
            <span>Download Resume</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="flex justify-center space-x-8 mb-24"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/shadyhayman"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 elegant-glass rounded-lg flex items-center justify-center text-green-400 hover:text-green-300 transition-colors duration-300 retro-pulse"
          >
            <Github size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="https://linkedin.com/in/shadyhayman"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 elegant-glass rounded-lg flex items-center justify-center text-green-400 hover:text-green-300 transition-colors duration-300 retro-pulse"
            style={{ animationDelay: '0.5s' }}
          >
            <Linkedin size={24} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            href="mailto:mistershmope@gmail.com"
            className="w-12 h-12 elegant-glass rounded-lg flex items-center justify-center text-green-400 hover:text-green-300 transition-colors duration-300 retro-pulse"
            style={{ animationDelay: '1s' }}
          >
            <Mail size={24} />
          </motion.a>
        </motion.div>
      </div>

      {/* Scroll Indicator - Moved outside the main content div */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.button
          onClick={scrollToAbout}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="elegant-glass p-3 rounded-full text-green-400 hover:text-green-300 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </motion.button>
        <div className="text-gray-400 font-mono text-sm mt-2 text-center">
          Scroll Down
        </div>
      </motion.div>
    </section>
  )
}

export default Hero

import { motion } from 'framer-motion'
import { Code2 } from 'lucide-react'

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50 retro-grid">
                <div className="text-center elegant-glass p-12 rounded-lg">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="w-20 h-20 mx-auto retro-pulse">
            <Code2 className="w-20 h-20 text-green-400 mx-auto" />
          </div>
        </motion.div>
        
                       <motion.h1
                 initial={{ y: 20, opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.2, duration: 0.5 }}
                 className="text-4xl font-bold gradient-text mb-4 elegant-title"
               >
                 SHADY HAYMAN
               </motion.h1>
        
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-green-400 text-lg mb-8 font-mono uppercase tracking-wider"
        >
          &gt; INITIALIZING_SYSTEM.EXE
        </motion.p>
        
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 0.6, duration: 1.5, ease: "easeInOut" }}
          className="retro-progress max-w-sm mx-auto"
        >
          <div className="retro-progress-bar w-full" />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-cyan-300 font-mono text-sm mt-4"
        >
          Loading portfolio assets...
        </motion.div>
      </div>
    </div>
  )
}

export default LoadingScreen

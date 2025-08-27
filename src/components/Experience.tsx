import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Calendar, MapPin, Building, Award, Users, TrendingUp } from 'lucide-react'

const Experience = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const experiences = [
    {
      title: 'Senior Full-Stack Developer',
      company: 'TechCorp Solutions',
      location: 'Cairo, Egypt',
      period: '2022 - Present',
      description: 'Leading development of enterprise-level web applications with React, Node.js, and cloud technologies. Mentoring junior developers and implementing best practices.',
      achievements: [
        'Led development of 5+ major client projects',
        'Improved application performance by 40%',
        'Mentored 8 junior developers',
        'Implemented CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      title: 'Frontend Developer',
      company: 'Digital Innovations Ltd',
      location: 'Cairo, Egypt',
      period: '2020 - 2022',
      description: 'Developed responsive web applications and e-commerce platforms. Collaborated with design and backend teams to deliver high-quality user experiences.',
      achievements: [
        'Built 10+ responsive web applications',
        'Reduced page load times by 35%',
        'Implemented accessibility features for better UX',
        'Collaborated with 15+ team members across departments'
      ],
      technologies: ['React', 'Vue.js', 'JavaScript', 'CSS3', 'REST APIs', 'Git']
    },
    {
      title: 'Junior Web Developer',
      company: 'StartUp Ventures',
      location: 'Cairo, Egypt',
      period: '2018 - 2020',
      description: 'Started career developing websites and web applications. Learned modern web technologies and best practices in a fast-paced startup environment.',
      achievements: [
        'Developed 20+ client websites',
        'Learned modern web development stack',
        'Contributed to open-source projects',
        'Gained experience with agile methodologies'
      ],
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'PHP', 'MySQL', 'WordPress']
    }
  ]

  const achievements = [
    {
      icon: Award,
      title: 'Best Developer Award',
      description: 'Recognized for outstanding performance and innovation in web development',
      year: '2023'
    },
    {
      icon: Users,
      title: 'Team Leadership',
      description: 'Successfully led development teams of 5+ members on multiple projects',
      year: '2022'
    },
    {
      icon: TrendingUp,
      title: 'Performance Excellence',
      description: 'Achieved 40% improvement in application performance across projects',
      year: '2021'
    }
  ]

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animated-gradient-text pixel-glitch" data-text="Work Experience">
            Work Experience
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            6 years of professional experience building innovative web solutions and leading development teams
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative mb-16">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600 transform md:-translate-x-1/2" />
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary-500 rounded-full border-4 border-black transform md:-translate-x-1/2 z-10" />
                
                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="glass-effect rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">{experience.title}</h3>
                        <div className="flex items-center space-x-4 text-sm text-gray-400">
                          <div className="flex items-center space-x-1">
                            <Building className="w-4 h-4" />
                            <span>{experience.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{experience.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-primary-500 text-sm font-mono">
                        <Calendar className="w-4 h-4" />
                        <span>{experience.period}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {experience.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-primary-500 mb-2">Key Achievements:</h4>
                      <ul className="space-y-1">
                        {experience.achievements.map((achievement, achievementIndex) => (
                          <li key={achievementIndex} className="text-sm text-gray-400 flex items-start space-x-2">
                            <span className="text-primary-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-sm font-semibold text-primary-500 mb-2">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-white/5 text-primary-400 text-xs rounded-full border border-primary-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="text-center p-6 glass-effect rounded-xl hover:bg-white/10 transition-all duration-300"
              >
                <achievement.icon className="w-12 h-12 text-primary-500 mx-auto mb-4" />
                <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                <p className="text-gray-400 text-sm mb-3">{achievement.description}</p>
                <span className="text-primary-500 text-sm font-mono">{achievement.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills Growth */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center"
        >
          <div className="glass-effect rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Continuous Growth & Learning
            </h3>
            <p className="text-gray-300 mb-6">
              Over 6 years, I've evolved from a junior developer to a senior full-stack developer, 
              constantly learning new technologies and methodologies to deliver better solutions.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-white mb-2">Technical Growth</h4>
                <p className="text-sm text-gray-400">
                  Mastered modern web technologies and best practices for scalable applications
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Leadership Skills</h4>
                <p className="text-sm text-gray-400">
                  Developed team leadership abilities and project management expertise
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-2">Problem Solving</h4>
                <p className="text-sm text-gray-400">
                  Enhanced analytical skills to tackle complex technical challenges effectively
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience


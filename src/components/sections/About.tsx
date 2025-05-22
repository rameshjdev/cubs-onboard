import { GraduationCap as Education, Award, Heart, Shield, CheckCircle } from 'lucide-react';
import { Credential } from '../common/Credential';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="relative py-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">About Cubs Onboard</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Nurturing Young Minds with Love
          </h2>
          <p className="text-gray-600 text-lg">
            A safe, loving environment where children can learn, grow, and thrive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Collage-style image display with overlapping frames */}
            <div className="relative h-[500px] w-full">
              {/* Main large image */}
              <motion.div 
                initial={{ rotate: -5 }}
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute top-0 left-0 w-4/5 h-3/5 z-20 overflow-hidden rounded-xl shadow-2xl border-4 border-white"
              >
                <img
                  src="https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg"
                  alt="Children playing with educational toys"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Overlapping image 1 */}
              <motion.div 
                initial={{ rotate: 5 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute bottom-0 right-0 w-3/5 h-2/5 z-10 overflow-hidden rounded-xl shadow-2xl border-4 border-white"
              >
                <img
                  src="https://images.pexels.com/photos/3662667/pexels-photo-3662667.jpeg"
                  alt="Child painting with colorful paints"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Overlapping image 2 */}
              <motion.div 
                initial={{ rotate: -8 }}
                whileHover={{ rotate: 0, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="absolute bottom-1/4 left-1/4 w-2/5 h-2/5 z-30 overflow-hidden rounded-xl shadow-2xl border-4 border-white"
              >
                <img
                  src="https://images.pexels.com/photos/8535214/pexels-photo-8535214.jpeg"
                  alt="Caregiver reading with children"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-2/3 h-2/3 bg-primary/20 rounded-2xl -z-10 transform rotate-3 transition-transform duration-500 group-hover:rotate-6" />
              <div className="absolute -top-6 -left-6 w-2/3 h-2/3 bg-accent/20 rounded-2xl -z-10 transform -rotate-3 transition-transform duration-500 group-hover:-rotate-6" />
              
              {/* Polaroid-style captions */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white px-8 py-3 rounded-xl shadow-lg z-40">
                <p className="text-primary font-medium">Creating joyful learning experiences</p>
              </div>
              
              {/* Decorative elements - paper clips and pins */}
              <div className="absolute top-5 left-5 w-6 h-6 rounded-full bg-yellow-400 z-40 shadow-md"></div>
              <div className="absolute bottom-1/3 right-10 w-8 h-3 bg-gray-400 rounded-sm transform rotate-45 z-40 shadow-sm"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Meet Sarah Johnson</h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Hi, I'm Sarah Johnson, a licensed childcare provider with over 10 years
                of experience and a degree in Early Childhood Education.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My home daycare, Cubs Onboard, was born from my passion for creating
                a nurturing environment where children can thrive. I believe that every
                child deserves individualized care and attention in a setting that
                feels like a second home.
              </p>
            </div>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-primary" />
                <span>Our Philosophy</span>
              </h4>
              <p className="text-gray-600 pl-7">
                We believe in learning through play, fostering creativity, and building 
                social skills in a safe, loving environment that feels like home.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-6 mt-8">
              <motion.div 
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="backdrop-blur-md bg-white/90 p-6 rounded-xl shadow-lg border border-white/20"
              >
                <Credential
                  icon={<Education className="w-8 h-8 text-primary" />}
                  text="BA in Early Childhood Education"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="backdrop-blur-md bg-white/90 p-6 rounded-xl shadow-lg border border-white/20"
              >
                <Credential
                  icon={<Award className="w-8 h-8 text-primary" />}
                  text="Licensed Childcare Provider"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="backdrop-blur-md bg-white/90 p-6 rounded-xl shadow-lg border border-white/20"
              >
                <Credential
                  icon={<Heart className="w-8 h-8 text-primary" />}
                  text="CPR & First Aid Certified"
                />
              </motion.div>
              <motion.div 
                whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="backdrop-blur-md bg-white/90 p-6 rounded-xl shadow-lg border border-white/20"
              >
                <Credential
                  icon={<Shield className="w-8 h-8 text-primary" />}
                  text="Child Development Training"
                />
              </motion.div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="mt-8 bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 font-medium"
            >
              <span>Schedule a Visit</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
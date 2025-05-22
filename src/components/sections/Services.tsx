import { Baby, Users, School, ChevronRight, X, Download } from 'lucide-react';
import { ServiceCard } from '../cards/ServiceCard';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

// Define a type for our service data
type ServiceInfo = {
  icon: JSX.Element;
  title: string;
  description: string;
  features: string[];
  price: string;
  ageRange: string;
  capacity: string;
  detailedDescription?: string;
};

export const Services = () => {
  // State to track which service modal is open (null means no modal is open)
  const [activeModal, setActiveModal] = useState<number | null>(null);
  // State to track if enrollment form modal is open
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);

  // Our services data
  const services: ServiceInfo[] = [
    {
      icon: <Baby className="w-12 h-12" />,
      title: "Infant Care",
      description: "Specialized care for babies 6 weeks to 18 months with individualized attention and development focus",
      features: [
        "Personalized feeding schedules",
        "Tummy time and motor skills",
        "Sensory play experiences",
        "Cozy nap area"
      ],
      price: "From $55 per day",
      ageRange: "6 weeks - 18 months",
      capacity: "6 infants",
      detailedDescription: "Our infant care program provides a nurturing environment where your baby can thrive. Our experienced caregivers follow your baby's individual schedule and development pace. We create a sensory-rich environment with age-appropriate toys and activities that stimulate cognitive and physical development. Daily reports keep you informed about feedings, naps, diaper changes, and special moments."
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "Toddler Care",
      description: "Engaging activities for toddlers 18 months to 3 years focused on exploration and social development",
      features: [
        "Toilet training support",
        "Language development",
        "Imaginative play",
        "Social skills development"
      ],
      price: "From $50 per day",
      ageRange: "18 months - 3 years",
      capacity: "8 toddlers",
      detailedDescription: "Our toddler program is designed for curious minds and busy bodies! We focus on developing independence, social skills, and early learning concepts through play-based activities. Our structured daily routine includes circle time, art projects, outdoor play, and quiet time. We work closely with parents on toilet training and other developmental milestones, ensuring a consistent approach between home and daycare."
    },
    {
      icon: <School className="w-12 h-12" />,
      title: "Preschool Care",
      description: "Pre-kindergarten program for children 3-5 years preparing them for success in school and beyond",
      features: [
        "Early literacy and numeracy",
        "Arts and crafts projects",
        "Science exploration",
        "Kindergarten readiness"
      ],
      price: "From $45 per day",
      ageRange: "3-5 years",
      capacity: "10 children",
      detailedDescription: "Our preschool program prepares children for kindergarten through a balanced curriculum that develops academic, social, and emotional skills. Children engage in structured learning activities covering early literacy, math concepts, science exploration, and creative arts. Our classroom environment encourages independence, problem-solving, and collaboration. Regular assessments track your child's progress, and we provide quarterly parent-teacher conferences to discuss development."
    }
  ];

  return (
    <section id="services" className="relative py-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-yellow-100/20 rounded-full blur-3xl" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 border-4 border-primary/20 rounded-full" />
      <div className="absolute bottom-20 left-20 w-16 h-16 border-4 border-accent/20 rounded-full" />
      <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-primary/30 rounded-full" />
      <div className="absolute bottom-1/3 left-1/3 w-12 h-12 bg-accent/30 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Our Programs</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Tailored Childcare Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Specialized programs designed to nurture your child's unique development journey
          </p>
        </motion.div>
        
        {/* Service Filters - Modern Touch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8 mb-12"
        >
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onClick={() => setActiveModal(index)}
              className="cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-xl"
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                features={service.features}
                price={service.price}
                ageRange={service.ageRange}
                capacity={service.capacity}
              />
            </motion.div>
          ))}
        </div>

        {/* Modern Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <div className="relative inline-block">
            <motion.div
              className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-primary opacity-70 blur-lg rounded-2xl"
              animate={{ 
                opacity: [0.5, 0.8, 0.5],
                scale: [0.98, 1.01, 0.98]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            />
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="relative group bg-white px-8 py-4 rounded-2xl shadow-xl transition-all duration-500 inline-flex items-center gap-3"
              onClick={() => setShowEnrollmentModal(true)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <span className="relative text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Enroll Your Child</span>
              <ChevronRight className="relative w-5 h-5 text-primary group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </div>
          
          <p className="mt-4 text-gray-500">Limited spots available - secure your child's place today</p>
        </motion.div>
      </div>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {activeModal !== null && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
            >
              {/* Close button */}
              <button 
                onClick={() => setActiveModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Modal header with gradient */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    {services[activeModal].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">{services[activeModal].title}</h3>
                    <p className="opacity-90">{services[activeModal].ageRange}</p>
                  </div>
                </div>
              </div>
              
              {/* Modal content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Program Overview</h4>
                  <p className="text-gray-600">{services[activeModal].detailedDescription}</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">What We Offer</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {services[activeModal].features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <div className="mt-1 bg-primary/10 p-1 rounded-full">
                          <ChevronRight className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Pricing</h4>
                    <p className="text-lg font-semibold text-gray-900">{services[activeModal].price}</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Group Size</h4>
                    <p className="text-lg font-semibold text-gray-900">{services[activeModal].capacity}</p>
                  </div>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Schedule a Tour</span>
                  <ChevronRight className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Enrollment Form Modal */}
      <AnimatePresence>
        {showEnrollmentModal && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", damping: 20, stiffness: 300 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl overflow-hidden relative"
            >
              {/* Close button */}
              <button 
                onClick={() => setShowEnrollmentModal(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors z-10"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
              
              {/* Modal header with gradient */}
              <div className="bg-gradient-to-r from-primary to-accent p-6 text-white">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-full">
                    <Users className="w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Enrollment Application</h3>
                    <p className="opacity-90">Join the Cubs Onboard family</p>
                  </div>
                </div>
              </div>
              
              {/* Modal content */}
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Application Process</h4>
                  <p className="text-gray-600 mb-4">
                    Thank you for considering Cubs Onboard Daycare for your child's early education and care. Our enrollment form contains all necessary information to get started.
                  </p>
                  <p className="text-gray-600 mb-4">
                    The enrollment form includes sections for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>Child's information (name, date of birth, address)</li>
                    <li>Parent/guardian contact details</li>
                    <li>Emergency contacts and authorized pickup persons</li>
                    <li>Medical information and allergies</li>
                    <li>Schedule selection and program preferences</li>
                    <li>Consent forms and agreements</li>
                  </ul>
                </div>
                
                <div className="mb-6 p-4 bg-primary/10 rounded-lg">
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">How to Submit</h4>
                  <ol className="list-decimal pl-5 space-y-1 text-gray-600">
                    <li>Download the enrollment form PDF</li>
                    <li>Complete all required fields electronically or print and fill by hand</li>
                    <li>Sign all consent sections</li>
                    <li>Return the completed form via email to <span className="font-medium">enrollment@cubsonboard.com</span> or in person at our center</li>
                    <li>Our staff will contact you within 2 business days to confirm receipt and discuss next steps</li>
                  </ol>
                </div>
                
                <a 
                  href="src/assets/forms/enrollment-form.pdf"
                  download="enrollment-form.pdf"
                  className="w-full bg-gradient-to-r from-primary to-accent text-white font-medium py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mb-4"
                >
                  <Download className="w-5 h-5" />
                  <span>Download Enrollment Form</span>
                </a>
                
                <p className="text-sm text-gray-500 text-center">
                  Questions about the enrollment process? Contact our admissions team at (555) 123-4567 or <span className="text-primary">admissions@cubsonboard.com</span>
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
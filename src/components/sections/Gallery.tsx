import { useState, useRef } from 'react';
import { SectionHeader } from '../common/SectionHeader';
import { Clock, Users, Star, Heart, ChevronRight, ArrowRight, ArrowLeft, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryData {
  image: string;
  title: string;
  description: string;
  stats: {
    time: string;
    capacity: string;
    rating: number;
    likes: number;
  };
  features: string[];
}

export const Gallery = () => {
  const galleryData: GalleryData[] = [
    {
      image: "https://images.pexels.com/photos/3933021/pexels-photo-3933021.jpeg",
      title: "Indoor Play Area",
      description: "A spacious, safe environment designed for active play and physical development. Features age-appropriate equipment and soft play areas.",
      stats: {
        time: "Daily 9AM-4PM",
        capacity: "Up to 15 children",
        rating: 4.9,
        likes: 128
      },
      features: ["Soft Play Equipment", "Safety Mats", "Age-Appropriate Toys", "Daily Sanitization"]
    },
    {
      image: "https://images.pexels.com/photos/296301/pexels-photo-296301.jpeg",
      title: "Cozy Reading Corner",
      description: "A quiet space dedicated to literacy and imagination. Stocked with diverse books and comfortable seating for story time.",
      stats: {
        time: "Daily 10AM-3PM",
        capacity: "Up to 8 children",
        rating: 4.8,
        likes: 95
      },
      features: ["Comfortable Seating", "Diverse Book Collection", "Reading Lights", "Story Time Schedule"]
    },
    {
      image: "https://images.pexels.com/photos/8612967/pexels-photo-8612967.jpeg",
      title: "Arts & Crafts Station",
      description: "Creative space for artistic expression and fine motor skill development. Regular art projects and seasonal crafts.",
      stats: {
        time: "Daily 11AM-2PM",
        capacity: "Up to 10 children",
        rating: 4.7,
        likes: 112
      },
      features: ["Art Supplies", "Project Tables", "Display Area", "Wash Stations"]
    },
    {
      image: "https://images.pexels.com/photos/296307/pexels-photo-296307.jpeg",
      title: "Backyard Play Area",
      description: "Outdoor space for physical activity and nature exploration. Includes playground equipment and garden areas.",
      stats: {
        time: "Weather Permitting",
        capacity: "Up to 20 children",
        rating: 4.9,
        likes: 156
      },
      features: ["Playground Equipment", "Garden Area", "Shaded Spaces", "Safety Fencing"]
    },
    {
      image: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg",
      title: "Quiet Nap Area",
      description: "Peaceful environment for rest and relaxation. Individual sleeping spaces with proper ventilation and monitoring.",
      stats: {
        time: "Daily 1PM-3PM",
        capacity: "Up to 12 children",
        rating: 4.8,
        likes: 89
      },
      features: ["Individual Cots", "Soft Lighting", "White Noise", "Temperature Control"]
    },
    {
      image: "https://images.pexels.com/photos/3933025/pexels-photo-3933025.jpeg",
      title: "Learning Activities",
      description: "Structured learning environment for cognitive development. Age-appropriate educational materials and activities.",
      stats: {
        time: "Daily 9AM-4PM",
        capacity: "Up to 15 children",
        rating: 4.9,
        likes: 142
      },
      features: ["Educational Toys", "Learning Materials", "Activity Stations", "Progress Tracking"]
    }
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  
  const handlePrev = () => {
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === 0 ? galleryData.length - 1 : activeIndex - 1);
    }
  };
  
  const handleNext = () => {
    if (activeIndex !== null) {
      setActiveIndex(activeIndex === galleryData.length - 1 ? 0 : activeIndex + 1);
    }
  };
  
  const closeModal = () => {
    setActiveIndex(null);
  };

  return (
    <section id="gallery" className="relative py-24 overflow-hidden">
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
      
      <div className="container mx-auto px-4 relative z-10" ref={galleryRef}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <SectionHeader
            title="Our Daycare Environment"
            subtitle="Explore our thoughtfully designed spaces that nurture growth and development"
          />
        </motion.div>

        {/* Gallery Filter Tabs - Modern Touch */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mt-8 mb-12"
        >
        </motion.div>

        {/* Modern Gallery Grid with Hover Effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {galleryData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              onHoverStart={() => setHoveredIndex(index)}
              onHoverEnd={() => setHoveredIndex(null)}
              onClick={() => setActiveIndex(index)}
              className="cursor-pointer"
            >
              <div className="h-full backdrop-blur-md bg-white/90 rounded-2xl shadow-xl hover:shadow-2xl border border-white/20 overflow-hidden transition-all duration-500">
                {/* Image Container with Overlay */}
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80" />
                  
                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-primary shadow-lg">
                    Featured Space
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                    <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                    <div className="flex items-center gap-4 text-white/90 text-sm">
                      <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{item.stats.time}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Users className="w-4 h-4" />
                        <span>{item.stats.capacity}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* View Details Button - Appears on Hover */}
                  <motion.div 
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button
                      initial={{ scale: 0.8 }}
                      animate={{ scale: hoveredIndex === index ? 1 : 0.8 }}
                      className="bg-white/90 backdrop-blur-md text-primary px-5 py-2.5 rounded-full font-medium flex items-center gap-2 shadow-xl"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Stats with Animated Bars */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex items-center gap-1.5">
                      <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      <div className="flex flex-col">
                        <span className="text-gray-800 font-semibold">{item.stats.rating}</span>
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-yellow-400 rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${(item.stats.rating / 5) * 100}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Heart className="w-5 h-5 text-primary" />
                      <div className="flex flex-col">
                        <span className="text-gray-800">{item.stats.likes}</span>
                        <div className="w-16 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-primary rounded-full"
                            initial={{ width: 0 }}
                            whileInView={{ width: `${Math.min((item.stats.likes / 200) * 100, 100)}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Description with Truncation */}
                  <p className="text-gray-600 mb-5 line-clamp-2">{item.description}</p>

                  {/* Features with Improved Styling */}
                  <div className="space-y-2">
                    {item.features.slice(0, 3).map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                        <span>{feature}</span>
                      </div>
                    ))}
                    {item.features.length > 3 && (
                      <div className="text-sm text-primary font-medium mt-1">+{item.features.length - 3} more features</div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modern Call to Action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
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
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500" />
              <span className="relative text-lg font-semibold text-gray-800 group-hover:text-white transition-colors duration-300">Schedule a Tour</span>
              <ChevronRight className="relative w-5 h-5 text-primary group-hover:text-white transform group-hover:translate-x-1 transition-all duration-300" />
            </motion.button>
          </div>
          
          <p className="mt-4 text-gray-500">Experience our spaces in person and see why families love us</p>
        </motion.div>
      </div>
      
      {/* Fullscreen Modal for Gallery Items */}
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative bg-white rounded-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm p-2 rounded-full text-gray-800 hover:text-primary"
                onClick={closeModal}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              {/* Navigation Buttons */}
              <button 
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:text-primary shadow-lg"
                onClick={handlePrev}
              >
                <ArrowLeft className="h-6 w-6" />
              </button>
              
              <button 
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm p-3 rounded-full text-gray-800 hover:text-primary shadow-lg"
                onClick={handleNext}
              >
                <ArrowRight className="h-6 w-6" />
              </button>
              
              <div className="grid md:grid-cols-2">
                {/* Image Side */}
                <div className="relative h-[300px] md:h-[600px]">
                  <img 
                    src={galleryData[activeIndex].image} 
                    alt={galleryData[activeIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent md:hidden" />
                </div>
                
                {/* Content Side */}
                <div className="p-8 max-h-[600px] overflow-y-auto">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">{galleryData[activeIndex].title}</h2>
                  
                  <div className="flex items-center gap-6 mb-6">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{galleryData[activeIndex].stats.time}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Users className="w-5 h-5 text-primary" />
                      <span className="text-gray-700">{galleryData[activeIndex].stats.capacity}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-8">{galleryData[activeIndex].description}</p>
                  
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-4">Features & Amenities</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {galleryData[activeIndex].features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                        <span className="font-semibold">{galleryData[activeIndex].stats.rating}</span>
                      </div>
                      <span className="text-gray-500">rating</span>
                    </div>
                    
                    <button className="bg-gradient-to-r from-primary to-accent text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2">
                      <span>Book a Visit</span>
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
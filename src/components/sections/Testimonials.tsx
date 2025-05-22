import { Star, Quote, ChevronRight, ChevronLeft, X, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  rating: number;
  image: string;
}

interface ShareExperienceForm {
  name: string;
  email: string;
  childAge: string;
  rating: number | null;
  experience: string;
}

const TestimonialCard = ({ quote, author, role, rating, image }: TestimonialProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="group relative bg-white p-8 md:p-10 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 border border-gray-100"
  >
    {/* Decorative elements */}
    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 opacity-70"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-accent/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2 opacity-70"></div>
    
    <div className="relative z-10">
      <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
        <div className="w-20 h-20 rounded-2xl overflow-hidden ring-4 ring-primary/10 shadow-md transform group-hover:scale-105 transition-all duration-500">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="text-xl font-bold text-gray-900">{author}</h4>
          <p className="text-gray-600 text-sm mb-3">{role}</p>
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="relative">
        <Quote className="w-10 h-10 text-primary/20 absolute -top-3 -left-2" />
        <p className="text-gray-700 leading-relaxed pl-6 text-lg italic font-light">{quote}</p>
      </div>
    </div>
  </motion.div>
);

export const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState<ShareExperienceForm>({
    name: '',
    email: '',
    childAge: '',
    rating: null,
    experience: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  const testimonials = [
    {
      quote: "Cubs Onboard has been an amazing experience for our daughter. The staff is incredibly caring and the environment is perfect for learning and growth.",
      author: "Sarah Johnson",
      role: "Parent of 3-year-old",
      rating: 5,
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The attention to detail and personalized care each child receives is outstanding. My son looks forward to going every day!",
      author: "Michael Chen",
      role: "Parent of 4-year-old",
      rating: 5,
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "The curriculum is well-structured and the teachers are amazing. I can see my child's development improving every day.",
      author: "Emily Rodriguez",
      role: "Parent of 2-year-old",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate that rating is selected
    if (formData.rating === null) {
      alert("Please select a rating before submitting");
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSubmitSuccess(true);
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitSuccess(false);
        setFormData({
          name: '',
          email: '',
          childAge: '',
          rating: null,
          experience: ''
        });
      }, 2000);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => {
      // If clicking the same star that's already selected, decrease the rating by 1
      if (prev.rating === rating) {
        return { ...prev, rating: rating - 1 > 0 ? rating - 1 : null };
      }
      // Otherwise, set the rating to the clicked star
      return { ...prev, rating };
    });
  };

  return (
    <section id="testimonials" className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-gray-50/80 to-transparent pointer-events-none"></div>
      <div className="absolute top-20 right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-20"
        >
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">Testimonials</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            What Parents Say
          </h2>
          <p className="text-gray-600 text-lg">
            Hear from our families about their experience at Cubs Onboard
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto" ref={carouselRef}>
          <div className="relative h-[400px] md:h-[350px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: direction >= 0 ? 100 : -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction >= 0 ? -100 : 100 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="absolute inset-0"
              >
                <TestimonialCard {...testimonials[currentIndex]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
            </motion.button>
            
            <div className="flex items-center gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setDirection(index > currentIndex ? 1 : -1);
                    setCurrentIndex(index);
                  }}
                  className="group"
                >
                  <div className={`h-2 rounded-full transition-all duration-500 ${
                    index === currentIndex 
                      ? 'w-10 bg-primary' 
                      : 'w-2 bg-gray-300 group-hover:bg-gray-400'
                  }`} />
                </button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group"
            >
              <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-primary transition-colors" />
            </motion.button>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setIsModalOpen(true)}
            className="bg-gradient-to-r from-primary to-accent text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center gap-3 font-medium"
          >
            <MessageSquare className="w-5 h-5" />
            <span>Share Your Experience</span>
          </motion.button>
        </motion.div>
      </div>

      {/* Enhanced Share Experience Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              {/* Decorative Elements */}
              <div className="absolute top-0 left-0 w-full h-3 bg-gradient-to-r from-primary to-accent rounded-t-3xl" />
              <div className="absolute top-0 right-0 w-40 h-40 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

              <div className="p-10 relative">
                <div className="flex justify-between items-center mb-10">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">Share Your Experience</h3>
                    <p className="text-gray-600">Help other parents make the right choice</p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-gray-100 rounded-full transition-colors group"
                  >
                    <X className="w-6 h-6 text-gray-500 group-hover:text-gray-700 transition-colors" />
                  </motion.button>
                </div>

                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-16"
                  >
                    <motion.div 
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", duration: 0.8, delay: 0.2 }}
                      className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
                    >
                      <svg className="w-12 h-12 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </motion.div>
                    <h4 className="text-3xl font-bold text-gray-900 mb-4">Thank You!</h4>
                    <p className="text-gray-600 text-xl">Your experience has been submitted successfully.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50 hover:bg-white"
                          placeholder="John Doe"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50 hover:bg-white"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <label className="block text-sm font-medium text-gray-700">
                        Your Rating
                      </label>
                      <div className="flex gap-3">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <motion.button
                            key={rating}
                            type="button"
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleRatingChange(rating)}
                            className={`p-3 rounded-xl transition-all ${
                              formData.rating !== null && rating <= formData.rating 
                                ? 'bg-yellow-50 ring-2 ring-yellow-200' 
                                : 'hover:bg-gray-100'
                            }`}
                            aria-label={`Rate ${rating} stars`}
                          >
                            <Star
                              className={`w-8 h-8 transition-all duration-300 ${
                                formData.rating !== null && rating <= formData.rating
                                  ? 'text-yellow-400 fill-yellow-400'
                                  : rating <= (formData.rating || 0) || (formData.rating === null && rating === 1)
                                    ? 'text-yellow-400 fill-yellow-400'
                                    : 'text-gray-300 hover:text-yellow-300'
                              }`}
                            />
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="experience" className="block text-sm font-medium text-gray-700">
                        Your Experience
                      </label>
                      <textarea
                        id="experience"
                        name="experience"
                        value={formData.experience}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-3 focus:ring-primary/20 focus:border-primary outline-none transition-all bg-gray-50/50 hover:bg-white resize-none"
                        placeholder="Share your experience with Cubs Onboard..."
                      />
                    </div>

                    <div className="flex flex-col sm:flex-row justify-end gap-4 pt-6">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="button"
                        onClick={() => setIsModalOpen(false)}
                        className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-all font-medium order-2 sm:order-1"
                      >
                        Cancel
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl transition-all duration-300 hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed font-medium inline-flex items-center justify-center gap-2 order-1 sm:order-2"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>Submitting...</span>
                          </>
                        ) : (
                          <>
                            <span>Submit Experience</span>
                            <ChevronRight className="w-4 h-4" />
                          </>
                        )}
                      </motion.button>
                    </div>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
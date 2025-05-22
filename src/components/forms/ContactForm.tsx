import React, { useState } from 'react';
import { Loader2, ChevronRight } from 'lucide-react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    parentName: '',
    parentEmail: '',
    childName: '',
    childAge: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setShowSuccess(true);
      setFormData({
        parentName: '',
        parentEmail: '',
        childName: '',
        childAge: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    }, 1000);
  };

  if (showSuccess) {
    return (
      <div className="animate-fade-in">
        <div className="bg-primary/10 border border-primary/20 rounded-2xl p-8 text-center">
          <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h4 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h4>
          <p className="text-gray-600">Thank you for reaching out. We'll get back to you shortly to discuss your childcare needs.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Send Us a Message
      </h3>
      <form onSubmit={handleSubmit} id="contactForm" className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="parentName" className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">
              Parent's Name
            </label>
            <input
              type="text"
              id="parentName"
              name="parentName"
              required
              value={formData.parentName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your name"
            />
          </div>
          <div className="group">
            <label htmlFor="parentEmail" className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">
              Email Address
            </label>
            <input
              type="email"
              id="parentEmail"
              name="parentEmail"
              required
              value={formData.parentEmail}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="group">
            <label htmlFor="childName" className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">
              Child's Name
            </label>
            <input
              type="text"
              id="childName"
              name="childName"
              required
              value={formData.childName}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Enter child's name"
            />
          </div>
          <div className="group">
            <label htmlFor="childAge" className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">
              Child's Age
            </label>
            <input
              type="text"
              id="childAge"
              name="childAge"
              required
              value={formData.childAge}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm"
              placeholder="Enter child's age"
            />
          </div>
        </div>

        <div className="group">
          <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2 group-focus-within:text-primary transition-colors">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            required
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all duration-300 bg-white/50 backdrop-blur-sm resize-none"
            placeholder="Tell us about your childcare needs..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-white px-8 py-4 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:hover:scale-100 disabled:hover:shadow-none flex items-center justify-center gap-3"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span className="text-lg font-semibold">Sending...</span>
            </>
          ) : (
            <>
              <span className="text-lg font-semibold">Send Message</span>
              <ChevronRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}; 
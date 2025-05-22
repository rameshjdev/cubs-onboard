import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { SectionHeader } from '../common/SectionHeader';
import { ContactForm } from '../forms/ContactForm';
import { ContactInfo } from '../common/ContactInfo';

export const Contact = () => {
  return (
    <section id="contact" className="relative py-24 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary/5" />
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-primary/10 to-transparent" />
      <div className="absolute bottom-0 right-0 w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl -z-10" />
      <div className="absolute top-1/3 left-0 w-[25rem] h-[25rem] bg-primary/10 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <SectionHeader
          title="Contact Us"
          subtitle="We'd love to hear from you - schedule a tour or learn more today"
        />
        
        <div className="grid lg:grid-cols-2 gap-8 mt-16">
          {/* Contact Information Card - Modernized */}
          <div className="backdrop-blur-xl bg-white/90 p-10 rounded-3xl shadow-2xl border border-white/30 
                         transform transition-all duration-500 hover:shadow-primary/20">
            <h3 className="text-3xl font-bold mb-10 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </h3>
            <div className="space-y-8">
              <ContactInfo
                icon={
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <MapPin className="w-6 h-6" />
                  </div>
                }
                title="Our Location"
                content="123 Sunshine Lane, Anytown, USA 12345"
              />
              <ContactInfo
                icon={
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent shadow-inner">
                    <Phone className="w-6 h-6" />
                  </div>
                }
                title="Call Us"
                content="(555) 123-4567"
              />
              <ContactInfo
                icon={
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center text-primary shadow-inner">
                    <Mail className="w-6 h-6" />
                  </div>
                }
                title="Email Us"
                content="sarah@cubsonboarddaycare.com"
              />
              <ContactInfo
                icon={
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent/20 to-accent/10 flex items-center justify-center text-accent shadow-inner">
                    <Clock className="w-6 h-6" />
                  </div>
                }
                title="Opening Hours"
                content="Monday - Friday: 7:30 AM - 5:30 PM"
              />
            </div>

            {/* Enhanced Map Design */}
            <div className="mt-10 rounded-2xl overflow-hidden shadow-xl relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-accent opacity-30 group-hover:opacity-100 blur-sm transition-all duration-500 rounded-2xl" />
              <div className="relative z-0 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-secondary/80 to-transparent p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <p className="text-sm font-medium">Cubs Onboard Home Daycare</p>
                <p className="text-xs">123 Sunshine Lane, Anytown, USA</p>
              </div>
            </div>
          </div>

          {/* Contact Form - Modernized */}
          <div className="backdrop-blur-xl bg-white/90 p-10 rounded-3xl shadow-2xl border border-white/30 
                         transform transition-all duration-500 hover:shadow-accent/20">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent/10 rounded-full blur-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
              <ContactForm />
            </div>
          </div>
        </div>
        
        {/* Added decorative elements */}
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl"></div>
        <div className="absolute top-1/4 right-0 w-20 h-20 bg-accent/10 rounded-full blur-xl"></div>
      </div>
    </section>
  );
};
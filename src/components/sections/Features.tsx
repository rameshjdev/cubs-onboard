import { Calendar, GraduationCap, Shield } from 'lucide-react';
import { FeatureCard } from '../cards/FeatureCard';

export const Features = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={<Calendar className="w-8 h-8 text-accent" />}
            title="Flexible Scheduling"
            description="Full-time, part-time, and drop-in care options to meet your family's needs."
          />
          <FeatureCard
            icon={<GraduationCap className="w-8 h-8 text-accent" />}
            title="Learning Activities"
            description="Age-appropriate activities that promote early childhood development."
          />
          <FeatureCard
            icon={<Shield className="w-8 h-8 text-accent" />}
            title="Safe Environment"
            description="Fully childproofed home with strict safety protocols and procedures."
          />
        </div>
      </div>
    </section>
  );
}; 
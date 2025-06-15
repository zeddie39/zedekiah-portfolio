
import React from 'react';
import TestimonialCard from './TestimonialCard';
import type { Testimonial } from './Testimonials';

interface TestimonialListProps {
  testimonials: Testimonial[];
}

const TestimonialList = ({ testimonials }: TestimonialListProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
      {testimonials.map((testimonial) => (
        <TestimonialCard 
          key={testimonial.id} 
          testimonial={testimonial} 
        />
      ))}
    </div>
  );
};

export default TestimonialList;

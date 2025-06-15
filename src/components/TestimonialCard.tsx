import React from 'react';
import { Star, Quote } from 'lucide-react';
import type { Testimonial } from './Testimonials';

const renderStars = (rating: number | null) => {
  const numericRating = rating || 0;
  return Array.from({ length: 5 }, (_, i) => (
    <Star
      key={i}
      size={16}
      className={i < numericRating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
    />
  ));
};

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <div
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 relative transition-all"
    >
      <Quote className="text-purple-400 mb-4" size={24} />
      <p className="text-gray-300 mb-4 leading-relaxed">"{testimonial.message}"</p>
      
      <div className="flex items-center justify-between">
        <div>
          <h4 className="text-white font-semibold">{testimonial.name}</h4>
          {testimonial.role && (
            <p className="text-gray-400 text-sm">
              {testimonial.role}{testimonial.company && ` at ${testimonial.company}`}
            </p>
          )}
        </div>
        <div className="flex">
          {renderStars(testimonial.rating)}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

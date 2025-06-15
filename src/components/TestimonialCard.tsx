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
  isAdmin?: boolean;
  approveTestimonial?: (id: string) => Promise<void>;
  deleteTestimonial?: (id: string) => Promise<void>;
}

const TestimonialCard = ({ testimonial, isAdmin, approveTestimonial, deleteTestimonial }: TestimonialCardProps) => {
  const isPending = testimonial.approved === false;

  return (
    <div
      className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border ${isPending && isAdmin ? 'border-yellow-500/50' : 'border-slate-700/50'} relative transition-all`}
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
      {isAdmin && approveTestimonial && deleteTestimonial && (
        <div className="mt-4 pt-4 border-t border-slate-700/50 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {isPending && (
              <button
                onClick={() => approveTestimonial(testimonial.id)}
                className="bg-green-600 hover:bg-green-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
              >
                Approve
              </button>
            )}
            <button
              onClick={() => deleteTestimonial(testimonial.id)}
              className="bg-red-600 hover:bg-red-700 text-white text-xs font-semibold px-3 py-1.5 rounded-md transition-colors"
            >
              Delete
            </button>
          </div>
          <div>
            {isPending ? (
              <span className="text-xs text-yellow-400 font-medium">Pending Approval</span>
            ) : (
              <span className="text-xs text-green-400 font-medium">Approved</span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default TestimonialCard;

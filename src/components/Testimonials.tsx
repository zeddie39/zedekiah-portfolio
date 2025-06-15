
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import TestimonialList from './TestimonialList';
import TestimonialForm from './TestimonialForm';

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  company?: string;
  message: string;
  rating: number | null;
  created_at: string;
  approved?: boolean | null;
}

export type TestimonialFormData = {
  name: string;
  role: string;
  company: string;
  message: string;
  rating: number;
};

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<TestimonialFormData>({
    name: '',
    role: '',
    company: '',
    message: '',
    rating: 5
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchTestimonials();
  }, []);

  const fetchTestimonials = async () => {
    try {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('approved', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setTestimonials(data || []);
    } catch (error) {
      console.error('Error fetching testimonials:', error);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('testimonials')
        .insert([formData]);

      if (error) throw error;
      
      const newTestimonial: Testimonial = {
        ...formData,
        id: `temp-${Date.now()}`,
        created_at: new Date().toISOString(),
        approved: false,
      };
      setTestimonials(prevTestimonials => [newTestimonial, ...prevTestimonials]);

      toast({
        title: "Thank you for your testimonial!",
        description: "It has been submitted for review.",
      });

      setFormData({ name: '', role: '', company: '', message: '', rating: 5 });
      setShowForm(false);
    } catch (error) {
      console.error('Error submitting testimonial:', error);
      toast({
        title: "Error",
        description: "Failed to submit testimonial. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="testimonials" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Client <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Testimonials</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            What people say about working with me
          </p>
        </div>

        <TestimonialList testimonials={testimonials} />

        <div className="text-center">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-[1.02]"
          >
            {showForm ? 'Cancel' : 'Add Your Testimonial'}
          </button>
        </div>

        {showForm && (
          <TestimonialForm 
            handleSubmit={handleSubmit}
            isLoading={isLoading}
            formData={formData}
            setFormData={setFormData}
          />
        )}
      </div>
    </section>
  );
};

export default Testimonials;

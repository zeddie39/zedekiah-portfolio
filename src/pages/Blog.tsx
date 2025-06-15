
import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PostCard from '@/components/PostCard';
import Navigation from '@/components/Navigation';
import { Skeleton } from '@/components/ui/skeleton';

const Blog = () => {
  const { data: posts, isLoading, error } = useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase.from('posts').select('*').order('created_at', { ascending: false });
      if (error) throw new Error(error.message);
      return data;
    },
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="pt-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">My Blog</h1>
          <p className="mt-4 text-lg text-gray-300">Thoughts, stories, and ideas.</p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-[225px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-4 w-1/2" />
                </div>
              </div>
            ))
          ) : error ? (
            <p className="col-span-full text-center text-red-400">Error loading posts. Please try again later.</p>
          ) : posts && posts.length > 0 ? (
            posts.map((post) => <PostCard key={post.id} post={post} />)
          ) : (
            <p className="col-span-full text-center text-gray-400">No posts yet. Stay tuned!</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blog;

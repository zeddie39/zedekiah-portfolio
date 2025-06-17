import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import PostCard from '@/components/PostCard';
import Navigation from '@/components/Navigation';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const POSTS_PER_PAGE = 6;

const Blog = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['posts', currentPage],
    queryFn: async () => {
      const from = (currentPage - 1) * POSTS_PER_PAGE;
      const to = from + POSTS_PER_PAGE - 1;
      const { data, error, count } = await supabase
        .from('posts')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);

      if (error) throw new Error(error.message);
      return { posts: data, count };
    },
  });

  const totalPages = data?.count ? Math.ceil(data.count / POSTS_PER_PAGE) : 0;
  const posts = data?.posts;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <header className="pt-16 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg">My Blog</h1>
          <p className="mt-4 text-lg text-gray-300">Thoughts, stories, and ideas.</p>
        </header>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {isLoading ? (
            Array.from({ length: POSTS_PER_PAGE }).map((_, i) => (
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

        {totalPages > 1 && (
          <div className="mt-16">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.max(1, prev - 1));
                    }}
                    className={currentPage === 1 ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
                <PaginationItem>
                  <span className="text-gray-300 px-4 py-2 text-sm">
                    Page {currentPage} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setCurrentPage((prev) => Math.min(totalPages, prev + 1));
                    }}
                    className={currentPage === totalPages ? 'pointer-events-none opacity-50' : ''}
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </main>
    </div>
  );
};

export default Blog;

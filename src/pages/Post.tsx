import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import Navigation from '@/components/Navigation';
import { ArrowLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

const Post = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      const { data, error } = await supabase.from('posts').select('*').eq('slug', slug).maybeSingle();
      if (error) throw new Error(error.message);
      return data;
    },
    enabled: !!slug,
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <Navigation />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="pt-16">
          <Link to="/blog" className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors mb-8">
            <ArrowLeft size={16} />
            Back to Blog
          </Link>

          {isLoading ? (
            <div className="space-y-4">
              <Skeleton className="h-12 w-3/4" />
              <Skeleton className="h-6 w-1/4" />
              <Skeleton className="h-96 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
            </div>
          ) : error ? (
            <p className="text-center text-red-400">Error loading post.</p>
          ) : post ? (
            <article className="prose prose-invert lg:prose-xl max-w-none prose-p:text-gray-300 prose-headings:text-white prose-strong:text-white">
              <h1 className="text-4xl md:text-5xl font-bold text-white drop-shadow-lg mb-4">{post.title}</h1>
              <div className="text-gray-400 mb-8">
                <span>By {post.author_name || 'Anonymous'}</span> • <span>{new Date(post.created_at).toLocaleDateString()}</span>
              </div>
              {post.cover_image_url && <img src={post.cover_image_url} alt={post.title} className="w-full rounded-lg mb-8" />}
              <div dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }} />
            </article>
          ) : (
            <p className="text-center text-gray-400">Post not found.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Post;

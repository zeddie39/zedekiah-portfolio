
import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowUpRight } from 'lucide-react';

// Define the type for a single post based on your database schema
interface Post {
  id: string;
  created_at: string;
  title: string;
  content: string;
  slug: string;
  author_name: string | null;
  cover_image_url: string | null;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  const excerpt = post.content.substring(0, 100) + '...';

  return (
    <Link to={`/blog/${post.slug}`} className="group block">
      <Card className="bg-slate-800/50 border-slate-700 text-white h-full flex flex-col transition-all duration-300 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/20">
        <CardHeader>
          {post.cover_image_url && (
            <img src={post.cover_image_url} alt={post.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
          )}
          <CardTitle className="text-xl font-bold group-hover:text-purple-400 transition-colors">{post.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-gray-400">{excerpt}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center text-sm text-gray-500">
          <span>{post.author_name || 'Anonymous'}</span>
          <span>{new Date(post.created_at).toLocaleDateString()}</span>
          <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
        </CardFooter>
      </Card>
    </Link>
  );
};

export default PostCard;

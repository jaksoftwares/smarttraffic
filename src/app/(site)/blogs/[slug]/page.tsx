import { notFound } from 'next/navigation';
import { ArrowLeft, CalendarDays, User, Bookmark } from 'lucide-react';
import blogPosts from '../blogposts';
import Link from 'next/link';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return blogPosts.map(post => ({
    slug: `${post.id}-${post.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`
  }));
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  // Extract ID from slug
  const postId = parseInt(params.slug.split('-')[0]);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return notFound();
  }

  // Generate share links
  const shareLinks = {
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://smarttraffic.ai/blogs/${params.slug}`)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&title=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://smarttraffic.ai/blogs/${params.slug}`)}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://smarttraffic.ai/blogs/${params.slug}`)}`
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-purple-900/10" />
        
        {/* Grid Pattern */}
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="blogGrid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgb(59 130 246 / 0.05)" strokeWidth="1"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#blogGrid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 py-20">
        {/* Back Button */}
        <div className="mb-12">
          <Link 
            href="/blogs" 
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors duration-300 group"
          >
            <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            <span className="text-lg font-medium">Back to all articles</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-2 bg-blue-900/30 text-blue-400 rounded-full text-sm font-medium border border-blue-400/20">
              {post.category}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
              <CalendarDays className="w-4 h-4" />
              {post.date}
            </span>
            <span className="flex items-center gap-2 text-gray-400">
              <User className="w-4 h-4" />
              {post.author}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
            {post.title}
          </h1>

          <div className="h-px bg-gradient-to-r from-transparent via-blue-400/40 to-transparent my-12" />
        </header>

        {/* Article Content */}
        <article className="prose prose-invert max-w-none mb-20">
          <div 
            className="text-lg leading-relaxed text-gray-300 space-y-6"
            dangerouslySetInnerHTML={{ __html: post.readMore }}
          />
        </article>

        {/* Article Footer */}
        <footer className="border-t border-gray-800 pt-12">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Share this article</h3>
              <div className="flex gap-4">
                <a 
                  href={shareLinks.twitter} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a 
                  href={shareLinks.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-500 transition-colors duration-300"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a 
                  href={shareLinks.facebook} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                  </svg>
                </a>
              </div>
            </div>

            <button className="flex items-center gap-2 text-gray-400 hover:text-yellow-400 transition-colors duration-300">
              <Bookmark className="w-5 h-5" />
              <span>Save for later</span>
            </button>
          </div>

          {/* Related Articles */}
          <div className="mt-16">
            <h3 className="text-2xl font-semibold text-white mb-8">More from SmartTraffic AI</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => {
                  const relatedSlug = `${relatedPost.id}-${relatedPost.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`;
                  return (
                    <Link 
                      key={relatedPost.id} 
                      href={`/blogs/${relatedSlug}`}
                      className="group"
                    >
                      <div className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 h-full">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-400 bg-blue-900/30 rounded-full mb-4 border border-blue-400/20">
                          {relatedPost.category}
                        </span>
                        <h4 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-400 line-clamp-2">{relatedPost.description}</p>
                      </div>
                    </Link>
                  );
                })}
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const postId = parseInt(params.slug.split('-')[0]);
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return {
      title: 'Article Not Found',
      description: 'The article you are looking for does not exist.'
    };
  }

  return {
    title: `${post.title} | SmartTraffic AI Blog`,
    description: post.description,
    keywords: post.keywords.join(', '),
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://smarttraffic.ai/blogs/${params.slug}`,
      type: 'article',
      publishedTime: new Date(post.date).toISOString(),
      authors: [post.author],
      tags: post.keywords
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.description
    }
  };
}
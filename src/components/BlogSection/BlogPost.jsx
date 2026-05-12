import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../../utils/posts'
import ShareButtons from './ShareButtons'

const BlogPost = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const url = typeof window !== 'undefined' ? window.location.href : ''

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl text-orange mb-4">Post not found</h1>
        <Link to="/blog" className="text-cyan hover:text-orange transition-colors duration-300">
          ← Back to Blog
        </Link>
      </div>
    )
  }

  return (
    <article className="min-h-screen max-w-[720px] mx-auto px-4 sm:px-6 pt-32 pb-20">
      <Link to="/blog" className="text-cyan hover:text-orange transition-colors duration-300 text-sm mb-8 inline-block">
        ← Back to Blog
      </Link>

      <p className="text-xs text-lightGrey uppercase tracking-widest mt-6 mb-2">{post.date}</p>
      <h1 className="text-4xl md:text-5xl text-orange font-bold uppercase leading-tight mb-6">
        {post.title}
      </h1>

      {/* Share — top */}
      <ShareButtons title={post.title} url={url} />

      <div className="h-px bg-lightBrown my-8" />

      <div className="prose-blog">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>

      <div className="h-px bg-lightBrown mt-12 mb-8" />

      {/* Share — bottom */}
      <div>
        <p className="text-white text-sm mb-4">Enjoyed this? Share it with someone who'd find it useful.</p>
        <ShareButtons title={post.title} url={url} />
      </div>
    </article>
  )
}

export default BlogPost

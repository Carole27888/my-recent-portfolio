import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import { getPostBySlug } from '../../utils/posts'
import ShareButtons from './ShareButtons'

const BlogPost = () => {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const url = typeof window !== 'undefined' ? window.location.href : ''

  useEffect(() => {
    if (!post) return
    document.title = `${post.title} | Virtually Carole`
    let metaDesc = document.querySelector('meta[name="description"]')
    if (!metaDesc) {
      metaDesc = document.createElement('meta')
      metaDesc.name = 'description'
      document.head.appendChild(metaDesc)
    }
    metaDesc.content = post.excerpt
    return () => {
      document.title = 'Virtually Carole'
      if (metaDesc) metaDesc.remove()
    }
  }, [post])

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

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-64 md:h-80 object-cover rounded-xl mt-6 mb-6"
        />
      )}

      <p className="text-xs text-lightGrey uppercase tracking-widest mb-2">{post.date}</p>
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

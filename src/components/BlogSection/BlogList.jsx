import { Link } from 'react-router-dom'
import { getAllPosts } from '../../utils/posts'

const BlogList = () => {
  const posts = getAllPosts()

  return (
    <section className="min-h-screen max-w-[800px] mx-auto px-4 sm:px-6 pt-32 pb-20">
      <h1 className="text-5xl text-orange font-bold uppercase mb-2">Blog</h1>
      <p className="text-lightGrey mb-12 text-lg">Thoughts on systems, operations, and working smarter.</p>

      {posts.length === 0 ? (
        <p className="text-lightGrey">No posts yet. Check back soon.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {posts.map(post => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group block border border-lightBrown rounded-xl p-6 bg-darkGrey/30 hover:border-cyan transition-all duration-300"
            >
              <p className="text-xs text-lightGrey mb-2 uppercase tracking-widest">{post.date}</p>
              <h2 className="text-2xl text-white group-hover:text-cyan transition-colors duration-300 mb-2">
                {post.title}
              </h2>
              <p className="text-lightGrey text-sm leading-relaxed">{post.excerpt}</p>
              <span className="inline-block mt-4 text-cyan text-sm">Read more →</span>
            </Link>
          ))}
        </div>
      )}
    </section>
  )
}

export default BlogList

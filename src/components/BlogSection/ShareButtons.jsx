import { useState } from 'react'
import { FaLinkedin, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { HiLink, HiCheck } from 'react-icons/hi2'

const ShareButtons = ({ title, url }) => {
  const [copied, setCopied] = useState(false)

  const encoded = {
    url: encodeURIComponent(url),
    title: encodeURIComponent(title),
  }

  const links = [
    {
      label: 'LinkedIn',
      icon: <FaLinkedin size={18} />,
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encoded.url}`,
    },
    {
      label: 'Twitter / X',
      icon: <FaXTwitter size={18} />,
      href: `https://twitter.com/intent/tweet?url=${encoded.url}&text=${encoded.title}`,
    },
    {
      label: 'WhatsApp',
      icon: <FaWhatsapp size={18} />,
      href: `https://wa.me/?text=${encoded.title}%20${encoded.url}`,
    },
  ]

  const copyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-lightGrey text-xs uppercase tracking-widest">Share</span>

      {links.map(({ label, icon, href }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Share on ${label}`}
          className="flex items-center gap-2 border border-lightBrown rounded-full px-4 py-1.5 text-sm text-white hover:border-cyan hover:text-cyan transition-all duration-300"
        >
          {icon}
          <span className="hidden sm:inline">{label}</span>
        </a>
      ))}

      <button
        onClick={copyLink}
        aria-label="Copy link"
        className="flex items-center gap-2 border border-lightBrown rounded-full px-4 py-1.5 text-sm text-white hover:border-orange hover:text-orange transition-all duration-300"
      >
        {copied ? <HiCheck size={18} className="text-orange" /> : <HiLink size={18} />}
        <span className="hidden sm:inline">{copied ? 'Copied!' : 'Copy link'}</span>
      </button>
    </div>
  )
}

export default ShareButtons

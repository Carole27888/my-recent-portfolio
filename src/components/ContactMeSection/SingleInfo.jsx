import React from 'react'

const SingleInfo = ({ text, Image, href }) => {
  return (
    <div className='flex gap-4 items-center justify-start'>
        <Image className='text-3xl' />
        {href ? (
          <a href={href} className='hover:underline'>
            {text}
          </a>
        ) : (
          <p>{text}</p>
        )}
    </div>
  )
}

export default SingleInfo

import React from 'react'

const HelperSection = () => {
  return (
    <div id="testimonials" className="max-w-[1200px] mx-auto px-4 sm:px-6 md:px-8 mt-[80px]">
      <div className="flex flex-col items-center text-center">
        <h2 className="text-6xl text-red mb-8">Testimonials</h2>
        <p className="text-lg text-white mb-10">Short notes from VA and social media support projects across different industries.</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="border border-lightBrown rounded-xl p-5 text-white bg-darkGrey/40">
          "Super organized and reliable. Our launches stayed on schedule and leads were followed up fast."
          <p className="text-lightGrey mt-3">- Maria, CEO Red Espionage</p>
        </div>
        <div className="border border-lightBrown rounded-xl p-5 text-white bg-darkGrey/40">
          "Great communication and clean systems. The content calendar made our shoots feel effortless."
          <p className="text-lightGrey mt-3">- Ibrahim Hayek, CEO Hayek Studios</p>
        </div>
        <div className="border border-lightBrown rounded-xl p-5 text-white bg-darkGrey/40">
          "Attention to detail was excellent. DMs, files, and CRM updates were always on point."
          <p className="text-lightGrey mt-3">- Boutique Agency</p>
        </div>
      </div>
    </div>
  )
}

export default HelperSection

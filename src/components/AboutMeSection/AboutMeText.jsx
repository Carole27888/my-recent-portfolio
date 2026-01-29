import React from 'react'

const aboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h2 className="text-6xl text-red mb-10">About Me</h2>
      <p className='text-white'>
        I'm a Virtual Assistant & Social Media Manager who supports a wide range of brands and service-based businesses.
        I have experience with photography and real estate teams, and I also work across other industries.
        I handle content scheduling, DM outreach, lead follow-up, admin support, CRM updates, file organization, and basic Canva design.
        <br />
        Tools I use: Canva, Airtable, TextMagic, HubSpot, Zoho, Google Drive, and Dropbox.
        I'm reliable, detail-oriented, SOP-driven, and known for consistent communication.
        <br />
        Availability: 30-40 hours per week, flexible.
      </p> 
      <button className="border border-red rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer self-center md:self-start text-white">View Portfolio Samples</button>
    </div>

  )
}

export default aboutMeText

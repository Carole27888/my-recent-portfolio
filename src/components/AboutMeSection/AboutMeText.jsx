import React from 'react'

const aboutMeText = () => {
  return (
    <div className="flex flex-col items-center text-center md:items-start md:text-left">
      <h2 className="text-6xl text-red mb-10">About Me</h2>
      <div className="text-white space-y-4 max-w-[720px]">
        <p>
          <span className="text-orange font-semibold">What I do:</span> I'm a Virtual Assistant & Social Media Manager who supports a wide range of brands and service-based businesses.
        </p>
        <p>
          <span className="text-orange font-semibold">Industry experience:</span> I have experience working with photography and real estate teams, while also supporting clients across other industries.
        </p>
        <p>
          <span className="text-orange font-semibold">Core support:</span> I handle content scheduling, DM outreach, lead follow-up, admin support, CRM updates, file organization, and basic Canva design.
        </p>
        <p>
          <span className="text-orange font-semibold">How I work:</span> I learn new tools quickly, keep digital workflows organized, and work comfortably across modern business platforms.
        </p>
        <p>
          <span className="text-orange font-semibold">Tools:</span> Canva, Airtable, TextMagic, HubSpot, Zoho, Google Drive, Dropbox, Trello, Asana, QuickBooks, and Ramp.
        </p>
        <p>
          <span className="text-orange font-semibold">Work style:</span> Reliable, detail-oriented, SOP-driven, and known for clear, consistent communication.
        </p>
        <p>
          <span className="text-orange font-semibold">Availability:</span> 30-40 hours per week, flexible.
        </p>
      </div>
      <a
        href="#projects"
        className="border border-red rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer self-center md:self-start text-white"
      >
        View Portfolio Samples
      </a>
    </div>

  )
}

export default aboutMeText

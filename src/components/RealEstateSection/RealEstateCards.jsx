import React from 'react'
import { realEstateCards } from './realEstateData'

const HIGHLIGHT_TERMS = [
  "Property Finder",
  "Bayut",
  "Form A",
  "Form B",
  "Form F",
  "Trakheesi",
  "DED",
  "ORN",
  "BRN",
  "NOC",
  "Oqood",
  "Ejari",
  "DLD",
  "Meta Ads",
]

const highlightPattern = new RegExp(
  `(${HIGHLIGHT_TERMS.map((term) => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`,
  'g'
)

const renderHighlighted = (text) => {
  return text.split(highlightPattern).map((part, index) =>
    HIGHLIGHT_TERMS.includes(part) ? (
      <span key={index} className="font-semibold text-cyan">
        {part}
      </span>
    ) : (
      part
    )
  )
}

const RealEstateCards = () => {
  return (
    <div className="mt-14">
      <div className="grid gap-6 sm:grid-cols-2">
        {realEstateCards.map((card, index) => (
          <div
            key={index}
            className="border border-lightBrown rounded-xl p-5 bg-darkGrey/40"
          >
            <h3 className="text-xl font-bold text-orange mb-3">{card.title}</h3>
            <ul className="space-y-2">
              {card.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex gap-2 text-sm leading-6 text-lightGrey">
                  <span className="text-cyan">-</span>
                  <span>{renderHighlighted(item)}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <p className="mt-8 max-w-[820px] mx-auto text-center text-sm leading-7 text-lightGrey">
        This reflects familiarity with the tools, forms, and compliance vocabulary used in Dubai real estate operations support, not licensed brokerage activity.
      </p>
    </div>
  )
}

export default RealEstateCards

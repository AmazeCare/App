/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { PalliativeIcon } from 'assets/icons/service-icons/palliative-icon'

export function PalliativeCare() {
  return (
    <ServiceCard
      title="Palliative Care - Comfort & Dignity at Home"
      iconSrc={<PalliativeIcon />}
      subParagraph="
        When a loved-one reaches the stage where treatment is no longer possible and moves into the phase of palliative care it can be a very difficult time for the patient and the family.
        Home Care Assistance understands this and offers an option to help make this transition easier for everyone.
      "
    >
      <p className="my-2 text-justify">
        When a loved-one reaches the stage where treatment is no longer possible and moves into the phase of palliative care it can be a very difficult time for the patient and the family.
        Home Care Assistance understands this and offers an option to help make this transition easier for everyone.
      </p>
      <h2> Palliative Support 24/7 to Maximize Comfort </h2>
      <p className="my-2 text-justify">
        Home Care Assistance's caregivers provide continuous one-to-one palliative care in the comfort of the patient's own home.
        In doing so, they promote quality of life and dignity to the client while bringing peace of mind and respite for the family.
      </p>
      <p className="my-2 text-justify">
        Our qualified and compassionate caregivers understand the special needs involved in caring for those nearing the end of life.
        In addition to maximizing and maintaining existing function as long as possible, our caregivers can assist by:
      </p>
      <p className="my-2 mx-4">
        <ul className="list-disc">
          <li> Ensuring that the patient is comfortable </li>
          <li> Turning the bedridden to prevent bed sores </li>
          <li> Providing companionship and mediating depression </li>
          <li> Preparing meals </li>
          <li> Maintaining personal hygiene </li>
          <li> Preventing a sense of abandonment </li>
          <li> Alerting the family when needed </li>
        </ul>
      </p>
      <p className="my-2 text-justify"> Palliative Care is Best at Home </p>
      <p className="my-2 text-justify">
        When dealing with the reality of the palliative stage, being surrounded by the familiar environment of home can in itself provide some comfort and relief.
        Being close to loved ones and neighbors, and having access to the things that one cherishes (pets, keepsakes, books, photos, etc.) bring a sense of connection and provide happy memories for the patient.
        This familiarity of home can make the last days of life more enjoyable and fulfilled.
      </p>
    </ServiceCard>
  )
}

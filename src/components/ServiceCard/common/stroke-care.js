/* eslint-disable max-len */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { StrokeIcon } from 'assets/icons/service-icons/stroke-icon'

export function StrokeCare() {
  return (
    <ServiceCard
      title="Stroke Care"
      iconSrc={<StrokeIcon />}
      subParagraph="
        When a person suffers a stroke, the world goes upside down for them.
        They are forced with an overwhelming number of challenges that cause anxiety and frustration,
        activities can be stressful for the client and family.
      "
    >
      <p className="my-2 text-justify">
        When a person suffers a stroke, the world goes upside down for them.
        They are forced with an overwhelming number of challenges that cause anxiety and frustration,
        activities can be stressful for the client and family.
      </p>
      <p className="my-2 text-justify">
        Amaze care has highly trained health workers who are dedicated to caring for your loved one with dignity and compassion.
        Our staff receives training in the special needs of stroke survivors and provides the patient with care that helps them with their daily routine.
        As part of our specialized care, clients can choose from
      </p>
      <p className="my-2 mx-4">
        <ul className="list-disc">
          <li> Nursing care </li>
          <li> Recreation therapy </li>
          <li> Physiotherapy </li>
        </ul>
      </p>
      <h2> Peace of Mind for our Clients and Families </h2>
      <p className="my-2 text-justify">
        Our main focus at Amaze care is to provide a safe and comfortable environment for our clients.
        By doing so, we aim to improve their quality of life.
      </p>
      <p className="my-2 text-justify">
        Call today to speak with a Care Manager about how our specialized stroke care can help your loved one, in the comfort of their own home.
      </p>
    </ServiceCard>
  )
}

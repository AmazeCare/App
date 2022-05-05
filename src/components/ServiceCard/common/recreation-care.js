/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { RecreationIcon } from 'assets/icons/service-icons/recreation-icon'

export function RecreationCare() {
  return (
    <ServiceCard
      title="Recreation"
      iconSrc={<RecreationIcon />}
      subParagraph="
        Are you worried that your loved one is at the home unable to move due to a physical disability,
        not to worry our recreational therapist can take care of this issue we have several programs
        tailored that the clients can choose from even if its bowling, sailing,
      "
    >
      <p className="my-2 text-justify">
        Are you worried that your loved one is at the home unable to move due to a physical disability,
        not to worry our recreational therapist can take care of this issue we have several programs
        tailored that
      </p>
      <p>Call us to find out.</p>
    </ServiceCard>
  )
}

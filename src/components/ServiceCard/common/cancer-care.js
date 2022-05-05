/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { CancerIcon } from 'assets/icons/service-icons/cancer-icon'

export function CancerCare() {
  return (
    <ServiceCard
      title="Cancer Recovery Care at Home"
      iconSrc={<CancerIcon />}
      subParagraph="
        At Amaze Care, our care plans are tailored to comfort each individual and their specific needs.
        Customized home care will help the family to better deal with cancer treatments and manage it comfortably.
        our professional caregivers are highly qualified to help cancer patients during their treatments.
        Depending on your needs you could hire a Continuing care assistant, Licensed practical nurse, or a Registered nurse.
      "
    >
      <p className="my-2 text-justify">
        At Amaze Care, our care plans are tailored to comfort each individual and their specific needs.
        Customized home care will help the family to better deal with cancer treatments and manage it comfortably.
        our professional caregivers are highly qualified to help cancer patients during their treatments.
        Depending on your needs you could hire a Continuing care assistant, Licensed practical nurse, or a Registered nurse.
      </p>
      <p className="my-2 text-justify">
        We can coordinate with different health professionals if there are specific orders that need to follow through.
        Specialized care creates a more comfortable home environment for patients with cancer during their treatment and recovery process.
      </p>

      <h2>Customized continuous care plans</h2>
      <p className="my-2 text-justify">
        Amaze Care offers care schedules, full-time continuous care based on your needs.
        For those in need of additional assistance or full-time monitoring, our continuous care option is ideal.
        Seniors and their families benefit from around the clock monitoring and assistance for maximum safety and peace of mind.
      </p>

      <h2> Providing Professional Assistance and Personal Care </h2>
      <p className="my-2 text-justify">
        Having help and companionship during cancer treatments can be extremely beneficial for the patient, both in terms of support and recovery.
        In addition to offering companionship, our caregivers provide constant support and encouragement during the treatment process.
        Our care givers receive continuous education to ensure that they are prepared to provide excellent and superior care.
        Amaze Care provides safe, quality, reliable care for clients and offers peace of mind to family members.
      </p>
      <p className="my-2 text-justify">
        Call to speak to one of our client care specialists to assess your options today.
      </p>
    </ServiceCard>
  )
}

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { ParkinsonIcon } from 'assets/icons/service-icons/parkinson-icon'

export function ParkinsonCare() {
  return (
    <ServiceCard
      title="Parkinson Care"
      iconSrc={<ParkinsonIcon />}
      subParagraph="
        Parkinson's is a progressive neurological condition.
        The main symptoms are tremor, rigidity and slowness of movement, postural instability and poor balance.
        Although the disease affects patients differently, most:
      "
    >
      <p className="my-2 text-justify">
        Parkinson's is a progressive neurological condition.
        The main symptoms are tremor, rigidity and slowness of movement, postural instability and poor balance.
        Although the disease affects patients differently, most Parkinson's sufferers are no longer able to perform
        their daily activities independently and require assistance:
      </p>
      <p className="my-2 mx-4">
        <ul className="list-disc">
          <li> A customized and comprehensive care plan to ensure that the client's needs are met</li>
          <li> The flexibility to choose different care and health care staff </li>
          <li> The option for consistent 24/7 monitoring to prevent falls </li>
          <li> Companionship, assistance and support with daily tasks </li>
          <li> Transportation for appointments, errands or social gatherings </li>
          <li> Providing a safe and positive environment that promotes independence </li>
        </ul>
      </p>
      <h2> Day and night care </h2>
      <p className="my-2 text-justify">
        If your loved one is suffering from Parkinson's and cannot care for themselves, our caregivers can provide relief and support.
        Our highly trained caregivers and nurses can provide quality care,
        we will be assessing the patient and contact with related department or doctors to create a better care plan along with the client suggestions
      </p>
      <p className="my-2 text-justify">
        Our services are available 24 hours a day, 7 days a week.
        Whether it be part-time hourly care or full-time care, we provide the level of service that your loved one requires.
        Our caregivers have extremely flexible schedules and are available immediately.
      </p>
      <p className="my-2 text-justify">
        For reliable Parkinson's care, call to speak with a Care Manager about a customized care plan for your loved one.
      </p>
    </ServiceCard>
  )
}

/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { TagAlongIcon } from 'assets/icons/service-icons/tag-along-icon'

export function TagAlongCare() {
  return (
    <ServiceCard
      title="Tag Along Services"
      iconSrc={<TagAlongIcon />}
      subParagraph="
        Our Nurses will be accompanying your loved ones all the time so that there won't be any issues with a specific diet or insulin or other medications,
        everything is charted and followed through our employee and an assigned supervisor.
      "
    >
      <p className="my-2 text-justify">
        Our Nurses will be accompanying your loved ones all the time so that there won't be any issues with a specific diet or insulin or other medications,
        everything is charted and followed through our employee and an assigned supervisor.
      </p>
      <p className="my-2 text-justify">
        If your loved ones wanted to go for a family gathering but unable to go due to mobility issues we've got you covered.
      </p>
      <p className="my-2 text-justify"> Our services are: </p>
      <h2> Patient transfer (wheel chair accessible) </h2>
      <p className="my-2 text-justify">
        Worried about long waiting time and uncertainty of transferring from one place to other ? Contact AmazeCare our Nurses will transfer you from one place to another without any hassle.
        Contact our team for more info. (one bag can be taken with the crew)
      </p>
      <h2> Moving services </h2>
      <p className="my-2 text-justify">
        Worried about moving one facility to another, our team will cover all that during your absence everything will be charted and packed and delivered along with the patient from one facility to another.
        Contact our team.
      </p>
      <h2> Travel package (wheel chair accessible) </h2>
      <p className="my-2 text-justify">
        Do you want your loved ones to explore places, or want to go bowling or surfing, maybe go to a favorite restaurant… etc.
        AmazeCare got you covered with transportation and managing medication and other health related issues.
        All our nurses are registered and certified. Contact us for more information
      </p>
      <h2> Appointment/Meeting/family gathering. (Wheelchair accessible) </h2>
      <p className="my-2 text-justify"> Our Licensed staff will be at your service picking up you from your starting point and being with you to fulfill whatever we have charted through until safely returning you back to your destination.</p>
    </ServiceCard>
  )
}

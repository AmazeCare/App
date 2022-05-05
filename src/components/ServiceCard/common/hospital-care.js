/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { HospitalIcon } from 'assets/icons/service-icons/hospital-icon'

export function HospitalCare() {
  return (
    <ServiceCard
      title="Hospital Care"
      iconSrc={<HospitalIcon />}
      subParagraph="Being hospitalized for an emergency or a planned procedure or illness can be a very stressful event for both the patient and their family.
          Family members are often torn between busy schedules and needing to be at the hospital with their loved one.
          Amaze care provides qualified personnel who can stay with your loved one while they are at the hospital."
    >
      <p className="my-2 text-justify">
        Being hospitalized for an emergency or a planned procedure or illness can be a very stressful event for both the patient and their family.
        Family members are often torn between busy schedules and needing to be at the hospital with their loved one.
        Amaze care provides qualified personnel who can stay with your loved one while they are at the hospital.
        Having a caregiver present who is designated specifically for your loved one means that he/she feels reassured that someone is there at all times.
        This will create a calming experience for the patient and thereby reduce anxiety, and help the patient recover at a higher pace.
      </p>
      <p className="my-2 text-justify">
        Pre-care before hospitalization carefully delivering all the essentials and staying with the client during the hospital stay,
        following the patient after discharge and helping to go through all that along with post hospital care,
        accompanying the client to his home/facility and continuing with the care.
        Clients can choose from any of these services or all of them and also will have the opportunity to select from continuing care assistant,
        licensed practical nurse and registered nurse.
      </p>
      <h2>From hospital to home</h2>
      <p className="my-2 text-justify">
        The flexibility of our services means that you get the care you need when you need it.
        Our caregivers are available anytime, anywhere.
        We know that hospital admissions and discharges are sometimes unexpected,
        so we can be there even on very short notice.
        Contact a Care Manager today at to discuss a Hospital or Post-Hospital Care plan that can make
        hospital admission and post-hospital recovery a more relaxing experience.
      </p>
    </ServiceCard>
  )
}

/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import ServiceCard from 'components/ServiceCard'
import { SubstitueIcon } from 'assets/icons/service-icons/substitue-icon'

export function SubstituteHomeCare() {
  return (
    <ServiceCard
      title="Substitute Home Care"
      iconSrc={<SubstitueIcon />}
      subParagraph="
        Our Substitute care administration is a complete care and wellness health approach for seniors
        who can profit from a full-time weekly care plan.
        Moreover, it is also a break for the family members who have to deal with day to day activities.
        We realize that sometimes it's hard to balance everything at once.
      "
    >
      <p className="my-2 text-justify">
        Our Substitute care administration is a complete care and wellness health approach for seniors
        who can profit from a full-time weekly care plan.
        Moreover, it is also a break for the family members who have to deal with day to day activities.
        We realize that sometimes it's hard to balance everything at once.
      </p>
      <h2>Professional care and services</h2>
      <p className="my-2 text-justify">
        Our services will have the quality that you look for, our substitute care service literally means
        that we will take care of everything from appointments to paying bills and so on.
      </p>
      <p className="my-2 text-justify">
        Our care team anticipates your parent's needs, whether it's for healthcare or other home related issues.
      </p>
      <p className="my-2 text-justify">
        You want your parents to enjoy their home as long as possible,
        but it's getting difficult day by day for you to give them the support they need.
        There are appointments to go to, hospital visits,
        grocery shopping and bill payments, and home repairs that can't wait any longer! And that's just the start of it.
      </p>
      <h2> Quality time with your loved ones </h2>
      <p className="my-2 text-justify">
        Let us take care of all the daily tasks and details of managing the home.
        You can have peace of mind knowing that your parents are safe and living well with someone by their side
      </p>
      <p className="my-2 text-justify">
        <strong> A care team </strong>
        with a registered nurse is dedicated to your parents healthcare needs.
        We can book appointments, accompany your loved-one to the doctor or dentist,
        so you don't have to take time off work and will get regular updates from our team.
      </p>
      <p className="my-2 text-justify">
        <strong> Home maintenance </strong>
        Our team makes sure that everything is functioning as it should in the home.
        We can take care of booking and supervising the repairs for you.
        We also help with technology such as home alarms, TVs and even setting up Zoom calls or any other applications
      </p>
      <p className="my-2 text-justify">
        <strong> Outings and errands </strong>
        are good for the soul. Our caregivers are trained to accompany your loved ones even if they have limited mobility.
        We coordinate personal activities including social outings, errands, appointments.
      </p>
      <p className="my-2 text-justify">
        <strong>On-call for emergencies.</strong>
        You are out of town and anxious that you can't help your parents in an emergency?
        We are here 24/7 to respond to any emergency - medical or otherwise - so that you can have peace of mind.
      </p>
    </ServiceCard>
  )
}

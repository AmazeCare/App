import React from 'react'
import Header from 'components/Header'

export default function SubstituteHomeCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Our Services" />
      <section className="py-20 bg-white relative">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto sm:px-6 md:px-12 lg:px-18">
          <div className="flex flex-col">
            <p className="my-2 text-justify">
              Our Substitute care administration is a complete care and wellness health approach for seniors
              who can profit from a full-time weekly care plan.
              Moreover, it is also a break for the family members who have to deal with day to day activities.
              We realize that sometimes it`&apos;`s hard to balance everything at once.
            </p>
            <h2>Professional care and services</h2>
            <p className="my-2 text-justify">
              Our services will have the quality that you look for, our substitute care service literally means
              that we will take care of everything from appointments to paying bills and so on.
            </p>
            <p className="my-2 text-justify">
              Our care team anticipates your parent`&apos;`s needs, whether it`&apos;`s for healthcare or other home related issues.
            </p>
            <p className="my-2 text-justify">
              You want your parents to enjoy their home as long as possible,
              but it`&apos;`s getting difficult day by day for you to give them the support they need.
              There are appointments to go to, hospital visits,
              grocery shopping and bill payments, and home repairs that can`&apos;`t wait any longer! And that`&apos;`s just the start of it.
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
              so you don`&apos;`t have to take time off work and will get regular updates from our team.
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
              You are out of town and anxious that you can`&apos;`t help your parents in an emergency?
              We are here 24/7 to respond to any emergency - medical or otherwise - so that you can have peace of mind.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

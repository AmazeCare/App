/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Header from 'components/Header'

export default function AssociateCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Associate Care" />
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
              Amaze care provides this ultimate care experience for our clients.
            </p>
            <p className="my-2 text-justify">
              Have you noticed that your loved one is quiet, distracted or withdrawn at times?
              Are you struggling to deal with your own personal issues and work while wanting to be there for your parents but unable to do that?
              Amaze Care is an exceptional arrangement that permits them to have individual
              consideration while giving you an inward feeling of harmony when you can't be there yourself.
            </p>
            <p className="my-2 text-justify">
              Our caregivers are highly qualified and trained to assist elderly patients who are otherwise
              healthy but in need of some attention and social interaction.
              We offer a variety of services depending on the professional that you are looking for.
              For example:- if you need a caregiver some of the services are,
            </p>
            <p className="my-2 mx-4">
              <ul className="list-disc">
                <li> Light housekeeping </li>
                <li> Light Meal preparation </li>
                <li> Medication reminders </li>
                <li> Accompanying the client to social gatherings, doctor's appointments or to run errands </li>
                <li> Helping the client make appointments or schedule outings </li>
                <li>
                  Engaging the client in activities that they are interested in
                  (ex. playing cards, reading, talking about history, looking at photographs, etc.)
                </li>
                <li> Encouraging physical activity (walking, stretching, etc.) </li>
              </ul>
            </p>
            <p className="my-2 text-justify">
              When a loved one is home alone, isolation and worry can become a problem.
              At Amaze care, we address the specific needs of the client and their family.
              By doing so, clients remain happy, safe and engaged in their own home,
              all while allowing the family peace of mind that they are being cared for.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

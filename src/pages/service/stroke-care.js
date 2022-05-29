import React from 'react'
import Header from 'components/Header'

export default function StrokeCare() {
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
          </div>
        </div>
      </section>
    </main>
  );
}

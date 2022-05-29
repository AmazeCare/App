import React from 'react'
import Header from 'components/Header'

export default function RecreationCare() {
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
        <div className="container mx-auto">
          <div className="flex flex-col">
            <p className="my-2 text-justify">
              Are you worried that your loved one is at the home unable to move due to a physical disability,
              not to worry our recreational therapist can take care of this issue we have several programs
              tailored that the clients can choose from even if its bowling, sailing, fishing the list goes on,
              it all depends what is the best for the client. Call us to find out.

            </p>
            <p>Call us to find out.</p>
          </div>
        </div>
      </section>
    </main>
  );
}

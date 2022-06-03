import React from 'react'
import Header from 'components/Header'
import CancerCareImage from 'assets/images/Services/CancerCare.jpg'

export default function CancerCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Cancer Care" />
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
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap space-x-4 items-center bg-gray-100">
            <p className="my-2 text-center md:text-justify w-full md:w-[52%] mx-2">
              At Amaze Care, our care plans are tailored to comfort each individual and their specific needs.
              Customized home care will help the family to better deal with cancer treatments and manage it comfortably.
              our professional caregivers are highly qualified to help cancer patients during their treatments.
              Depending on your needs you could hire a Continuing care assistant, Licensed practical nurse, or a Registered nurse.
              <br />
              We can coordinate with different health professionals if there are specific orders that need to follow through.
              Specialized care creates a more comfortable home environment for patients with cancer during their treatment and recovery process.
            </p>
            <div className="w-full md:w-[40%]">
              <img
                alt=""
                src={CancerCareImage}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
          </div>
          <div className="flex flex-wrap space-x-4 mt-6 justify-evenly">
            <div className="my-2 text-center md:text-justify w-full md:w-[40%]">
              <h2>Customized continuous care plans</h2>
              <p className="my-2 text-justify">
                Amaze Care offers care schedules, full-time continuous care based on your needs.
                For those in need of additional assistance or full-time monitoring, our continuous care option is ideal.
                Seniors and their families benefit from around the clock monitoring and assistance for maximum safety and peace of mind.
              </p>
            </div>
            <div className="my-2 text-center md:text-justify w-full md:w-[40%]">
              <h2> Providing Professional Assistance and Personal Care </h2>
              <p className="my-2 text-justify">
                Having help and companionship during cancer treatments can be extremely beneficial for the patient, both in terms of support and recovery.
                In addition to offering companionship, our caregivers provide constant support and encouragement during the treatment process.
                Our care givers receive continuous education to ensure that they are prepared to provide excellent and superior care.
                Amaze Care provides safe, quality, reliable care for clients and offers peace of mind to family members.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

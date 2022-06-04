import React from 'react'
import Header from 'components/Header'
import CancerCareImage from 'assets/images/Services/CancerCare.jpg'
import Paragraph from 'components/common/paragraph';

export default function CancerCare() {
  return (
    <main>
      <Header title="Cancer Care" />
      <section className="py-20 bg-tertiary">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="my-2 text-center md:text-justify w-full md:w-[52%] mx-2">
              <Paragraph>
                <p>
                  At Amaze Care, our care plans are tailored to comfort each individual and their specific needs.
                  Customized home care will help the family to better deal with cancer treatments and manage it comfortably.
                  our professional caregivers are highly qualified to help cancer patients during their treatments.
                  Depending on your needs you could hire a Continuing care assistant, Licensed practical nurse, or a Registered nurse.
                  <br />
                  We can coordinate with different health professionals if there are specific orders that need to follow through.
                  Specialized care creates a more comfortable home environment for patients with cancer during their treatment and recovery process.
                </p>
              </Paragraph>
            </div>
            <div className="w-full md:w-[40%]">
              <img
                alt=""
                src={CancerCareImage}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-wrap justify-between md:space-x-8">
            <div className="my-2 w-full md:flex-1">
              <Paragraph heading="Customized continuous care plans">
                <p>
                  Amaze Care offers care schedules, full-time continuous care based on your needs.
                  For those in need of additional assistance or full-time monitoring, our continuous care option is ideal.
                  Seniors and their families benefit from around the clock monitoring and assistance for maximum safety and peace of mind.
                </p>
              </Paragraph>
            </div>
            <div className="my-2 w-full md:flex-1">
              <Paragraph heading="Providing Professional Assistance and Personal Care">
                <p>
                  Having help and companionship during cancer treatments can be extremely beneficial for the patient,
                  both in terms of support and recovery. In addition to offering companionship, our caregivers
                  provide constant support and encouragement during the treatment process.
                  Our care givers receive continuous education to ensure that they are prepared to provide excellent and superior care.
                  Amaze Care provides safe, quality, reliable care for clients and offers peace of mind to family members.
                </p>
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

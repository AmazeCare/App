import React from 'react'
import Header from 'components/Header'
import Paragraph from 'components/common/paragraph';
import { FaArrowRight } from 'react-icons/fa'

export default function ParkinsonCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Parkinson's Care" />
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph>
              <p>
                Parkinson&apos;s is a progressive neurological condition.
                The main symptoms are tremor, rigidity and slowness of movement, postural instability and poor balance.
                Although the disease affects patients differently, most Parkinson&apos;s sufferers are no longer able to perform
                their daily activities independently and require assistance:
              </p>
              <div className="my-2 mx-4 text-left">
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> A customized and comprehensive care plan to ensure that the client&apos;s needs are met</span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> The flexibility to choose different care and health care staff </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> The option for consistent 24/7 monitoring to prevent falls </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Companionship, assistance and support with daily tasks </span>
                </div>
                {/* <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Transportation for appointments, errands or social gatherings </span>
                </div> */}
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Providing a safe and positive environment that promotes independence </span>
                </div>
              </div>
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="py-20 text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph heading="Day and night care">
              <p>
                If your loved one is suffering from Parkinson&apos;s and cannot care for themselves, our caregivers can provide relief and support.
                Our highly trained caregivers and nurses can provide quality care,
                we will be assessing the patient and contact with related department or doctors to create a better care plan along with the client suggestions
              </p>
              <p>
                Our services are available 24 hours a day, 7 days a week.
                We provide the level of service that your loved one requires.
                Our caregivers have extremely flexible schedules and are available immediately.
              </p>
              <p>
                For reliable Parkinson&apos;s care, call to speak with a Care Manager about a customized care plan for your loved one.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react'
import Header from 'components/Header'
import Paragraph from 'components/common/paragraph';
import PallitiveCareImage from 'assets/images/Services/PalliativeCare/PallitiveCare.png'
// import { FaArrowRight } from 'react-icons/fa'

export default function PalliativeCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Palliative Care" />
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="my-2 text-center md:text-justify w-full md:w-[52%] mx-2">
              <Paragraph>
                <p>
                  When a loved-one reaches the stage where treatment is no longer possible and moves
                  into the phase of palliative care it can be a very difficult time for the patient and the family.
                </p>
                <p>
                  <b> Palliative Care is Best at Home </b>
                </p>
                <p>
                  When dealing with the reality of the palliative stage, being surrounded by the familiar environment of home can in itself provide some comfort and relief.
                  Being close to loved ones and neighbors, and having access to the things that one cherishes (pets, keepsakes, books, photos, etc.) bring a sense of connection and provide happy memories for the patient.
                  This familiarity of home can make the last days of life more enjoyable and fulfilled.
                </p>
              </Paragraph>
            </div>
            <div className="w-full md:w-[40%]">
              <img
                alt=""
                src={PallitiveCareImage}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-20 text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph heading="Palliative Support 24/7 to Maximize Comfort">
              <p>
                Home Care Assistance&apos;s caregivers provide continuous one-to-one palliative care in the comfort of the patient&apos;s own home.
                In doing so, they promote quality of life and dignity to the client while bringing peace of mind and respite for the family.
              </p>
              <p>
                Our qualified and compassionate caregivers understand the special needs involved in caring for those nearing the end of life.
                In addition to maximizing and maintaining existing function as long as possible, our caregivers can assist by:
              </p>
              <p className="my-2 mx-4 text-left">
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Ensuring that the patient is comfortable </span>
                </div>
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Turning the bedridden to prevent bed sores  </span>
                </div>
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Providing companionship and mediating depression </span>
                </div>
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Preparing meals </span>
                </div>
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Maintaining personal hygiene  </span>
                </div>
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Preventing a sense of abandonment  </span>
                </div>
                <div className="flex items-center space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Alerting the family when needed </span>
                </div>
              </p>
            </Paragraph>
          </div>
        </div>
      </section> */}
    </main>
  );
}

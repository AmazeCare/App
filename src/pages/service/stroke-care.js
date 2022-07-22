import React from 'react'
import Header from 'components/Header'
import { FaArrowRight } from 'react-icons/fa'
import Paragraph from 'components/common/paragraph';

export default function StrokeCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Stroke Care" />
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph>
              <p>
                When a person suffering from a stroke, the world goes upside down for them.
                They are forced with an overwhelming number of challenges that cause anxiety and frustration,
                activities can be stressful for the client and family.
              </p>
              <p>
                Amaze care has highly trained health workers who are dedicated to caring for your loved one with dignity and compassion.
                Our staff receives training in the special needs of stroke survivors and provides the patient with care that helps
                them with their daily routine. As part of our specialized care, clients can choose from
              </p>
              <p className="my-2 mx-4">
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Nursing care </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Recreation therapy </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Massage </span>
                </div>
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="py-20 text-center">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph heading="Peace of Mind for our Clients and Families">
              <p>
                Our main focus at Amaze care is to provide a safe and comfortable environment for our clients.
                By doing so, we aim to improve their quality of life.
                Call today to speak with a Care Manager about how our specialized stroke care can help your loved one,
                in the comfort of their own home.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}

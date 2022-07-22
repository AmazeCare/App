import React from 'react'
import Header from 'components/Header'
import Paragraph from 'components/common/paragraph';
import { FaArrowRight } from 'react-icons/fa'

export default function RecreationCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Recreation Care" />
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph>
              <p>
                Are you worried that your loved one is at the home unable to move due to a physical disability,
                not to worry our recreational department can take care of this issue we have several programs
                tailored that the clients can choose from even if its bowling, sailing, fishing the list goes on,
                it all depends what is the best for the client.
              </p>
              <div className="my-2 mx-4 text-left">
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Person centered care based on assessments and individualized treatment plans </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span>
                    Development and documentation of protocols (group and one on one) to identify
                    and reduce risk to patients
                  </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Evidence based practice </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Awareness of professional scopes of practice within the allied health care team </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span>
                    Work collaboratively to ensure a team oriented approach to person centered care
                    delivery
                  </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Build community capacity through partnerships </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> High level of knowledge of recreation and leisure </span>
                </div>
                <div className="flex items-baseline space-x-4 py-1">
                  <div className="text-secondary">
                    <FaArrowRight />
                  </div>
                  <span> Apply activities to help restore health and foster growth and development </span>
                </div>
              </div>
              <p>Call us for more info.</p>
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}

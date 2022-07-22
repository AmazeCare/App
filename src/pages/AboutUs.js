import React from 'react';
import OurTeam from 'components/OurTeam';
import Header from 'components/Header';
import Paragraph from 'components/common/paragraph';
import AboutUsImageOne from 'assets/images/AboutUS/AboutUs1.jpg'
import AboutUsImageTwo from 'assets/images/AboutUS/AboutUs2.jpg'
import { FaArrowRight } from 'react-icons/fa'

function AboutUs() {
  return (
    <main>
      <Header title="About Us" />
      <section className="py-20 bg-tertiary">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="w-full md:flex-1 text-center md:text-left">
              <Paragraph heading="Our Mission">
                <p>
                  Our mission at Amaze Care is to change the usual home care routine. We provide
                  clients with quality care that enables them to live happier, healthier lives at home.
                  We enfold a positive, client centered approach for our clients.
                </p>
                <div className="my-2 mx-4">
                  <div className="flex items-baseline space-x-4 py-1">
                    <div className="text-secondary">
                      <FaArrowRight />
                    </div>
                    <span> Continuous Care Experts</span>
                  </div>
                  <div className="flex items-baseline space-x-4 py-1">
                    <div className="text-secondary">
                      <FaArrowRight />
                    </div>
                    <span> Available 24/7 </span>
                  </div>
                  <div className="flex items-baseline space-x-4 py-1">
                    <div className="text-secondary">
                      <FaArrowRight />
                    </div>
                    <span> Client Centered Care </span>
                  </div>
                  <div className="flex items-baseline space-x-4 py-1">
                    <div className="text-secondary">
                      <FaArrowRight />
                    </div>
                    <span> Flexible Contracts </span>
                  </div>
                  <div className="flex items-baseline space-x-4 py-1">
                    <div className="text-secondary">
                      <FaArrowRight />
                    </div>
                    <span> Satisfaction </span>
                  </div>
                  <div className="flex items-baseline space-x-4 py-1">
                    <div className="text-secondary">
                      <FaArrowRight />
                    </div>
                    <span> Collaborative care </span>
                  </div>
                </div>
              </Paragraph>
            </div>
            <div className="w-full md:flex-1 py-4">
              <img
                alt="aboutustwo"
                src={AboutUsImageTwo}
                className="w-full align-middle shadow-lg rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="w-full md:flex-[0.5] py-4">
              <img
                alt="aboutusone"
                className="max-w-full rounded-lg shadow-lg"
                src={AboutUsImageOne}
              />
            </div>
            <div className="w-full md:flex-1 text-center md:text-justify">
              <Paragraph heading="Amaze Care - Compassionate Caregivers">
                <p>
                  Our employment criteria are well designed to get the best workers out there who are caring, compassionate and qualified.
                  Even though we receive a fair share of resumes, we do narrow it down before the interview.
                  We want our employees to reflect our values and mission with significant training and experience.
                  We recruit, hire and fire so that you never have to.
                  Of course, we don&apos;t want to fire someone who we&apos;ve invested so much time and money to recruit,
                  but if expectations are not met in your home then we are forced to remove and replace them immediately
                </p>
              </Paragraph>
              <Paragraph heading="Client and Caregiver Team">
                <p>
                  We always make sure we have the right caregiver for you depending on your situation,
                  even though all of our caregivers are qualified depending on what their profession is,
                  sometimes they have more knowledge and certification for different situations.
                  We often have clients who phone and are shopping around for the lowest price,
                  but bear in mind that a low-cost option will most likely not be the best quality option.
                  We encourage all of our potential clients to do their homework because we are confident
                  in our services and we are available anytime you want us to.
                </p>
              </Paragraph>
              <Paragraph heading="Amaze care approach to screening and hiring">
                <p>
                  Once we have done the interview and we have decided to go with the candidate,
                  we proceed with a thorough screening process, a full criminal background check,
                  verify professional references...etc. We take all the risk.
                  All you have to do is tell us how we can help you.
                </p>
              </Paragraph>
              <Paragraph heading="Mandatory training and Education">
                <p>
                  At Amaze Care we understand that our caregivers have to maintain a certain level of standard.
                  This is why we invest continued time and effort into keeping their training and education up to date.
                  We require our caregivers to attend specialized training in Dementia, Alzheimer&apos;s, Parkinson&apos;s, stroke recovery,
                  as well as post-hospitalization care.
                </p>
              </Paragraph>
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
    </main>
  )
}

export default AboutUs

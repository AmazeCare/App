/* eslint-disable no-debugger */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import OurTeam from 'components/OurTeam';
import Header from 'components/Header';

function AboutUs() {
  return (
    <main>
      <Header bgcolor="bg-white" title="About Us" />
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
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Our Mission
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4">
                Our mission at Amaze Care is to change the usual home care routine. We provide
                clients with quality care that enables them to live happier, healthier lives at home.
                We enfold a positive, client centered approach for our clients.
              </p>
              <p className="text-lg font-light leading-relaxed my-4 mx-4">
                <ul className="list-disc">
                  <li> Continuous Care Experts </li>
                  <li> Available 24/7 </li>
                  <li> Client Centered Care </li>
                  <li> Flexible Contracts </li>
                  <li> Satisfaction </li>
                  <li> Collaborative care</li>
                </ul>
              </p>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-20 bg-secondary">
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
              className="text-secondary fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>

        <div className="container mx-auto px-4">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-1/3 ml-auto mr-auto px-4 py-8">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div className="w-full md:w-1/2 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl text-white font-semibold">Amaze Care – Compassionate Caregivers</h3>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  Our employment criteria are well designed to get the best workers out there who are caring, compassionate and qualified.
                  Even though we receive a fair share of resumes, we do narrow it down before the interview.
                  We want our employees to reflect our values and mission with significant training and experience.
                  We recruit, hire and fire so that you never have to.
                  Of course, we don’t want to fire someone who we’ve invested so much time and money to recruit,
                  but if expectations are not met in your home then we are forced to remove and replace them immediately
                </p>
                <h3 className="text-3xl text-white font-semibold">Client and Caregiver Team</h3>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  We always make sure we have the right caregiver for you depending on your situation,
                  even though all of our caregivers are qualified depending on what their profession is,
                  sometimes they have more knowledge and certification for different situations.
                  We often have clients who phone and are shopping around for the lowest price,
                  but bear in mind that a low-cost option will most likely not be the best quality option.
                  We encourage all of our potential clients to do their homework because we are confident in our services and we are available anytime you want us to.
                </p>
                <h3 className="text-3xl text-white font-semibold">Amaze care approach to screening and hiring</h3>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  Once we have done the interview and we have decided to go with the candidate,
                  we proceed with a thorough screening process, a full criminal background check,
                  verify professional references...etc. We take all the risk.
                  All you have to do is tell us how we can help you.
                </p>
                <h3 className="text-3xl text-white font-semibold">Mandatory training and Education</h3>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  At Amaze Care we understand that our caregivers have to maintain a certain level of standard.
                  This is why we invest continued time and effort into keeping their training and education up to date.
                  We require our caregivers to attend specialized training in Dementia, Alzheimer’s, Parkinson’s, stroke recovery, as well as post-hospitalization care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <OurTeam />
    </main>
  )
}

export default AboutUs

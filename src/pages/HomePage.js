import React from 'react'
import mainImage from 'assets/doctor.png'
import Paragraph from 'components/common/paragraph';
import { BiHealth } from 'react-icons/bi';
import {
  FaBuromobelexperte, FaClock, FaHospitalUser, FaFileContract, FaInfoCircle,
} from 'react-icons/fa'
import Features from 'components/common/features';

function HomePage() {
  return (
    <main>
      <section className="px-4 sm:px-6 lg:px-8 bg-white">
        <div className="container-layout flex flex-col lg:flex-row">
          <div className="text-center lg:text-left flex-1 lg:w-2/3 lg:pt-16 lg:pr-4">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="xl:inline text-primary">Amaze</span>
              <span className="text-secondary xl:inline">Care</span>
            </h1>
            <h2> Nurses doing nursing things.</h2>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              It&#39;s all depending on what do you need, we have a variety of health
              care professionals that we can help you with, qualified CCA, Lpn&#39;s and
              Rn&#39;s, massage therapist, recreational therapist. Etc.
            </p>
            <div className="m-auto lg:m-0 w-2/3 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="/contact-us" className="button-link">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <img className="block mx-auto my-4 lg:my-0 sm:mx-0 sm:shrink-0 object-cover w-1/2" src={mainImage} alt="Woman's Face" />
        </div>
      </section>

      <section className="py-20 bg-tertiary">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="md:flex-1 text-center mx-auto">
              <Paragraph heading="What Is Home Care?">
                <p>
                  Home care is all about trust. It is about feeling comfortable with a home care
                  provider coming into your own private space.
                </p>
                <p>
                  Most of the elderly would prefer to stay at home rather than going to a retirement
                  home. But when frailty, forgetfulness or chronic illness makes living alone too
                  difficult, being forced to look for a nursing home, but Amaze care allows our
                  clients to maintain their quality of life and lifestyle at their own comfort zone
                  where they call it Home.
                </p>
                <p>
                  It&apos;s all depending on what do you need, we have a variety of health care
                  professionals that we can help you with, qualified Nurses Lpn&apos;s and Rn&apos;s, massage
                  therapist, recreational therapist. Etc.
                </p>
              </Paragraph>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Features
              icon={<BiHealth />}
              heading="Why Choose Amaze Care?"
              content="We strive to provide the best possible service out there. Here are a few reasons,
                    among many others."
            />
            <Features
              icon={<FaBuromobelexperte />}
              heading="Continuous Care Experts"
              content="We specialize in around the clock care to help seniors live well at home."
            />
            <Features
              icon={<FaClock />}
              heading="Available 24/7"
              content="Care managers are on call for clients and their families, even during nights and
                    weekends."
            />
            <Features
              icon={<FaHospitalUser />}
              heading="Client Centered Care"
              content="Our unique approach to care promotes healthy mind, body and spirit."
            />
            <Features
              icon={<FaFileContract />}
              heading="Flexible Contracts"
              content="Use our services only as long as you're 100% satisfied."
            />
            <Features
              icon={<FaInfoCircle />}
              heading="Collaborative care"
              content="We&apos;re honored to be connected with qualified individuals to get relevant
                    information and even one on one care."
            />
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

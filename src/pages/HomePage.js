/* eslint-disable max-len */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import mainImage from 'assets/main-page.png'

function HomePage() {
  return (
    <main>
      <section className="px-4 sm:px-6 lg:px-8 shadow bg-white">
        <div className="container mx-auto flex flex-col lg:flex-row">
          <div className="text-center lg:text-left flex-1 lg:w-2/3 lg:pt-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="xl:inline text-primary">Amaze</span>
              <span className="text-secondary xl:inline">Care</span>
            </h1>
            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo.
              Elit sunt amet fugiat veniam occaecat fugiat aliqua.
            </p>
            <div className="m-auto lg:m-0 w-2/3 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a href="" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-secondary md:py-4 md:text-lg md:px-10">
                  Book Now
                </a>
              </div>
            </div>
          </div>
          <img className="block mx-auto sm:mx-0 sm:shrink-0" src={mainImage} alt="Woman's Face" />
        </div>
      </section>

      <section className="py-20 bg-gray-200 text-primary relative">
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
              className="text-gray-200 fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>

        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap -mx-8">
            <div className="w-full lg:w-1/2 px-8">
              <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading ">
                  What Is Home Care?
                </h2>
                <p className="mb-8 leading-loose ">
                  Home care is all about trust. It is about feeling comfortable with a home care
                  provider coming into your own private space.
                </p>
                <p className="mb-8 leading-loose ">
                  Most of the elderly would prefer to stay at home rather than going to a retirement
                  home. But when frailty, forgetfulness or chronic illness makes living alone too
                  difficult, being forced to look for a nursing home, but Amaze care allows our
                  clients to maintain their quality of life and lifestyle at their own comfort zone
                  where they call it Home.
                </p>
                <p className="mb-8 leading-loose ">
                  It’s all depending on what do you need, we have a variety of health care
                  professionals that we can help you with, qualified Nurses Lpn’s and Rn’s, massage
                  therapist, recreational therapist. Etc.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <ul className="space-y-12">
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-secondary">
                      1
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold ">
                      Why Choose Amaze Care?
                    </h3>
                    <p className=" leading-loose">
                      We strive to provide the best possible service out there. Here are a few reasons,
                      among many others.
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-secondary">
                      2
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold ">
                      Continuous Care Experts
                    </h3>
                    <p className=" leading-loose">
                      We specialize in around the clock care to help seniors live well at home.
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-secondary">
                      3
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold ">
                      Available 24/7
                    </h3>
                    <p className=" leading-loose">
                      Care managers are on call for clients and their families, even during nights and
                      weekends.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white text-primary relative">
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

        <div className="container mx-auto p-4 sm:p-6 lg:p-8">
          <div className="flex flex-wrap -mx-8">
            <div className="w-full lg:w-1/2 px-8">
              <ul className="space-y-12">
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-secondary">
                      4
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold ">
                      Client Centered Care
                    </h3>
                    <p className=" leading-loose">
                      Our unique approach to care promotes healthy mind, body and spirit.
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-secondary">
                      5
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold ">
                      Flexible Contracts
                    </h3>
                    <p className=" leading-loose">
                      Use our services only as long as you&#39;re 100% satisfied.
                    </p>
                  </div>
                </li>
                <li className="flex -mx-4">
                  <div className="px-4">
                    <span className="flex w-16 h-16 mx-auto items-center justify-center text-2xl font-bold font-heading rounded-full bg-blue-50 text-secondary">
                      6
                    </span>
                  </div>
                  <div className="px-4">
                    <h3 className="my-4 text-xl font-semibold ">
                      Collaborative care
                    </h3>
                    <p className=" leading-loose">
                      We’re honored to be connected with qualified individuals to get relevant
                      information and even one on one care.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-1/2 px-8">
              <div className="mb-12 lg:mb-0 pb-12 lg:pb-0 border-b lg:border-b-0">
                <h2 className="mb-4 text-3xl lg:text-4xl font-bold font-heading ">
                  What is Continuous Care?
                </h2>
                <p className="mb-8 leading-loose ">
                  For people who are looking for an alternative instead of going to a facility, and
                  wants the comfort and safety of round-the-clock monitoring and care, we offer
                  24/7 continuous care. A caregiver comes to the senior’s home and stays around the
                  clock. With continuous care, a caregiver is always watching over the senior and is
                  ready to assist in all activities of daily living.
                </p>
                <p className="mb-8 leading-loose ">
                  Continuous care does not mean that the caregiver moves into the senior’s home our
                  care givers follow the care plan that we created with the family and follow them
                  accordingly, ensuring high level of personal care and companionship that they
                  deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default HomePage

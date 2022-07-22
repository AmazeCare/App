import React from 'react'
import Header from 'components/Header'
import HomeCareImage from 'assets/images/Services/HomeCare1.jpg'
import Paragraph from 'components/common/paragraph';
import { FaArrowRight } from 'react-icons/fa'

export default function HomeCare() {
  return (
    <main>
      <Header title="Home Care" />
      <section className="py-20 bg-tertiary">
        <div className="container-layout text-center md:text-justify">
          <div className="flex flex-wrap items-center">
            <Paragraph>
              <p>
                Do you find yourself needing more care and help with your daily tasks and activities?
                We can help you by carefully assessing your situation and your daily routines and
                likes and dislikes to our profile and follow it carefully,
                so that you don&apos;t have to move from your home to a random facility.
              </p>
              <p>
                We aim to help our clients in their home even if home is a facility.
                We have healthcare personnel that you can choose from and organize a plan that can help you with your routines.
              </p>
            </Paragraph>
            <Paragraph heading="Day and Night care">
              <p>
                AmazeCare offers day and night schedules where you can choose what you want,
                you also have the option to set medical appointments or outings during that period.
                All you have to do is let our team know about what you want and we will take care of it for you.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-layout">
          <div className="flex flex-wrap space-x-4 items-center">
            <div className="m-2 md:w-[55%]">
              <p> With Amaze care, clients enjoy help with: </p>
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Grocery shopping and running errands </span>
              </div>
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Cooking (meal and snack preparation) </span>
              </div>
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Light housekeeping, dishes, changing the bed, laundry </span>
              </div>
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Assistance with bathing, toileting and dressing </span>
              </div>
              {/* <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Transportation to and assistance with doctor&apos;s appointments, shopping, pharmacy outings </span>
              </div> */}
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Assisting with walking, exercise and mobility </span>
              </div>
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Giving status updates and feedback to the family </span>
              </div>
              <div className="flex items-baseline space-x-4 py-1">
                <div className="text-secondary">
                  <FaArrowRight />
                </div>
                <span> Medication reminders </span>
              </div>
              <p className="my-2 text-justify"> And more! </p>
            </div>
            <div className="md:w-[40%]">
              <img
                alt=""
                src={HomeCareImage}
                className="align-middle rounded-lg shadow-2xl"
              />
            </div>
          </div>
          <div className="py-4">
            <Paragraph heading="Dedicated and Professional Caregivers">
              <p>
                Our caregivers are dedicated and compassionate, focusing on the overall well-being of our clients.
                Rest assured that we are on call to serve you 24 hours a day, 7 days a week.
                Give us a try. There is no long-term contract for our hourly services.
                You can use our assistance for as little or as much as you need.
                Call a Care Coordinator to learn more.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}

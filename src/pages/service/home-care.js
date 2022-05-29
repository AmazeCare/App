import React from 'react'
import Header from 'components/Header'

export default function HomeCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Home Care" />
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
        <div className="container mx-auto">
          <div className="flex flex-col">
            <p className="my-2 text-justify">
              Do you find yourself needing more care and help with your daily tasks and activities?
              We can help you by carefully assessing your situation and your daily routines and likes and dislikes to our profile and follow it carefully,
              so that you don`&apos;`t have to move from your home to a random facility.
            </p>
            <p className="my-2 text-justify">
              We aim to help our clients in their home even if home is a facility.
              We have healthcare personnel that you can choose from and organize a plan that can help you with your routines.
            </p>
            <h2>Day and night care</h2>
            <p className="my-2 text-justify">
              AmazeCare offers day and night schedules where you can choose what you want, you also have the option to set medical appointments or outings during that period.
              All you have to do is let our team know about what you want and we will take care of it for you.
            </p>
            <p className="my-2 text-justify">
              With Amaze care, clients enjoy help with:
            </p>
            <p className="my-2 mx-4">
              <ul className="list-disc">
                <li> Grocery shopping and running errands </li>
                <li> Cooking (meal and snack preparation) </li>
                <li> Light housekeeping, dishes, changing the bed, laundry </li>
                <li> Assistance with bathing, toileting and dressing </li>
                <li> Transportation to and assistance with doctor`&apos;`s appointments, shopping, pharmacy outings </li>
                <li> Assisting with walking, exercise and mobility </li>
                <li> Giving status updates and feedback to the family </li>
                <li> Medication reminders </li>
              </ul>
            </p>
            <p className="my-2 text-justify"> And more! </p>
            <h2> Dedicated and Professional Caregivers </h2>
            <p className="my-2 text-justify">
              Our caregivers are dedicated and compassionate, focusing on the overall well-being of our clients.
              Rest assured that we are on call to serve you 24 hours a day, 7 days a week.
              Give us a try. There is no long-term contract for our hourly services.
              You can use our assistance for as little or as much as you need.
              Call a Care Coordinator to learn more.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

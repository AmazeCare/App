import React from 'react'
import Header from 'components/Header'
import Paragraph from 'components/common/paragraph';
import Features from 'components/common/features';

import { BiHealth } from 'react-icons/bi';
import {
  FaBuromobelexperte, FaClock, FaHospitalUser,
} from 'react-icons/fa'

export default function SubstituteHomeCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Substitute Home Care" />
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph>
              <p>
                Our Substitute care administration is a complete care and wellness health approach for seniors
                who can profit from a full-time weekly care plan.
                Moreover, it is also a break for the family members who have to deal with day to day activities.
                We realize that sometimes it&apos;s hard to balance everything at once.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="py-20 text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph heading="Professional care and services">
              <p>
                Our services will have the quality that you look for, our substitute care service literally means
                that we will take care of everything from appointments to paying bills and so on.
              </p>
              <p>
                Our care team anticipates your parent&apos;s needs, whether it&apos;s for healthcare or other home related issues.
              </p>
              <p>
                You want your parents to enjoy their home as long as possible,
                but it&apos;s getting difficult day by day for you to give them the support they need.
                There are appointments to go to, hospital visits,
                grocery shopping and bill payments, and home repairs that can&apos;t wait any longer! And that&apos;s just the start of it.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-col">
            <Paragraph heading="Quality time with your loved ones">
              <p>
                Let us take care of all the daily tasks and details of managing the home.
                You can have peace of mind knowing that your parents are safe and living well with someone by their side
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Features
                  icon={<BiHealth />}
                  heading="A care team"
                  content="with a registered nurse is dedicated to your parents healthcare needs.
                  We can book appointments, accompany your loved-one to the doctor or dentist,
                  so you don&apos;t have to take time off work and will get regular updates from our team."
                />
                <Features
                  icon={<FaBuromobelexperte />}
                  heading="Home maintenance"
                  content="Our team makes sure that everything is functioning as it should in the home.
                  We can take care of booking and supervising the repairs for you.
                  We also help with technology such as home alarms, TVs and even setting up Zoom calls or any other applications"
                />
                <Features
                  icon={<FaClock />}
                  heading="Outings and errands"
                  content="Our caregivers are trained to accompany your loved ones even if they have limited mobility.
                  We coordinate personal activities including social outings, errands, appointments."
                />
                <Features
                  icon={<FaHospitalUser />}
                  heading="On-call for emergencies."
                  content="You are out of town and anxious that you can&apos;t help your parents in an emergency?
                  We are here 24/7 to respond to any emergency - medical or otherwise - so that you can have peace of mind."
                />
              </div>
            </Paragraph>
          </div>
        </div>
      </section>
    </main>
  );
}

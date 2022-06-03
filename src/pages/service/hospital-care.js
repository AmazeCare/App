import React from 'react'
import Header from 'components/Header'
import HospitalCareImage1 from 'assets/images/Services/HospitalCare1.jpg'
import HospitalCareImage2 from 'assets/images/Services/HospitalCare2.jpg'

export default function HospitalCare() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Hospital Care" />
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
        <div className="container mx-auto sm:px-6 md:px-12 lg:px-18">
          <div className="bg-gray-100 flex flex-wrap items-center">
            <p className="m-4 text-justify w-full md:w-[50%] text-center">
              Being hospitalized for an emergency or a planned procedure or illness can be a very stressful event for both the patient and their family.
              Family members are often torn between busy schedules and needing to be at the hospital with their loved one.
              Amaze care provides qualified personnel who can stay with your loved one while they are at the hospital.
              Having a caregiver present who is designated specifically for your loved one means that he/she feels reassured that someone is there at all times.
              This will create a calming experience for the patient and thereby reduce anxiety, and help the patient recover at a higher pace.
            </p>
            <div className="w-full md:w-[35%] m-4">
              <img
                alt=""
                src={HospitalCareImage1}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
            <div className="w-full md:w-[35%] m-4">
              <img
                alt=""
                src={HospitalCareImage2}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
            <p className="m-4 text-justify w-full md:w-[50%]">
              Pre-care before hospitalization carefully delivering all the essentials and staying with the client during the hospital stay,
              following the patient after discharge and helping to go through all that along with post hospital care,
              accompanying the client to his home/facility and continuing with the care.
              Clients can choose from any of these services or all of them and also will have the opportunity to select from continuing care assistant,
              licensed practical nurse and registered nurse.
            </p>
          </div>
          <h2 className="mt-4">From hospital to home</h2>
          <p className="text-justify">
            The flexibility of our services means that you get the care you need when you need it.
            Our caregivers are available anytime, anywhere.
            We know that hospital admissions and discharges are sometimes unexpected,
            so we can be there even on very short notice.
            Contact a Care Manager today at to discuss a Hospital or Post-Hospital Care plan that can make
            hospital admission and post-hospital recovery a more relaxing experience.
          </p>
        </div>
      </section>
    </main>
  );
}

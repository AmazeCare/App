import React from 'react'
import Header from 'components/Header'
import HospitalCareImage1 from 'assets/images/Services/HospitalCare1.jpg'
import HospitalCareImage2 from 'assets/images/Services/HospitalCare2.jpg'
import Paragraph from 'components/common/paragraph';
// import Paragraph from 'components/common/paragraph'

export default function HospitalCare() {
  return (
    <main>
      <Header title="Hospital Care" />
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="w-full md:w-[60%]">
              <Paragraph>
                <p>
                  Being hospitalized for an emergency or a planned procedure or illness can be a very stressful event for both the patient and their family.
                  Family members are often torn between busy schedules and needing to be at the hospital with their loved one.
                  Amaze care provides qualified personnel who can stay with your loved one while they are at the hospital.
                  Having a caregiver present who is designated specifically for your loved one means that he/she feels reassured that someone is there at all times.
                  This will create a calming experience for the patient and thereby reduce anxiety, and help the patient recover at a higher pace.
                </p>
              </Paragraph>
            </div>
            <div className="w-full md:w-[35%]">
              <img
                alt=""
                src={HospitalCareImage1}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 text-center md:text-justify">
        <div className="container-layout">
          <div className="flex flex-wrap items-center justify-between md:space-x-8">
            <div className="w-full md:w-[35%]">
              <img
                alt=""
                src={HospitalCareImage2}
                className="align-middle rounded-lg shadow-2xl my-5"
              />
            </div>
            <Paragraph>
              <p className="w-full md:w-[60%]">
                Pre-care before hospitalization carefully delivering all the essentials and staying with the client during the hospital stay,
                following the patient after discharge and helping to go through all that along with post hospital care,
                accompanying the client to his home/facility and continuing with the care.
                Clients can choose from any of these services or all of them and also will have the opportunity to select from continuing care assistant,
                licensed practical nurse and registered nurse.
              </p>
            </Paragraph>
          </div>
        </div>
      </section>
      <section className="py-20 bg-tertiary text-center md:text-justify">
        <div className="container-layout">
          <Paragraph heading="From hospital to home">
            <p>
              The flexibility of our services means that you get the care you need when you need it.
              Our caregivers are available anytime, anywhere.
              We know that hospital admissions and discharges are sometimes unexpected,
              so we can be there even on very short notice.
              Contact a Care Manager today, to discuss a Hospital or Post-Hospital Care plan that can make
              hospital admission and post-hospital recovery a more relaxing experience.
            </p>
          </Paragraph>
        </div>
      </section>
    </main>
  );
}

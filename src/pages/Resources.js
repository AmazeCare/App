import React from 'react';
import Header from 'components/Header';

function Resources() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Resources" />
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
          <div className="text-[20px]">
            <h1 className="text-[40px] pb-[20px]"> Links </h1>
            <p>
              ALS Society of Canada
              {' '}
              <a className="link" target="_blank" href="https://als.ca/" rel="noreferrer"> als.ca </a>
            </p>
            <p>
              Alzheimer Society of Nova Scotia
              {' '}
              <a className="link" target="_blank" href="https://alzheimer.ca/ns/en" rel="noreferrer"> alzheimer.ns.ca </a>
            </p>
            <p>
              Carers Canada
              {' '}
              <a className="link" target="_blank" href="https://www.carerscanada.ca/" rel="noreferrer"> carerscanada.ca </a>
            </p>
            <p>
              Canadian Mental Health Association
              {' '}
              <a className="link" target="_blank" href="http://www.cmha.ca/" rel="noreferrer"> cmha.ca </a>
            </p>
            <p>
              Canadian Virtual Hospice
              {' '}
              <a className="link" target="_blank" href="http://virtualhospice.ca/" rel="noreferrer"> virtualhospice.ca </a>
            </p>
            <p>
              Caregivers Nova Scotia
              {' '}
              <a className="link" target="_blank" href="http://www.caregiversns.org/" rel="noreferrer"> caregiversns.org </a>
            </p>
            <p>
              CARP (Canadian Association for Fifty Plus)
              {' '}
              <a className="link" target="_blank" href="http://www.50plus.com/" rel="noreferrer"> 50plus.com </a>
            </p>
            <p>
              Continuing Care Nova Scotia novascotia.ca/dhw/ccs/
              {' '}
              <a className="link" target="_blank" href="http://novascotia.ca/dhw/ccs/" rel="noreferrer"> novascotia.ca/dhw/ccs/ </a>
            </p>
            <p>
              Multiple Sclerosis Society of Canada
              {' '}
              <a className="link" target="_blank" href="http://www.mssociety.ca/" rel="noreferrer"> mssociety.ca </a>
            </p>
            <p>
              Parkinson Society
              {' '}
              <a className="link" target="_blank" href="http://www.parkinson.ca/" rel="noreferrer"> parkinson.ca </a>
            </p>
            <p>
              Schizophrenia Society of Nova Scotia
              {' '}
              <a className="link" target="_blank" href="http://www.ssns.ca/" rel="noreferrer"> ssns.ca </a>
            </p>
          </div>
        </div>
      </section>

      {/* <section className="relative py-20 bg-secondary">
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
            <div className="w-full md:w-4/12 ml-auto mr-auto px-4 py-8">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
              />
            </div>
            <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
              <div className="md:pr-12">
                <h3 className="text-3xl text-white font-semibold">What is Continuous Care?</h3>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  For people who are looking for an alternative instead of going to a facility,
                  and wants the comfort and safety of round-the-clock monitoring and care, we offer 24/7 continuous care.
                  A caregiver comes to the senior's home and stays around the clock. With continuous care,
                  a caregiver is always watching over the senior and is ready to assist in all activities of daily living.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-white">
                  Continuous care does not mean that the caregiver moves into the senior's home our care givers follow
                  the care plan that we created with the family and follow them accordingly,
                  ensuring high level of personal care and companionship that they deserve.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </main>
  )
}

export default Resources

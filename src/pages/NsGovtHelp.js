import React from 'react';
import Header from 'components/Header';

function NsGovtHelp() {
  return (
    <main>
      <Header bgcolor="bg-white" title="NS Govt. Help" />
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
            <div className="w-full md:w-5/12 mr-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Supportive Care
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4">
                The Supportive Care Program supports eligible Nova Scotians with cognitive impairments
                (difficulty thinking, concentrating, remembering, etc.)
                by providing them with up to $1,000/month for Home Support Services (personal care, respite, meal preparation and household chores).
                Under this program people may also be eligible to receive reimbursement for snow removal services up to $495/year.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4">
                To receive funding for Supportive Care, you must:
                <ul className="list-disc ml-[24px]">
                  <li> Be a Nova Scotia resident with a valid Health Card. </li>
                  <li> Have significant memory loss and memory problems that affect daily functioning.</li>
                  <li> Be deemed by Continuing Care as needing a minimum of 25 hours/month of care support.</li>
                  <li> Have a Substitute Decision Maker (someone who will act on your behalf and has signed an agreement that defines terms and conditions for this program).</li>
                </ul>
              </p>
            </div>
            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
              </div>
            </div>
          </div>

          <div className="text-lg font-light leading-relaxed mt-0 mb-4">
            <h3> How do I get Supportive Care? </h3>
            <p>
              You can apply by calling Continuing Care toll-free at 1-800-225-7225.
              Once approved, the money will be deposited into your bank account by the Department of Health and Wellness every month.
              All receipts for services must be submitted to the Nova Scotia Health Authority.
            </p>
          </div>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4">
            <h3> How can I get reimbursed for snow removal costs? </h3>
            <p>
              Once a Supportive Care recipient has been approved for assistance with snow removal services, he/she will be reimbursed for up to $495/year.
              All receipts for services must be submitted to the Nova Scotia Health Authority for reimbursement.
              You must be considered low income, which is an annual net income of $26,165 or less if single or $41,165 or less if married, to be eligible for reimbursement of snow removal costs.
            </p>
          </div>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4">
            <h3> Who can provide home support and snow removal services? </h3>
            <p>
              There are many companies who provide these services.
              Some can be found in the Department of Seniors Programs for Positive Aging, which can be read online at Programs for Positive Aging.
            </p>
            <p>
              Home support and snow removal services may also be purchased from private companies or people living within your community.
            </p>
            <p>
              Funding under this program cannot be used to purchase services from:
              <ul className="list-disc ml-[24px]">
                <li>
                  A person or organization providing home support and/or snow removal services and who also owns,
                  rents or manages the household / facility the client lives in (e.g., an assisted living facility).
                </li>
                <li>
                  Family members of a Supportive Care client, including a spouse/partner, children/grandchildren, parent/grandparent, siblings, aunts/uncles and nephews/nieces.
                </li>
              </ul>
            </p>
          </div>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4">
            <h3> Will this funding need to be reported as income on my income tax return? </h3>
            <p>
              No, you do not have to report this funding as income on your income tax return because it is considered payment for medical expenses (attendant/respite services) by the Canada Revenue Agency.
            </p>
            <p>
              Expenses incurred under this program cannot be claimed when filing income tax returns.
            </p>
          </div>
          <div className="text-lg font-light leading-relaxed mt-0 mb-4">
            <h3> Policies and Standards </h3>
            <p>
              The  Department of Health and Wellness, Continuing Care Division has created  policies and monitoring standards to ensure that there is a consistent quality  of care for those who need services outside of the hospital, in  their home, or in the community.
            </p>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NsGovtHelp

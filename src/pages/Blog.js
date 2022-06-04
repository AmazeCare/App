import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BsArrowRight } from 'react-icons/bs'
import Header from 'components/Header';

export default function Blog() {
  const navigate = useNavigate();
  return (
    <main>
      <Header bgcolor="bg-white" title="Blog" />
      <section className="py-20 bg-tertiary">
        <div className="container-layout">
          <div className="py-4 px-8 w-full flex justify-between bg-secondary">
            <p className="focus:outline-none text-sm text-white font-semibold tracking-wide">NS Govt. Help</p>
            <p className="focus:outline-none text-sm text-white font-semibold tracking-wide">13TH Oct, 2020</p>
          </div>
          <div className="bg-gray-100 px-10 py-6 rounded-bl-3xl rounded-br-3xl">
            <h1 className="focus:outline-none text-4xl text-gray-900 font-semibold tracking-wider">NS Govt. Help</h1>
            <p className="focus:outline-none text-gray-700 text-base lg:text-lg lg:leading-8 tracking-wide mt-6 w-11/12">
              The Supportive Care Program supports eligible Nova Scotians with cognitive impairments
              (difficulty thinking, concentrating, remembering, etc.) by providing them with up to $1,000/month for Home Support Services
              (personal care, respite, meal preparation and household chores).
              Under this program people may also be eligible to receive reimbursement for snow removal services up to $495/year.
            </p>
            <div className="w-full flex justify-end text-primary">
              <button
                type="button"
                onClick={() => navigate('/ns-govt-help')}
                className="focus:outline-none focus:ring-2 ring-offset-2 focus:ring-gray-600 hover:opacity-75 mt-4 justify-end flex items-center cursor-pointer"
              >
                <span className="text-base tracking-wide mr-2">Read more</span>
                <BsArrowRight />
              </button>
            </div>
            <div className="h-5 w-2" />
          </div>
        </div>
      </section>
    </main>
  )
}

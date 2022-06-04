/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-script-url */
/* eslint-disable react/jsx-no-script-url */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable max-len */
import PropTypes from 'prop-types'
import React from 'react';

function RenderTeamDetails({ name, image, title }) {
  return (
    <div className="sm:w-3/4 md:w-6/12 lg:relative pb-16 xl:max-w-lg lg:w-3/12">
      <div className="overflow-hidden">
        <div className="lg:absolute lg:-mt-20 w-full flex justify-center">
          <div className="h-32 w-32">
            <img src={image} alt={name} className="rounded-full object-cover h-full w-full shadow-md" />
          </div>
        </div>
        <div className="px-6 mt-4 lg:mt-16">
          <div className="font-bold text-primary text-3xl text-center pb-1">{name}</div>
          <p className="text-secondary text-sm text-center">{title}</p>
          <div className="w-full flex justify-center pt-5 pb-5">
            <a href="javascript:void(0)" className="mx-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitter">
                  <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                </svg>
              </div>
            </a>
            <a href="javascript:void(0)" className="mx-5">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="#718096" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                  <rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

RenderTeamDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

function OurTeam() {
  const items = [{
    name: 'JEEVAN JOSEPH',
    image: '',
    title: 'DIRECTOR OF CARE AND DEVELOPMENT',
  }, {
    name: 'ADILADE GONSALVES',
    image: '',
    title: 'DIRECTOR OF OPERATIONS',
  }]

  return (
    <div className="pt-16 bg-tertiary">
      <div className="container flex justify-center text-center mx-auto">
        <div className="mb-20">
          <h1 className="">BUILDING TEAM</h1>
          <h3 className="">The Talented People Behind the Scenes of the Organization</h3>
        </div>
      </div>
      <div className="w-full px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-center flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {items?.map((item) => <RenderTeamDetails name={item.name} title={item.title} image={item.image} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;

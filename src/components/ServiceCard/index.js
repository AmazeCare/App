/* eslint-disable no-debugger */
/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/anchor-is-valid */
import PropTypes from 'prop-types'
import React from 'react'
import rightArrow from 'assets/icons/right-arrow.svg'
import 'styles/components/Header/header.scss'

function ServiceCard({
  title, iconSrc, children, subParagraph,
}) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="p-3 bg-slate-50 border border-secondary rounded-lg px-5 py-6">
        {iconSrc}
        <span className="font-bold text-xl">{title}</span>
        <p className="my-2 text-justify">
          {`${subParagraph.substring(0, 200)}.....`}
        </p>
        <button
          type="button"
          onClick={() => setShowModal(true)}
          className="text-white flex flex-row items-center bg-primary hover:bg-secondary focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mt-4"
        >
          <img src={rightArrow} width="20" height="20" alt="rightWallArrow" />
          <span className="ml-2">Learn more</span>
        </button>
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto my-auto max-w-3xl">
              {/* content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {title}
                  </h3>
                  <button
                    type="button"
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-primary h-6 w-6 text-2xl block outline-none focus:outline-none">
                      x
                    </span>
                  </button>
                </div>
                {/* body */}
                <div className="relative text-[14px] p-6 flex-auto">
                  {children}
                </div>
                {/* footer */}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-primary text-white font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-secondary outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" />
        </>
      ) : null}
    </>
  )
}

ServiceCard.propTypes = {
  children: PropTypes.node.isRequired,
  iconSrc: PropTypes.node.isRequired,
  subParagraph: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
}

export default ServiceCard

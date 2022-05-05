import React from 'react';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import {
  FacebookIcon, TwitterIcon, GoogleIcon, InstagramIcon, LinkedInIcon,
} from 'assets/icons/social-icons'

function ContactUs() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Contact Us" />
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
          <div className="flex flex-wrap">
            <div className="w-full mb-16 md:w-5/12 px-4 mr-auto ml-auto">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Have Questions?
              </h1>
              <p> Arrange for a free consultation with a home care specialist </p>
              <p> Our Care Managers are available to answer your questions and help you make the best choice for in-home care</p>
              <ContactForm />
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Contact us:
              </h1>
              <address>
                <b> Email Us at: </b>
                <br />
                <a href="mailto:info@amazecare.ca">info@amazecare.ca</a>
                <br />
                <br />
                <b> Visit us at: </b>
                <br />
                Amaze Care
                <br />
                6 Danica dr, Pinegrove,
                <br />
                Bridgewater, Canada, B4V 7Z2
              </address>
              <div className="flex mt-8">
                <a href="#!" className="mr-6 text-primary">
                  <FacebookIcon />
                </a>
                <a href="#!" className="mr-6 text-primary">
                  <TwitterIcon />
                </a>
                <a href="#!" className="mr-6 text-primary">
                  <GoogleIcon />
                </a>
                <a href="#!" className="mr-6 text-primary">
                  <InstagramIcon />
                </a>
                <a href="#!" className="mr-6 text-primary">
                  <LinkedInIcon />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default ContactUs

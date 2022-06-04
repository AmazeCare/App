import React from 'react';
import Header from 'components/Header';
import ContactForm from 'components/ContactForm';
import {
  FacebookIcon, TwitterIcon, GoogleIcon, InstagramIcon, LinkedInIcon,
} from 'assets/icons/social-icons'

function ContactUs() {
  return (
    <main>
      <Header title="Contact Us" />
      <section className="py-20 bg-tertiary">
        <div className="container-layout">
          <div className="flex flex-wrap justify-between md:space-x-8">
            <div className="w-full mb-16 md:w-5/12">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
                Have Questions?
              </h1>
              <p> Arrange for a free consultation with a home care specialist </p>
              <p> Our Care Managers are available to answer your questions and help you make the best choice for in-home care</p>
              <ContactForm />
            </div>

            <div className="w-full md:w-4/12">
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

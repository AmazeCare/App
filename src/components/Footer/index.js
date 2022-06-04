import React from 'react'
import {
  FacebookIcon, TwitterIcon, InstagramIcon, LinkedInIcon,
} from 'assets/icons/social-icons'
import {
  HomeIcon, EnvelopeIcon, PhoneIcon, PrintIcon,
} from 'assets/icons/contact-icons'
import Paragraph from 'components/common/paragraph'

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-primary text-white">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="socialMedia mx-auto">
            <Paragraph heading="Connect with us">
              <a href="#.">
                <p className="flex items-center justify-center md:justify-start text-white pb-6">
                  <FacebookIcon />
                  <span className="ml-2"> Facebook </span>
                </p>
              </a>
              <a href="#.">
                <p className="flex items-center justify-center md:justify-start text-white pb-6">
                  <TwitterIcon />
                  <span className="ml-2"> Twitter </span>
                </p>
              </a>
              <a href="#.">
                <p className="flex items-center justify-center md:justify-start text-white pb-6">
                  <InstagramIcon />
                  <span className="ml-2"> Instagram </span>
                </p>
              </a>
              <a href="#.">
                <p className="flex items-center justify-center md:justify-start text-white pb-6">
                  <LinkedInIcon />
                  <span className="ml-2"> LinkedIn </span>
                </p>
              </a>
            </Paragraph>
          </div>
          <div className="links mx-auto">
            <Paragraph heading="Useful Links">
              <p className="text-white">
                <a href="/resources" className="">Resources</a>
              </p>
              <p className="text-white">
                <a href="#!" className="">Careers</a>
              </p>
              <p className="text-white">
                <a href="#!" className="">Testimonials</a>
              </p>
              <p className="text-white">
                <a href="/ns-govt-help" className="">Nova Scotia Govt. Help</a>
              </p>
            </Paragraph>
          </div>
          <div className="contact mx-auto">
            <Paragraph heading="Contact">
              <p className="flex items-center justify-center md:justify-start text-white">
                <HomeIcon />
                Bridgewater, NS B4V 7Z2, Canada
              </p>
              <p className="flex items-center justify-center md:justify-start text-white">
                <EnvelopeIcon />
                <a href="mailto:info@amazecare.ca">info@amazecare.ca</a>
              </p>
              <p className="flex items-center justify-center md:justify-start text-white">
                <PhoneIcon />
                + 01 234 567 88
              </p>
              <p className="flex items-center justify-center md:justify-start text-white">
                <PrintIcon />
                + 01 234 567 89
              </p>
            </Paragraph>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-[#02565C]">
        <span>© 2022 Copyright:</span>
        <a className=" font-semibold" href="#.">AmazeCare</a>
      </div>
    </footer>
  )
}
export default Footer

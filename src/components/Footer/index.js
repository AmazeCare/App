import React from 'react'
import {
  FacebookIcon, TwitterIcon, GoogleIcon, InstagramIcon, LinkedInIcon,
} from 'assets/icons/social-icons'
import {
  HomeIcon, EnvelopeIcon, PhoneIcon, PrintIcon,
} from 'assets/icons/contact-icons'

function Footer() {
  return (
    <footer className="text-center lg:text-left bg-gray-100 text-primary">
      <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex justify-center">
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
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="">
            <h6 className="
            uppercase
            font-semibold
            mb-4
            flex
            items-center
            justify-center
            md:justify-start
          "
            >
              Our Mission
            </h6>
            <p>
              Our mission at
              <strong> AmazeCare </strong>
              is to change the usual home care routine. We provide
              clients with quality care that enables them to live happier, healthier lives at home.
              We enfold a positive, client centered approach for our clients.
            </p>
          </div>
          <div className="links">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Useful links
            </h6>
            <p className="mb-4">
              <a href="/resources" className="text-primary">Resources</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-primary">Careers</a>
            </p>
            <p className="mb-4">
              <a href="#!" className="text-primary">Testimonials</a>
            </p>
            <p>
              <a href="/ns-govt-help" className="text-primary">Nova Scotia Govt. Help</a>
            </p>
          </div>
          <div className="contact">
            <h6 className="uppercase font-semibold mb-4 flex justify-center md:justify-start">
              Contact
            </h6>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <HomeIcon />
              Bridgewater, NS B4V 7Z2, Canada
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <EnvelopeIcon />
              <a href="mailto:info@amazecare.ca">info@amazecare.ca</a>
            </p>
            <p className="flex items-center justify-center md:justify-start mb-4">
              <PhoneIcon />
              + 01 234 567 88
            </p>
            <p className="flex items-center justify-center md:justify-start">
              <PrintIcon />
              + 01 234 567 89
            </p>
          </div>
        </div>
      </div>
      <div className="text-center p-6 bg-gray-200">
        <span>© 2022 Copyright:</span>
        <a className="text-primary font-semibold" href="#.">AmazeCare</a>
      </div>
    </footer>
  )
}
export default Footer

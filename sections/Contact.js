import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { AiFillBehanceCircle, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook } from "react-icons/bs"
import { FiHeadphones, FiHelpCircle } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"

const Contact = () => {
  return (
    <>
      <section className='contact bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="Let's start right now!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-deatils'>
                <div className='box'>
                  <FiHeadphones size={30} className='icons' />
                  <h3> <a href="tel:+19143983382">+1 914-398-3382</a></h3>
                  <span>Call us: Mon - Fri 9:00 - 19:00</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Location</h3>
                  <span>60 Canfield Ave, Mine Hill, NJ 07803</span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3><a href="mailto:support@jwllc.net">support@jwllc.net</a></h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3><a href="mailto:support@jwllc.net">support@jwllc.net</a></h3>
                  <span>Career at Seven Creative</span>
                </div>
              </div>
            </div>
            <div className='right w-70'>
              <TitleSm title='Make an online enquiry' />
              <p className='desc-p'>Got questions? Ideas? Click below to send us an email!</p>

              <div className="enquiry-option">
  <a 
    href="mailto:support@jwllc.net?subject=Enquiry&body=Hello, I have an enquiry about your services."
    className="button-primary"
  >
    Send an Email
  </a>
</div>


            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

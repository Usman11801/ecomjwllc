import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Logo from "@/components/Logo"
import ShowCase from "@/components/ShowCase"
import Testimonial from "@/components/Testimonial"
import { Title, TitleLogo, TitleSm } from "@/components/common/Title"
import { BlogCard, Brand } from "@/components/router"
import Image from "next/image"
import React from "react"
// import LogoIcon from "../assets/ecomLogoFinal.png";


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <TitleLogo title='W' caption='J' className='logobg' />
{/* <div style={{display:'flex',justifyContent:'center'}}>
<div style={{background:'white',border:'1px solid grey',borderRadius:'100px',width:'135px'}}>

     
<Image src={LogoIcon} width={130} height={120} alt="Logo" />
</div>
</div> */}
          <h1 className='hero-title'>WHERE TRENDS ARE BORN</h1>

          <div className='sub-heading'>
            <TitleSm title='Website Design & Development' /> <span>.</span>
            <TitleSm title='Online Store Setup' /> <span>.</span>
            <TitleSm title='Platform Migration' />
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='The Only eCommerce Partner You ll Ever Need' />
            <p>Unlock your brand's full potential with our comprehensive eCommerce solutions. From seamless store setup to advanced marketing strategies, we handle every aspect of your online business to drive growth, engagement, and conversions. Our team is dedicated to providing you with personalized, data-driven strategies that make a lasting impact. With us, you’re not just gaining a service provider; you're partnering with experts committed to your success, every step of the way.</p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      {/* <ShowCase /> */}
      <Brand />

      <div className='text-center'>
        <Title title='Latest news & articles' />
      </div>
      <BlogCard />
    </>
  )
}

export default Hero

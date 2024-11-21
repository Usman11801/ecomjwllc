import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const EcomServices = () => {
  return (
    <>
      <section className='ecom-services bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT OUR E-COMMERCE SERVICES' /> <br />
            <br />
            <Title title='The last e-commerce store you’ll ever need!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Transforming your business into a successful e-commerce brand' />
              <p className='desc-p'>Our team has been helping businesses like yours build powerful online stores and deliver exceptional customer experiences. From seamless user interfaces to robust back-end integrations, we create e-commerce solutions that drive results. Our commitment is to provide end-to-end services for every stage of your e-commerce journey.</p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of e-commerce expertise</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>200+</h1>
                  <h3>Successful online stores launched</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>5000+</h1>
                  <h3>Products sold globally</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='E-commerce' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='E-commerce Service' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our mission' />
              <br />
              <p className='misson-p'>Our mission is to empower businesses to succeed online by providing custom-built e-commerce solutions that offer great user experiences and high conversion rates. We focus on delivering personalized solutions that meet your unique business needs and ensuring your store runs smoothly for both you and your customers.</p>
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default EcomServices

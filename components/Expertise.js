import React from "react"
import { Title } from "./common/Title"
import { expertise } from "@/assets/data/dummydata"
import { Card } from "./common/Card"

const Expertise = () => {
  return (
    <>
      <section className='expertise'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our expertise' />
            <p>With years of e-commerce experience, our team builds optimized online stores, develops targeted marketing strategies, and manages supply chains efficiently. We enhance product listings for better visibility and use data analytics to maximize performance. Our focus is on helping your business thrive in the online marketplace.</p>
          </div>
          <div className='hero-content grid-4'>
            {expertise.map((item) => (
              <Card data={item} key={item.id}  />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Expertise

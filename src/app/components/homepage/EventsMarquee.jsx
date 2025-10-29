import React from 'react'
import Marquee from 'react-fast-marquee'

function EventsMarquee() {
  return (
    <>
        <Marquee autoFill={true} 
            style={
            {
                color:"black",
                marginTop: "-40px",
                backgroundColor: "whitesmoke"
            }
        }>
            <div className='text-xl font-extralight py-1'>
                <span className='px-1'>●</span>
                <span className='px-[3px]'>Early Bird Offer! Register your team for just ₹100 — limited to the first 20 teams!</span>
            </div>
        </Marquee>
    </>
  )
}

export default EventsMarquee
import React from 'react'
import WhyVendorsWin from '../components/WhyVendorsWin'
import HowFevWorksForVendors from '../components/HowFevWorksForVendors'
import WatchTutorial from '../components/WatchTutorial'
import ReusableHero from '../components/ReusableHero'

const Page = () => {
  const handleClick = () =>{
    alert("clicked")
  }
  return (
    <div>
     <ReusableHero title="Grow Your Business " bluetitle="with FEV" subtitle="Join Ghana’s trusted event vendor platform. List your services, reach new clients, and grow your bookings." buttonText="Learn More"/>
     <WhyVendorsWin />
     <HowFevWorksForVendors/>
    <WatchTutorial/>
    </div>
  )
}

export default Page
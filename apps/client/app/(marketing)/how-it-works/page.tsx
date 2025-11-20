import React from 'react'
import Hero from '../components/Hero'
import { WhyVendorsWin } from '../components/WhyVendorsWin'
import HowFevWorksForVendors from '../components/HowFevWorksForVendors'
import Timeline from '../components/Timeline'
import WatchTutorial from '../components/WatchTutorial'

const Page = () => {
  return (
    <div>
      <Hero />
     <WhyVendorsWin />
     <HowFevWorksForVendors/>
    <WatchTutorial/>
    </div>
  )
}

export default Page
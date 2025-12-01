import React from 'react'
import WhyVendorsWin  from '../components/WhyVendorsWin'
import HowFevWorksForVendors from '../components/HowFevWorksForVendors'
import WatchTutorial from '../components/WatchTutorial'
import ReusableHero from '../components/ReusableHero'
import WhatVendorsAreSaying from './components/WhatVendorsAreSaying'

const Page = () => {

  return (
    <div>
     <ReusableHero title="Grow Your Business " bluetitle="with FEV" subtitle="Join Ghana’s trusted event vendor platform. List your services, reach new clients, and grow your bookings." buttonText="List Your Services" buttonHref="/how-it-works#list-your-services"/>
     <WhyVendorsWin />
     <HowFevWorksForVendors/>
    <WatchTutorial/>
    <div className="flex justify-center my-10">
          <button className="bg-gradient-to-r from-purple-600 to-[#9CD7FF] text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-shadow hover:bg-[#600FD7]/20 hover:border hover:text-black border-[#600FD7]">
            Become A Vendor
          </button>
        </div>
    <WhatVendorsAreSaying/>
    </div>
  )
}

export default Page
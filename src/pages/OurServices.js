import React from 'react'
import Header from 'components/Header'
import {
  AssociateCare, CancerCare, HospitalCare, PalliativeCare, ParkinsonCare, HomeCare, SubstituteHomeCare, StrokeCare, TagAlongCare, RecreationCare,
} from 'components/ServiceCard/common'

export default function OurServices() {
  return (
    <main>
      <Header bgcolor="bg-white" title="Our Services" />
      <section className="py-20 bg-white relative">
        <div
          className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
          style={{ transform: 'translateZ(0)' }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-white fill-current"
              points="2560 0 2560 100 0 100"
            />
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-3 gap-6">
            <AssociateCare />
            <CancerCare />
            <HospitalCare />
            <PalliativeCare />
            <ParkinsonCare />
            <HomeCare />
            <StrokeCare />
            <SubstituteHomeCare />
            <RecreationCare />
            <div />
            <TagAlongCare />
          </div>
        </div>
      </section>
    </main>
  );
}

import React from 'react'
import Hero from '../components/Hero'
import Portfolio from '../components/Portfolio'

const work = () => {
    return (
        <div>
            <Hero heading='Our Projects' message={`We have made a large number of applications for start-ups and small and large companies. Some of them are used by language schools and online language teaching platforms.`}  />
            <Portfolio />
        </div>
      )
}

export default work
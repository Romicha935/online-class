import React from 'react'
import Banner from './Banner'
import Contact from './Contact'

import FAQ from './FAQ'
import Instractor from './Instractor'
import Popular from './Popular'

const Home = () => {
  return (
    <div>
      <Banner/>
      <Popular/>
      <Instractor/>
      <FAQ/>
     
     <Contact/>
    </div>
  )
}

export default Home
import React from 'react'
import Topbar from './topbar'
import MainNav from './mainnav'
import HeroBanner from './herobanner'
import Sharestory1 from './sharestory1'
import Testimonies1 from './testimonies1'
import Testimonies2 from './testimonies2'
import Sharestory2 from './sharestory2'
import Footer from './footer'

const Home = () => {
   
return (
    <div>
        <Topbar/>
        <MainNav/>
        <HeroBanner/>
        <Sharestory1/>
        <Testimonies1/>
        <Sharestory2/>
        <Testimonies2/>
        <Footer/>
    </div>

)
}

export default Home
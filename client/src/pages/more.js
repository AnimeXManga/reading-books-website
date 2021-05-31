import React, { Component } from 'react'
// import AboutUs from '../components/aboutus'
import Team from '../components/team'
import Contact from '../components/contact'
import Navbar from '../components/navbar'
import Footer from '../components/footer'
export default class more extends Component {
    render() {
        return (
            <>    
            <Navbar/>
              <Team/>
              <Contact/>
              <Footer/>
            </>
        )
    }
}

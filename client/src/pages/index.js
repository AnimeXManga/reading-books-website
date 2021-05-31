import Navbar from "../components/navbar";
import Header from "../components/header";
import Books from "../components/books";
import Footer from "../components/footer";
import React, { Component } from 'react'

export default class Index extends Component {
  constructor(props){
    super(props);
    this.state = {}
  }
  render() {
    
    return (
      <>
      <Navbar />
      <Header />
      <Books />
      <Footer />
    </>
    )
  }
}



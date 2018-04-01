import React, { Component } from 'react';
import Menu from './menu'
import Footer from './footer'
import BookList from '../components/pages/booksList'
import { withRouter } from 'react-router'
class Main extends Component {
  render() {
    return (
      <div>
        <Menu/>
        {this.props.children} 
        <Footer/>
      </div>
    )
  }
}
export default withRouter(Main)

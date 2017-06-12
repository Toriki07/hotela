/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-header">
          <img src={logo} className="app-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="app-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/home">home</Link><br/>
        <Link to="/login">login</Link><br/>
        <Link to="/register">register</Link><br/>
        <Link to="/faq">faq</Link><br/>
        <Link to="/contact">contact</Link><br/>
        <Link to="/testimonial">testimonial</Link><br/>
        <Link to="/blog">blog</Link><br/>
        <Link to="/blogsingle">blogsingle</Link><br/>
        <Link to="/categories">categories</Link><br/>
        <Link to="/details">details</Link><br/>
        <Link to="/gallery">gallery</Link><br/>
        <Link to="/room">room</Link><br/>
        <Link to="/shoppingcart">shoppingcart</Link><br/>
      </div>
    );
  }
}

export default App;

/**
 * Bootcamps 2017
 */

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="home">
      <Navbar title="HOTELA"/>

      <div className="panel-control-left">
        <ul id="slide-out-left" className="side-nav collapsible"  data-collapsible="accordion">
          <li>
            <a href="index.html"><i className="fa fa-home"></i>Home</a>
          </li>
          <li>
            <div className="collapsible-header"><i className="fa fa-file-text-o"></i>Categories<span><i className="fa fa-chevron-right"></i></span></div>
            <div className="collapsible-body">
              <ul className="categories-in collapsible"  data-collapsible="accordion">
                <li><a href="categories.html">Luxury Room</a></li>
                <li><a href="categories.html">Beautiful Room</a></li>
                <li><a href="categories.html">Suite Room</a></li>
                <li><a href="categories.html">Family Room</a></li>
                <li><a href="categories.html">Double Room</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="room.html"><i className="fa fa-th-large"></i>Room List</a>
          </li>
          <li>
            <a href="details.html"><i className="fa fa-list"></i>Room Details</a>
          </li>
          <li>
            <a href="shopping-cart.html"><i className="fa fa-shopping-cart"></i>Shopping Cart</a>
          </li>
          <li>
            <a href="book-now.html"><i className="fa fa-send"></i>Book Now</a>
          </li>
          <li>
            <a href="gallery.html"><i className="fa fa-image"></i>Gallery</a>
          </li>
          <li>
            <div className="collapsible-header"><i className="fa fa-rss"></i>Blog <span><i className="fa fa-chevron-right"></i></span></div>
            <div className="collapsible-body">
              <ul className="side-nav-panel">
                <li><a href="blog.html">Blog</a></li>
                <li><a href="blog-single.html">Blog Single</a></li>
              </ul>
            </div>
          </li>
          <li>
            <div className="collapsible-header"><i className="fa fa-file-powerpoint-o"></i>Pages <span><i className="fa fa-chevron-right"></i></span></div>
            <div className="collapsible-body">
              <ul className="side-nav-panel">
                <li><a href="faq.html">Faq</a></li>
                <li><a href="testimonial.html">Testimonial</a></li>
                <li><a href="404.html">404 Page</a></li>
              </ul>
            </div>
          </li>
          <li>
            <a href="contact.html"><i className="fa fa-envelope"></i>Contact Us</a>
          </li>
          <li>
            <a href="login.html"><i className="fa fa-sign-in"></i>Login</a>
          </li>
          <li>
            <a href="register.html"><i className="fa fa-user-plus"></i>Register</a>
          </li>
        </ul>
      </div>

      <div className="panel-control-right">
        <div id="slide-out-right" className="side-nav">
          <div className="row entry">
            <div className="col s4">
              <img src="img/cart1.jpg" alt=""/>
            </div>
            <div className="col s6">
              <div className="desc">
                <h6>Luxury Room</h6>
                <div className="rating">
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className=""><i className="fa fa-star"></i></span>
                </div>
                <h6><span>$150.00</span></h6>
              </div>
            </div>
            <div className="col s2">
              <div className="action">
                <i className="fa fa-remove"></i>
              </div>
            </div>
          </div>
          <div className="row entry">
            <div className="col s4">
              <img src="img/cart2.jpg" alt=""/>
            </div>
            <div className="col s6">
              <div className="desc">
                <h6>Beautiful Room</h6>
                <div className="rating">
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className="active"><i className="fa fa-star"></i></span>
                  <span className=""><i className="fa fa-star"></i></span>
                  <span className=""><i className="fa fa-star"></i></span>
                </div>
                <h6><span>$150.00</span></h6>
              </div>
            </div>
            <div className="col s2">
              <div className="action">
                <i className="fa fa-remove"></i>
              </div>
            </div>
          </div>
          <div className="row price">
            <div className="col s8">
              <h6>Total</h6>
            </div>
            <div className="col s4">
              <h6>$300.00</h6>
            </div>
          </div>
          <ul>
            <li>
              <button className="button">Book Now</button>
            </li>
            <li>
              <button className="button">View Cart</button>
            </li>
          </ul>
        </div>
      </div>

      <div className="faq app-pages app-section">
        <div className="container">
          <div className="pages-title">
            <h3>Faq</h3>
          </div>
          <div className="entry">
            <ul className="collapsible" data-collapsible="accordion">
              <li>
                <div className="collapsible-header faq-collapsible">
                  What is eCommerce Group? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  How to sell your product? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  How to get money with us? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  Can I buy using paypal? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  What the offers your get? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  How to get discount up 50%? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  How buy using bank transfer? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
              <li>
                <div className="collapsible-header faq-collapsible">
                  How to reset password? <i className="fa fa-plus"></i>
                </div>
                <div className="collapsible-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate illum, accusamus vel dolorem et veritatis. Ab odit quasi libero asperiores at vitae eveniet facere, ea nesciunt, aperiam magnam incidunt delectus!</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer/>
      </div>
    );
  }
}

export default App;

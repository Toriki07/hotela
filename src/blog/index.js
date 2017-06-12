import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="home">
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

      <div className="blog app-pages app-section">
        <div className="container">
          <div className="entry">
            <img src="img/blog1.jpg" alt=""/>
            <div className="user-date">
              <ul>
                <li><a href=""><i className="fa fa-user"></i> Admin</a></li>
                <li><a href=""><i className="fa fa-clock-o"></i> 2017-06-07</a></li>
              </ul>
            </div>
            <h5><a href="">Beautiful & LUxury Rooms</a></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo tempore itaque voluptates. Temporibus iste, illo eius ex ducimus eligendi animi possimus aliquam excepturi omnis eaque veritatis ad. Atque, quas.</p>
            <button className="button">Read More</button>
          </div>
          <div className="entry">
            <img src="img/blog2.jpg" alt=""/>
            <div className="user-date">
              <ul>
                <li><a href=""><i className="fa fa-user"></i> Admin</a></li>
                <li><a href=""><i className="fa fa-clock-o"></i> 2017-06-07</a></li>
              </ul>
            </div>
            <h5><a href="">Beautiful & LUxury Rooms</a></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo tempore itaque voluptates. Temporibus iste, illo eius ex ducimus eligendi animi possimus aliquam excepturi omnis eaque veritatis ad. Atque, quas.</p>
            <button className="button">Read More</button>
          </div>
          <div className="entry">
            <img src="img/blog3.jpg" alt=""/>
            <div className="user-date">
              <ul>
                <li><a href=""><i className="fa fa-user"></i> Admin</a></li>
                <li><a href=""><i className="fa fa-clock-o"></i> 2017-06-07</a></li>
              </ul>
            </div>
            <h5><a href="">Beautiful & LUxury Rooms</a></h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt nemo tempore itaque voluptates. Temporibus iste, illo eius ex ducimus eligendi animi possimus aliquam excepturi omnis eaque veritatis ad. Atque, quas.</p>
            <button className="button">Read More</button>
          </div>
          <div className="pagination">
            <ul>
              <li><a href="">First</a></li>
              <li className="active"><a href="">1</a></li>
              <li><a href="">2</a></li>
              <li><a href="">3</a></li>
              <li><a href="">4</a></li>
              <li><a href="">Last</a></li>
            </ul>
          </div>
        </div>
      </div>

      <footer>
        <div className="container">
          <h6>Find & follow us</h6>
          <ul className="icon-social">
            <li className="facebook"><a href=""><i className="fa fa-facebook"></i></a></li>
            <li className="twitter"><a href=""><i className="fa fa-twitter"></i></a></li>
            <li className="google"><a href=""><i className="fa fa-google"></i></a></li>
            <li className="instagram"><a href=""><i className="fa fa-instagram"></i></a></li>
            <li className="rss"><a href=""><i className="fa fa-rss"></i></a></li>
          </ul>
          <div className="tel-fax-mail">
            <ul>
              <li><span>Tel:</span> 900000o02</li>
              <li><span>Fax:</span> 0400000o98</li>
              <li><span>Email:</span> info@youremail.com</li>
            </ul>
          </div>
          <div className="ft-bottom">
            <span>Copyright © 2017 All Rights Reserved </span>
          </div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;

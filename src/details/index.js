import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './styles.css';


class App extends Component {
  render() {
    return (
      <div className="home">
      <div class="panel-control-left">
    		<ul id="slide-out-left" class="side-nav collapsible"  data-collapsible="accordion">
    			<li>
    				<a href="index.html"><i class="fa fa-home"></i>Home</a>
    			</li>
    			<li>
    				<div class="collapsible-header"><i class="fa fa-file-text-o"></i>Categories<span><i class="fa fa-chevron-right"></i></span></div>
    				<div class="collapsible-body">
    					<ul class="categories-in collapsible"  data-collapsible="accordion">
    						<li><a href="categories.html">Luxury Room</a></li>
    						<li><a href="categories.html">Beautiful Room</a></li>
    						<li><a href="categories.html">Suite Room</a></li>
    						<li><a href="categories.html">Family Room</a></li>
    						<li><a href="categories.html">Double Room</a></li>
    					</ul>
    				</div>
    			</li>
    			<li>
    				<a href="room.html"><i class="fa fa-th-large"></i>Room List</a>
    			</li>
    			<li>
    				<a href="details.html"><i class="fa fa-list"></i>Room Details</a>
    			</li>
    			<li>
    				<a href="shopping-cart.html"><i class="fa fa-shopping-cart"></i>Shopping Cart</a>
    			</li>
    			<li>
    				<a href="book-now.html"><i class="fa fa-send"></i>Book Now</a>
    			</li>
    			<li>
    				<a href="gallery.html"><i class="fa fa-image"></i>Gallery</a>
    			</li>
    			<li>
    				<div class="collapsible-header"><i class="fa fa-rss"></i>Blog <span><i class="fa fa-chevron-right"></i></span></div>
    				<div class="collapsible-body">
    					<ul class="side-nav-panel">
    						<li><a href="blog.html">Blog</a></li>
    						<li><a href="blog-single.html">Blog Single</a></li>
    					</ul>
    				</div>
    			</li>
    			<li>
    				<div class="collapsible-header"><i class="fa fa-file-powerpoint-o"></i>Pages <span><i class="fa fa-chevron-right"></i></span></div>
    				<div class="collapsible-body">
    					<ul class="side-nav-panel">
    						<li><a href="faq.html">Faq</a></li>
    						<li><a href="testimonial.html">Testimonial</a></li>
    						<li><a href="404.html">404 Page</a></li>
    					</ul>
    				</div>
    			</li>
    			<li>
    				<a href="contact.html"><i class="fa fa-envelope"></i>Contact Us</a>
    			</li>
    			<li>
    				<a href="login.html"><i class="fa fa-sign-in"></i>Login</a>
    			</li>
    			<li>
    				<a href="register.html"><i class="fa fa-user-plus"></i>Register</a>
    			</li>
    		</ul>
    	</div>

    	<div class="panel-control-right">
    		<div id="slide-out-right" class="side-nav">
    			<div class="row entry">
    				<div class="col s4">
    					<img src="img/cart1.jpg" alt=""/>
    				</div>
    				<div class="col s6">
    					<div class="desc">
    						<h6>Luxury Room</h6>
    						<div class="rating">
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class=""><i class="fa fa-star"></i></span>
    						</div>
    						<h6><span>$150.00</span></h6>
    					</div>
    				</div>
    				<div class="col s2">
    					<div class="action">
    						<i class="fa fa-remove"></i>
    					</div>
    				</div>
    			</div>
    			<div class="row entry">
    				<div class="col s4">
    					<img src="img/cart2.jpg" alt=""/>
    				</div>
    				<div class="col s6">
    					<div class="desc">
    						<h6>Beautiful Room</h6>
    						<div class="rating">
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class="active"><i class="fa fa-star"></i></span>
    							<span class=""><i class="fa fa-star"></i></span>
    							<span class=""><i class="fa fa-star"></i></span>
    						</div>
    						<h6><span>$150.00</span></h6>
    					</div>
    				</div>
    				<div class="col s2">
    					<div class="action">
    						<i class="fa fa-remove"></i>
    					</div>
    				</div>
    			</div>
    			<div class="row price">
    				<div class="col s8">
    					<h6>Total</h6>
    				</div>
    				<div class="col s4">
    					<h6>$300.00</h6>
    				</div>
    			</div>
    			<ul>
    				<li>
    					<button class="button">Book Now</button>
    				</li>
    				<li>
    					<button class="button">View Cart</button>
    				</li>
    			</ul>
    		</div>
    	</div>

    	<div class="details app-pages app-section">
    		<div class="container">
    			<img src="img/details.jpg" alt=""/>
    			<h3>Beautiful & Luxury Room</h3>
    			<div class="rating">
    				<span class="active"><i class="fa fa-star"></i></span>
    				<span class="active"><i class="fa fa-star"></i></span>
    				<span class="active"><i class="fa fa-star"></i></span>
    				<span class="active"><i class="fa fa-star"></i></span>
    				<span class=""><i class="fa fa-star"></i></span>
    			</div>
    			<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium ducimus ipsam, suscipit, nobis necessitatibus eum odio est laborum fugiat veniam explicabo qui laboriosam! Repellat aspernatur doloribus, nulla, hic odio natus!</p>
    			<ul class="button-ul">
    				<li><button class="button">Book Now</button></li>
    				<li><button class="button">Add to Card</button></li>
    			</ul>
    			<div class="comment">
    				<h6>2 Comment</h6>
    				<div class="content">
    					<img src="img/comment1.png" alt=""/>
    					<div class="entry">
    						<strong><a href="">John Doe</a></strong>
    						<p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
    					</div>
    				</div>
    				<div class="content">
    					<img src="img/comment2.png" alt=""/>
    					<div class="entry">
    						<strong><a href="">John Doe</a></strong>
    						<p>Lorem ipsum dolor sit amet, consectetur adipisicing</p>
    					</div>
    				</div>
    			</div>
    			<div class="post-comment">
    				<h6>Post Comments</h6>
    				<div class="content">
    					<form action="#">
    						<input type="text" placeholder="Name"/>
    						<input type="email" placeholder="Email"/>
    						<input type="text" placeholder="Website"/>
    						<textarea cols="20" rows="10" placeholder="Comment"></textarea>
    						<button class="button">Post Comment</button>
    					</form>
    				</div>
    			</div>
    		</div>
    	</div>

    	<footer>
    		<div class="container">
    			<h6>Find & follow us</h6>
    			<ul class="icon-social">
    				<li class="facebook"><a href=""><i class="fa fa-facebook"></i></a></li>
    				<li class="twitter"><a href=""><i class="fa fa-twitter"></i></a></li>
    				<li class="google"><a href=""><i class="fa fa-google"></i></a></li>
    				<li class="instagram"><a href=""><i class="fa fa-instagram"></i></a></li>
    				<li class="rss"><a href=""><i class="fa fa-rss"></i></a></li>
    			</ul>
    			<div class="tel-fax-mail">
    				<ul>
    					<li><span>Tel:</span> 900000o02</li>
    					<li><span>Fax:</span> 0400000o98</li>
    					<li><span>Email:</span> info@youremail.com</li>
    				</ul>
    			</div>
    			<div class="ft-bottom">
    				<span>Copyright © 2017 All Rights Reserved </span>
    			</div>
    		</div>
    	</footer>
      </div>
    );
  }
}

export default App;

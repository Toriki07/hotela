import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter, Route } from 'react-router-dom';

import App from './App';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import Faq from './Faq';
import Contact from './Contact';
import blog from './blog';
import blogsingle from './blogsingle';
import categories from './categories';
import testimonial from './testimonial';
import details from './details';
import gallery from './Gallery';
import room from './room';
import shoppingcart from './shoppingcart';
import './index.css';

const AppRouter = () => {
  return (
    <HashRouter>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
        <Route path="/blog" component={blog} />
        <Route path="/testimonial" component={testimonial} />
        <Route path="/blogsingle" component={blogsingle} />
        <Route path="/categories" component={categories} />
        <Route path="/room/:id" component={details} />
        <Route path="/gallery" component={gallery} />
        <Route path="/rooms" component={room} />
        <Route path="/shoppingcart" component={shoppingcart} />
      </div>
    </HashRouter>
  )
}

ReactDOM.render(<AppRouter/>, document.getElementById('root'));
registerServiceWorker();

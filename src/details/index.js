import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import request from 'request';

import './styles.css';

const Loader = require('halogen/ClipLoader');
class App extends Component {

  constructor(props) {
    super(props);
    console.log('RomDetail', props.match.params.id);
    console.log('RomDetail', props);

    this.state = {
      form: {},
      roomDetail: null,
      data: [],
    };

    this.onNameChange = this.onNameChange.bind(this);
    this.onPostComment = this.onPostComment.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
  }

  componentDidMount(){
    console.log('componentDidMount');
      const roomId = this.props.match.params.id;

    request({
      method: 'get',
      url: 'http://35.162.241.129:3000/api/v1/room/'+roomId,
    }, function (error, response, body) {
      console.log('RomDetail error:', error);
      const data = JSON.parse(body);
      console.log('RomDetail data:', typeof data, data);

      this.setState({
        roomDetail: data
      })
    }.bind(this));

    request({
      method: 'get',
      url:'http://35.162.241.129:3000/api/v1/comment?query={"roomId":"'+ roomId +'"}',
    }, function (error, response, body) {
      console.log('error:', error);
      const data = JSON.parse(body);
      console.log('data:', typeof data, data);

      this.setState({
        data: data
      })
    }.bind(this));
  }

  onPostComment(e){
    e.preventDefault();
    alert('Post Comment Clicked !' + JSON.stringify(this.state.form));
    const form = this.state.form;
    form.roomId = this.props.match.params.id;

    request ({
      method: 'post',
      headers: {
        'content-type': 'application/json'
      },
      url:'http://35.162.241.129:3000/api/v1/comment',
      body: JSON.stringify(form),

    }, function (error, response, body){
      console.log('error', error);
      console.log('response', response);
      console.log('body', body);
    }.bind(this));
  }

  onNameChange(e){
    console.log('onNameChange', e.target.vaule);
    this.setState({
      form: {
        ...this.state.form,
        name: e.target.value
      }
    });
  }
  onEmailChange(e){
    console.log('onEmailChange', e.target.value);
    this.setState({
      form:{
        ...this.state.form,
        email: e.target.value
      }
    });
  }

  onContentChange(e) {
   console.log('onContentChange', e.target.value);
   this.setState({
     form: {
       ...this.state.form,
       content: e.target.value
     }
   });
 }
  componentWillUnmount(){
    console.log("componentWillUnmount");
  }
  render() {
    const room = this.state.roomDetail;

    return (
      <div className="home">
      <Navbar title="Room Detail"/>

      {!room && (
         <Loader color="#26A65B" size="16px" margin="4px"/>
      )}
      {room && (
        <div className="details app-pages app-section">
           <div className="container">
             <img src={"http://35.162.241.129:3000/uploads/" + room.coverImage.filename} alt="" />
             <h3>{room.title}</h3>
             <div className="rating">
               <span className="active"><i className="fa fa-star"></i></span>
               <span className="active"><i className="fa fa-star"></i></span>
               <span className="active"><i className="fa fa-star"></i></span>
               <span className="active"><i className="fa fa-star"></i></span>
               <span className=""><i className="fa fa-star"></i></span>
             </div>

             <div dangerouslySetInnerHTML={{__html: room.content}}></div>

             <ul className="button-ul">
               <li><button className="button">Book Now</button></li>
               <li><button className="button">Add to Card</button></li>
             </ul>
             <div className="comment">
               <h6>{this.state.data.length} Comment</h6>

               {(this.state.data.length === 0) ? (
                 <div className="Loader">
                   <Loader color="#707784" size="100px" margin="20%" />
                 </div>
                  ) : (
                    <div className="content">
                    {this.state.data.map(function(item, index){
                      return (
                        <div className="row" key={index}>
                          <img src="img/comment1.png" alt="" />
                          <div className="entry">
                            <strong><a href="">{item.name}</a></strong>
                            <p>{item.content}</p>
                          </div>
                        </div>
                          )
                    })}
                    </div>
               )}
             </div>
             <div className="post-comment">
               <h6>Post Comments</h6>
               <div className="content">
               <form action="#">
                  <input type="text" placeholder="Name"
                    value={this.state.form.name}
                    onChange={this.onNameChange} />
                  <input type="email" placeholder="Email"
                    value={this.state.form.email}
                    onChange={this.onEmailChange} />
                  <input type="text" placeholder="Website"
                    value={this.state.form.website} />
                  <textarea cols="20" rows="10" placeholder="Comment"
                    value={this.state.form.comment}
                    onChange={this.onContentChange}></textarea>
                  <button className="summit" type="summit"onClick={this.onPostComment}>Post Comment</button>
                </form>
               </div>
             </div>
           </div>
         </div>
          )}

    	    <Footer/>
      </div>
    );
  }
}

export default App;

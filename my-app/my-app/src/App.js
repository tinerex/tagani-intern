import React, { Component } from 'react';
import Popup from 'reactjs-popup';
import Modal from 'react-awesome-modal';
import vg_01 from './images/vg_01.png';
import vg_02 from './images/vg_02.png';
import vg_03 from './images/vg_03.jpg';
import './App.css';
import './styles.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        visible : false
    }
}

onHandleSubmit() {
  const commentbox = this.state.commentbox;
  this.setState({
    commentbox: ''
  });
}

openModal() {
    this.setState({
        visible : true
    });
}

closeModal() {
    this.setState({
        visible : false
    });

    this.onHandleSubmit();
}



  render(){
  return (
    <div className="App">
      <div class="container">
        <div id="logo">
                <h1>Go Vegan!</h1>
            <nav>
                <ul>
                    <li><a href="#welcome">HOME</a></li>
                    <li><a href="#articles">VEGAN LIFE</a></li>
                    <li><a href="#footer">CONTACT US</a></li>
                </ul>
            </nav>
        </div>

        <div id="welcome">
            <h2>WHO ARE WE?</h2>
            <p>This is <strong>Go Vegan!</strong> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam scelerisque ullamcorper felis in blandit. Ut eu elementum justo. Praesent ac maximus eros, eget faucibus dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer rhoncus.</p>
        </div>
</div>

<div id="articles" class="holdingcontainer">
      <div class="internalcontainer">
        <h1>Veganism: Choose life.</h1>
        <img src={vg_01} width='100%'/>
        <br/>
            <p>Aliquam scelerisque mauris vel enim blandit, sed aliquet ipsum commodo. Aliquam ultrices odio non nisi blandit, id mollis lacus euismod. Nulla posuere laoreet porta. Curabitur semper feugiat nulla, sit amet faucibus libero malesuada eget. Ut vestibulum nec tortor ac sollicitudin. Ut consequat condimentum mattis. Suspendisse nec nulla porttitor, feugiat sapien sit amet, pulvinar mi. Sed pharetra, lectus et fermentum maximus, augue sem egestas risus, in facilisis arcu metus eget turpis. Vivamus sed nulla vehicula, laoreet lacus eu, mollis nunc.</p>
      </div>

      <div class="internalcontainer">
        <h1>Online Vegan Grocer</h1>
        <img src={vg_02} width="100%"/>
        <br/>
            <p>Etiam dignissim ullamcorper tortor id fermentum. Aliquam consequat, purus sit amet placerat cursus, velit libero aliquam enim, quis sodales sem eros et velit. Nulla mi nisi, dictum at tempus non, mattis nec metus. Donec eget feugiat erat, at vestibulum velit. Mauris porttitor faucibus enim, iaculis hendrerit nibh egestas vitae. Aliquam sed commodo mi. Integer a hendrerit elit, ac gravida tellus. Pellentesque eget massa facilisis, congue sem vel, interdum nunc. Integer quis libero et odio euismod sagittis non eget purus.</p>
</div>

      <div class="internalcontainer">
        <h1>Best Vegan Recipe</h1>
        <img src={vg_03} width="100%"/>
        <br/>
            <p>Proin vulputate, odio gravida bibendum interdum, purus turpis lacinia justo, vel viverra ante est nec diam. Sed vulputate tellus ut ultricies posuere. Phasellus eu consequat urna. In a ex id quam cursus euismod. Vestibulum in eleifend enim, vel malesuada est. Suspendisse maximus arcu pharetra enim tincidunt, quis volutpat nibh auctor. Nunc quis malesuada magna, vitae fermentum est. Maecenas porttitor erat quis tortor facilisis, tristique tincidunt ipsum volutpat. Sed odio nisl, laoreet mollis urna molestie, condimentum viverra ipsum. Proin eros urna, blandit in bibendum vel, hendrerit nec felis.</p>
  </div>
</div>

<div class="container">
  <div id="footer">
    <div className="links">
      <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
      </ul>
    </div>

    <div class="comment">
        <textarea class="textinput" id="commentbox" placeholder="Suggestion?" value={this.state.commentbox}></textarea>
         <input type="button" class="button" value="Submit" onClick={() => this.openModal()}/>
        <Modal visible={this.state.visible} width="400" height="150" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                    <div>
                        <p>Thank you!</p>
                        <a href="javascript:void(0);" class="button" onClick={() => this.closeModal()}>Close</a>
                    </div>
                </Modal>
    </div>
</div>
</div>
</div>





  );}
}

export default App;
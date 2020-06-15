import React, {Component} from 'react';
//import logo from './logo.svg';
//import './App.css';
import ReactDOM from 'react-dom';
//import Button from 'react-bootstrap/Button'
import Background from 'C:/Users/DELL/breast/src/main_pic.jpg'; 

 
    
  class App extends Component{
    constructor () { 
      super()
      this.onClickForward = this.onClickForward.bind(this)
      this.onClickBack = this.onClickBack.bind(this)
      //this.getState2 = this.getState2.bind(this)
     
     const IMG1 = require('C:/Users/DELL/breast/src/IMG5.jpg');
     const IMG2 = require('C:/Users/DELL/breast/src/IMG6.jpg');
     const IMG3 = require('C:/Users/DELL/breast/src/IMG1.jpg');
     const IMG4 = require('C:/Users/DELL/breast/src/IMG4.jpg');
     const img7 = require('C:/Users/DELL/breast/src/img7.jpg');
     const img8 = require('C:/Users/DELL/breast/src/img8.jpg');
     const img9 = require('C:/Users/DELL/breast/src/img9.jpg');
     const img10 = require('C:/Users/DELL/breast/src/img10.jpg');
     const img11 = require('C:/Users/DELL/breast/src/img11.jpg');
     const img12 = require('C:/Users/DELL/breast/src/img12.jpg');
     const img13 = require('C:/Users/DELL/breast/src/img13.jpg');
     const img14 = require('C:/Users/DELL/breast/src/img14.jpg');
     const img15 = require('C:/Users/DELL/breast/src/img15.jpg');
     const img16 = require('C:/Users/DELL/breast/src/img16.jpg');

     this.state = {index: 0, imgList:[IMG1,IMG2,IMG3,IMG4,img7,
      img8,img9,img10,img11,img12,img13,img14, img15, img16], string: ''}
    }

    onClickForward() {
    if(this.state.index + 1 === this.state.imgList.length) {
      this.setState({index: this.state.index});
      
    } else {
      this.setState({index: this.state.index + 1})
      if (this.state.index >= 0 && this.state.index <= 4)
      this.setState({string:'אישה בת 52 שהגיעה לבדיקת סקר, כתבו שהממוגרפיה רקמה סמיכה ולכן המליצו על אולטרסאונד באולולטרסאונד מצאתי גוש בכל שד '});
      if (this.state.index >= 5 && this.state.index <= 14)
      this.setState({string:'אישה שהגיעה לבדיקה ומצאו ממצאים שפירים'})
    }
  }
  
  onClickBack(){
    if (this.state.index - 1 === -1){
      this.setState({index: 0})
    } else {
        this.setState({index:this.state.index - 1})
      }
  }
    render() {
      const mystyle = {color: "black",fontSize: 30,paddingBottom: 10, display: "flex",
                       justifyContent: "center", alignItems: "center", fontFamily: "Open Sans"};
      const button = { marginLeft: '17%',borderRadius: 8, height: 400, width: 400 };
      const backImage = {backgroundImage: `url(${require('C:/Users/DELL/breast/src/main_pic.jpg')})` ,
        backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover"}
      return (
        <div>
          <img style={{backImage}}></img >
          <p style={mystyle}>מקרים חשודים ממוגרפיה ואולטרסאונד</p>
          <div style={{display: "flex" }}>
            <img style={{marginLeft: '17%',borderRadius: 8, height: 500, width: 500}} src={this.state.imgList[this.state.index]} alt="" /><br />
            <p style={{marginLeft: '15%'}}>{this.state.string}</p>
          </div>
          <div>
            <button style={{marginLeft: '17%'}} onClick={this.onClickBack} >back</button>
            <button onClick={this.onClickForward}>forward</button>
            </div>
        </div>   
      );
    }
  }
export default App;


import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);    
    this.state = {
      currentDescr: 'Play it!'
    }    
    this.handleClick = this.handleClick.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  
  handleClick(e){
    e.target.children[0].currentTime = 0;
    e.target.children[0].play();
    this.setState({
      currentDescr: e.target.id
    });
  }
  
  handleKeyPress(e){
    const pads = document.querySelectorAll('.drum-pad');    
    for(let pad of pads) {
      if(e.key.toUpperCase() === pad.textContent){
        pad.click();
      }        
    }
  } 
   componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }
  
  render() {    
    return (<div id = "drum-machine">
              <Display display = {this.state.currentDescr}/>
              <Pads keys = {keys} handleClick = {this.handleClick} handleKeyPress = {this.handleKeyPress}/>
              <Credits/>
            </div>);
              }
            }

const Credits =(props)=>{
    return <div id="credits">by Annestezia</div>;
}
const Display =(props)=>{
    return <div id="display">{props.display}</div>;
}

const Pads  = React.memo(function MyComponent(props) {
  const pad_keys = props.keys;
  const pad_btns = pad_keys.map((key, id) =>
    <button className = "drum-pad" id = {key.descr} key = {key.descr} onClick={props.handleClick} onKeyPress = {props.handleKeyPress}>{key.name}<audio src = {key.clip} class ="clip" id = {key.name}></audio></button>);
    return <div id = "pads">{pad_btns}</div>;  
}); 


const keys = [
  {name: 'Q', clip: 'http://www.drumsoundz.com/Bassdrum-01.wav', descr: 'Bassdrum-01'},
  {name: 'W', clip: 'http://www.drumsoundz.com/Bassdrum-02.wav', descr: 'Bassdrum-02'},
  {name: 'E', clip: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3', descr: 'Kick-01'},
  {name: 'A', clip: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3', descr: 'Kick-02'},
  {name: 'S', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3', descr: 'Hat-1'},
  {name: 'D', clip: 'http://www.drumsoundz.com/Snare1.wav', descr: 'Snare-1'},
  {name: 'Z', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3', descr: 'Snare-2'},
  {name: 'X', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3', descr: 'Dry_Ohh'},
  {name: 'C', clip: 'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3', descr: 'Chord-1'}
];
// const keys = [
//   {name: 'Q', clip: './sounds/Bassdrum-01.wav', descr: 'Bassdrum-01'},
//   {name: 'W', clip: './sounds/Bassdrum-02.wav', descr: 'Bassdrum-02'},
//   {name: 'E', clip: './sounds/kick.wav', descr: 'Kick'},
//   {name: 'A', clip: './sounds/floor-tom.wav', descr: 'Floor Tom'},
//   {name: 'S', clip: './sounds/Hat Closed.wav', descr: 'Hat closed'},
//   {name: 'D', clip: './sounds/hi-hat.wav', descr: 'Hi-hat'},
//   {name: 'Z', clip: './sounds/tapesnare.wav', descr: 'Tape Snare'},
//   {name: 'X', clip: './sounds/clap.wav', descr: 'Clap'},
//   {name: 'C', clip: './sounds/rack-tom.wav', descr: 'Rack Tom'}
// ];







export default App;

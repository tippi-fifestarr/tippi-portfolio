import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import FaceRecognition from './components/FaceRecognition/FaceRecognition'
import Clarifai from 'clarifai'
import Logo from './components/Logo/Logo'
import Rank from './components/Rank/Rank'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import 'tachyons';
import Particles from 'react-particles-js';
import SignIn from './components/SignIn/SignIn'
import Register from './components/Register/Register'

const app = new Clarifai.App({
  apiKey: '5ec90fd96f1a4de8b5d00d3a2f113b99'
})

// particles makes the background
const particlesOptions = {
  particles: {
    number: {
      value: 30,
      density: {
        enable: true,
        value_area: 340 
      }
    }
    , line_linked: {
      shadow: {
        enable: true,
        color: "#ff5edf",
        blur: 5
      }
    }
  }
}

// replaced function App() with this state haver{
class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      // box starts off as an empty object, will contain the values that we recieve from the API resp
      box: {},
      route: 'SignIn',
      isSignedIn: false
    }
  }
  
  componentDidMount() {
    fetch('http://localhost:3000')
      .then(response => response.json())
      .then(console.log)
  }

  //in order to solve the facebox problem (or any other processing of the data from API), first we "think" then make a function that takes the data 
  calculateFaceLocation = (data) => {
    // remember that bounding box is a percentage so we have to change it
    const ClarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
        // of course we want to return something {an object}
    return {
      leftCol: ClarifaiFace.left_col * width,
      topRow: ClarifaiFace.top_row * height,
      rightCol: width - (ClarifaiFace.right_col * width),
      bottomRow: height - (ClarifaiFace.bottom_row * height)
    }
  }
  // now we want to give the above returned values to the state box obj {}
  displayFaceBox = (box) => {
    this.setState({box: box})
  }


  // anytime theressome sort of eventlistener on a webpage, we recieve an event
  onInputChange = (event) => {
    this.setState({input: event.target.value})
  }

  onDetectPressed = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
        // Clarifai.COLOR_MODEL,
        Clarifai.FACE_DETECT_MODEL,
        // with face detect, we want to find the bounding box
        this.state.input)
        // set dFB to be the result of the cFL
      .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
      .catch(err => console.log(err));
  }

  // a function for the SignIn comp
  onRouteChange = (route) => {
    if (route === 'SignOut') {
      this.setState({isSignedIn: false})
    } else if (route === 'Home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route})
  }

  render() {
    // destructuring move to get rid of a lot of states
    const { isSignedIn, imageUrl, route, box} = this.state;
    return (
    <div className="App">
      <Particles className='particles'
        params={particlesOptions}
      />
      <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
      
        { route === 'Home' 
          ? <div> 
            <Logo className='logo'/>
            <Rank />
            {/* remember to give it this. so its state transfered and now we are adding the onDectect */}
            <ImageLinkForm 
              onInputChange={this.onInputChange} 
              onDetectPressed={this.onDetectPressed} 
            />
            <FaceRecognition box={box} imageUrl={imageUrl}/>
            </div>
          : (
              route === 'SignIn' 
              ? <SignIn onRouteChange={this.onRouteChange}/>
              : <Register onRouteChange={this.onRouteChange} />
            )
          }
    </div>
  );
  }
}

export default App;

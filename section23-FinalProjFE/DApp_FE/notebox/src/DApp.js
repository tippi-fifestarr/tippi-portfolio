import './App.css';
import Nav from './components/Nav/Nav'
import Logo from './components/Logo/Logo'
import NameNoteForm from './components/NNF/NameNoteForm'
import Account from './components/Account/Account'
// pretty background nodes -  https://vincentgarreau.com/particles.js/
import Particles from 'react-particles-js';
// blockchain stuff:
import Web3 from 'web3'
// abis
// import NoteBoxFactory from './abis/NBF.json'
import { Component } from 'react';
import BCExplore from './components/BCExplore/BCExplore';

const particlesOptions = {
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        value_area: 690
      }
    },
    line_linked: {
        enable_auto: true,
        color: "#FFDFDF",
        opacity: 0.34
    }
  }
} 
  //` Patricks hot mess
  // class App extends Component {
  //   async componentWillMount() {
  //     await this.loadWeb3()
  //     await this.loadBlockchainData()

  //   }
    
  //   async loadWeb3() {
  //     //if theres ethereum, enable it
  //     if (window.ethereum) {
  //       window.web3 = new Web3(window.ethereum)
  //       await window.ethereum.enable()
  //     } else if (window.web3) {
  //       //otherwise just get the current provider
  //       window.web3 = new Web3(window.web3.currentProvider)  
  //     } else { //alert them if they don't have metamask basically
  //       window.alert(
  //         "no web3-friendly browser detected! try installing metamask and brave?"
  //       )
  //     }
  //   }
    
  //   async loadBlockchainData() {
  //     const web3 = window.web3
  //     const accounts = await web3.eth.getAccounts()
  //     console.log(accounts)
  //     // set state of app
  //     this.setState({ account: accounts[0] })
  //     // not sure about this
  //     this.setState({ tokenAddress: "0x39094" })

  //     // not sure about this
  //     const erc721 = new web3.eth.Contract(ERC721.abi, this.state.tokenAddress)
  //     this.setState({ erc721 })
  //     let erc721Balance = await erc721.methods.balanceOf()
  //   }
  // }`
// in our components, use this.props.__________
//{window.web3.utils.______}


// my original attempt


function App() {
  return (
    <div className="App">
      <BCExplore />
      <Particles className='particles'
              params={ particlesOptions	}
      />
      <Nav />
      <Logo />
      <Account />
      <NameNoteForm />
      {/* <BlockChain />   */}
    </div>
  );
}

export default App;

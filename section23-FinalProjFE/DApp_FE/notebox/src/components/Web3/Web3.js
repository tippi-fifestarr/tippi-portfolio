import Web3 from 'web3';

let web3;
if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
  // we check if metamask is running
  web3 = new Web3(window.web3.currentProvider);
  console.log('web3 is on')
} else {
  // set up provider through infura
  const provider = new Web3.providers.HttpProvider(
    // pass url of remote node
    'https://rinkeby.infura.io/v3/b9b5b2d67af444b388cbed19e2261129'
  );
  web3 = new Web3(provider);

}

export default Web3;

// const Web3 = require("web3");
// const ethEnabled = () => {
//   if (window.ethereum) {
//     window.web3 = new Web3(window.ethereum);
//     window.ethereum.enable();
//     return true;
//   }
//   return false;
// }
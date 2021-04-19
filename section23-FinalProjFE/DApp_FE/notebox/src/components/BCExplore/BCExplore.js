// made thanks to https://youtu.be/XKxt6y_86lk?t=1818
import React, { Component } from 'react';
import Web3 from 'web3';

class BCExplore extends Component {
  async componentWillMount() {
    // function will be called whenever the component mounts to the virtual dom in react (before render)
    let web3 = new Web3('https://mainnet.infura.io/v3/b9b5b2d67af444b388cbed19e2261129')
    //fetch latest block
    let latestBlock = await web3.eth.getBlock('latest')
    console.log('latest block', latestBlock)
    this.setState({
      blockNumber: latestBlock.number,
      difficulty: latestBlock.difficulty
    })
    // fetch gasPrice
    let gasPrice = await web3.eth.getGasPrice()
    console.log('gasPrice', gasPrice)
    this.setState({
      gasPrice: gasPrice,
    })

    //fetch 10 blocks
    let block
    let latestBlocks = []
    for (let i = 0; i < 10; i++) {
      block = await web3.eth.getBlock(latestBlock.number - i)
      latestBlocks.push(block)
      console.log(block) 
    }
    this.setState({
      latestBlocks: latestBlocks
    })
  }

  constructor(props) {
    super(props);
    this.state = { 
      blockNumber: 0, 
      difficulty: 0,
      gasPrice: 0,
      latestBlocks: [] 
    };
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.boober.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Tippi Fifestarr: wingbird/webdev
          </a>
        </nav>
        <div className="container-fluid mt-5">
          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto" style={{ width: '800px' }} >
                <h5>blockchain: ethereum explorer</h5>

              {/* yeah */}
                <div className="row">
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>LATEST BL_CK</h5>
                      <p> { this.state.blockNumber } </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>D__FICU_TY</h5>
                      <p> { this.state.difficulty } </p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>G_S PRICE</h5>
                      <p> { this.state.gasPrice } </p>
                    </div>
                  </div>
                </div>
              {/* new row */}
              <div className="row">
                  <div className="col-lg-12 mt-3">
                    <div className="bg-light pt-4 pb-3 m-1">
                      <h5>LATEST BL_CK</h5>
                      <p> { this.state.blockNumber } </p>
                      <h4>next! x 10</h4>
                    </div>
                  {/* put a card here */}
                  <div className="card-body">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">#</th>
                          <th scope="col">_ash</th>
                          <th scope="col">Min_r</th>
                          <th scope="col">Tim_st_mp</th>                         
                        </tr>
                      </thead>
                      <tbody>

                        { this.state.latestBlocks.map((block, key) => {
                              return (
                                <tr key={key} >
                                  <th scope="row">{block.number}</th>
                                  <td>{block.hash.substring(0,21)}...{block.hash.substring(64,66)}</td>
                                  <td>{block.miner.substring(0,21)}...</td>
                                  <td>{block.timestamp}</td>
                                </tr>
                              )
                            }) 
                        }
                      </tbody>
                    </table>

                  </div>
                  </div>
                  
                </div>

              </div>
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default BCExplore;

// import contractFactory from "../Web3/contractFactory";

const Account = () => {
    return (
        <div>
            <div className='f3'>
                {'Tippi, you currently have ' } 
                {/* {contractFactory.methods.totalSupply().call()}  */}
                {'__ notes'}
            </div>
            <div className='white f1'>
                {'0 of __'}
            </div>
        </div>
    )
}

export default Account;
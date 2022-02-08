import { BiBell, BiSearch } from 'react-icons/bi';
import { useState, useEffect } from 'react';
import Web3 from 'web3';

function Navigation() {

    const [account, setAccount] = useState(null);
    let [web3, setWeb3] = useState(null);

    useEffect(() => {
        checkAccount() // Check if a wallet is connected
      }, [])

    async function click() {
        if (window.ethereum) { // If a wallet is installed and detected
            try {
                await window.ethereum.request({ method: 'eth_requestAccounts' }); // Try to connect to the wallet
                checkAccount() // Get the account
            } catch (err) {
                console.log('user did not add account...', err) // Do nothing (the wallet may be locked or dsabled)
            }
        }        
    }

    async function checkAccount() {
        let web3 = new Web3(window.ethereum)
        setWeb3(web3)
        const accounts = await web3.eth.getAccounts()
        setAccount(accounts[0])
    }



    return (
        <div className="w-full px-7 my-5">
            <div className="flex justify-between">
                <div className="flex items-center max-w-[200px] w-full">
                    <div className="font-black text-xl justify-start hover:cursor-pointer">Token</div>
                </div>
                <div className="flex space-x-2 items-center justify-center w-full">
                    <div className="bg-blue-100 px-3 py-2 font-semibold text-blue-600 text-sm rounded-lg hover:cursor-pointer">Home</div>
                    <div className="flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 font-medium text-black text-sm rounded-lg hover:cursor-pointer">
                        <div>Categories</div>
                        <svg className="h-3 w-3 fill-gray-600 pt-0.5" xmlspace="preserve" width="512" height="298" shapeRendering="geometricPrecision" textRendering="geometricPrecision" imageRendering="optimizeQuality" fillRule="evenodd" clipRule="evenodd" viewBox="0 0 512 298.04"><path fillRule="nonzero" d="M12.08 70.78c-16.17-16.24-16.09-42.54.15-58.7 16.25-16.17 42.54-16.09 58.71.15L256 197.76 441.06 12.23c16.17-16.24 42.46-16.32 58.71-.15 16.24 16.16 16.32 42.46.15 58.7L285.27 285.96c-16.24 16.17-42.54 16.09-58.7-.15L12.08 70.78z"/></svg>
                    </div>
                    <div className="hover:bg-gray-100 px-3 py-2 font-medium text-black text-sm rounded-lg hover:cursor-pointer">Communities</div>
                </div>
                <div className="flex space-x-4 items-center justify-end max-w-[200px] w-full">
                    <div className="flex items-center space-x-1">
                        <div className="hover:bg-gray-100 rounded-lg p-2">
                            <BiSearch size={22} />
                        </div>
                        <div className="hover:bg-gray-100 rounded-lg p-2">
                            <BiBell size={22} />
                        </div>
                    </div>
                    <button className="px-3 py-2 font-semibold rounded-lg bg-gray-100 text-blue-600 text-sm hover:bg-blue-600 hover:text-white hover:cursor-pointer" onClick={click}>
                        {account == null ? `Connect\u00A0Wallet` : `${account.slice(0, 6)}...${account.slice(-4)}`}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Navigation
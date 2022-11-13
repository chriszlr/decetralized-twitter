import React, {useState, useEffect} from 'react'
import "./App.css"
import Sidebar from "./components/Sidebar"
import Feed from "./components/Feed"
import Widgets from "./components/Widgets"

const {ethereum} = window

const App = () => {

  const [currentAccount, setcurrentAccount] = useState("")
  const [correctNetwork, setcorrectNetwork] = useState(false)


  // call metamask to connect wallet on clicking connect wallet btn
  const connectWallet = async () => {
    try {
      if(!ethereum){
        console.log("Metamask not detected")
        return;
      }

      let chainId = await ethereum.request({method: "eth_chainId"})
      console.log("connected to chain: ", chainId)

      const goerliChainID = "0x5"

      if(chainId !== goerliChainID){
        alert("You are not connected to the Goerli Testnet!")
        setcorrectNetwork(false)
        return;
      }else{
        setcorrectNetwork(true)
      }

      const accounts = await ethereum.request({method: "eth_requestAccounts"})
      console.log("Found Account: ", accounts[0])
      setcurrentAccount(accounts[0])
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    connectWallet()
  }, [])

  const checkWalletConnected = async () => {
    try {
      if(!ethereum){
        console.log("MetaMask not detected")
        return;
      }

      let chainId = await ethereum.request({method: "eth_chainId"})
      console.log("connected to chain: ", chainId)

      const goerliChainID = "0x5"
      if(chainId !== goerliChainID){
        alert("You are not connected to the Goerli Testnet!")
        setcorrectNetwork(false)
        return;
      }else{
        setcorrectNetwork(true)
      }

      const accounts = ethereum.request({method: "eth_accounts"})
      if(accounts.length){
        console.log("Found account: ", accounts[0])
        setcurrentAccount(accounts[0])
      }
    } catch (error) {
      console.log(error)
    }
  }


  return (
    // BEM
    <div>
      {currentAccount === '' ? (
        <button
        className='text-2xl font-bold py-3 px-12 bg-[#f1c232] rounded-lg mb-10 hover:scale-105 transition duration-500 ease-in-out'
        onClick={connectWallet}
        >
        Connect Wallet
        </button>
        ) : correctNetwork ? (
          <div className="app">
            <Sidebar />
            <Feed />
            <Widgets />
          </div>
        ) : (
        <div className='flex flex-col justify-center items-center mb-20 font-bold text-2xl gap-y-3'>
        <div>----------------------------------------</div>
        <div>Please connect to the Goerli Testnet</div>
        <div>and reload the page</div>
        <div>----------------------------------------</div>
        </div>
      )}
    </div>
  )
}

export default App
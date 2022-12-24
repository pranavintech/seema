import { ConnectWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";

export default function Home() {
  return (
    <div className="container">
        <h1 className="title">
          Welcome to SEEMA
        </h1>

        <p className="description">
          Solar Energy Equity Managment System
        </p>
      
        <div className="connect">
          <ConnectWallet />
        </div>
        <div>
          <a href="https://thirdweb.com/mumbai/0xE9B1B97509A0048A3a40cdC1069301F9940579a3/events" className="card">
            <h2></h2>
            <p>
              Deploy, configure and manage your smart contract.
            </p>
          </a>
        </div>
        </div>
      
  )
}

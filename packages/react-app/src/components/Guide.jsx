import React from "react";

const Guide = () => {
  return (
    <div>
      {/* Welcome! */}
      <div>
        <h1>Welcome to StrangerCats NFT Project!</h1>
        <div>
          <h3>This is a <a href="#dapp">Decentralized Application</a> that lets the user mint and transfer StrangerCat<a href="nft">NFTs</a>. </h3>
          <h3>In this project we followed the instructions for <a href="https://github.com/scaffold-eth/scaffold-eth-challenges/tree/challenge-0-simple-nft">Simple NFT Example</a></h3>
          <h3>Out kitties are provided by <a href="https://www.kaggle.com/datasets/crawford/cat-dataset">Kaggle Cat Dataset</a></h3>
        </div>
      </div>

      <hr></hr>

      {/* Website Guide */}
      <div>
        <h1>How to use this website:</h1>
        <div>
          <h2>YourCollectibles</h2>
          <div>
            <h3>1. Make sure you have some funds from the faucet for gas.</h3>
            <img src="https://user-images.githubusercontent.com/2653167/142483294-ff4c305c-0f5e-4099-8c7d-11c142cb688c.png"></img>
            <h3>2. Click the MINT NFT button!</h3>
            <img src="https://user-images.githubusercontent.com/12072395/145692116-bebcb514-e4f0-4492-bd10-11e658abaf75.PNG"></img>
            <h3>3. You should see your collectibles start to show up:</h3>
            <img src="https://user-images.githubusercontent.com/526558/124386983-48965300-dcb3-11eb-88a7-e88ad6307976.png"></img>
          </div>
        </div>

        {/* <div>
          <h2>Transfers</h2>
        </div>

        <div>
          <h2>IPFS Upload</h2>
        </div> */}

      </div>

      <hr></hr>

      {/* Explanations! */}
      <div className="key-terms">
        <h1>Key Terms:</h1>
        <ul>
          <li>
            <div id="dapp">
              <h3><strong>Decentralized Application (DAPP)</strong>: is any digital app with the additional feature of employing blockchain technology to keep users’ data out of the hands of the organizations behind it.</h3>
            </div>
          </li>
          <li>
            <div id="nft">
              <h3><strong>Non-Fungible Token(NFT)</strong>: Unique cryptographic assets that exist on a blockchain with unique identification codes and metadata that distinguish them from each other and cannot be replicated. NFTs can represent real-world items like real estate and artwork.</h3>
            </div>
          </li>
          <li>
            <div id="mint">
              <h3><strong>Minting an NFT</strong>: Minting an NFT, is publishing a unique digital asset on a blockchain so that it can be bought, sold, and traded.</h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Guide;
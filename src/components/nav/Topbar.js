import {Link} from "react-router-dom";
import beeLogo from "@assets/images/bee.png";
import routes from "@utils/routes";
import useWallet from "@src/hooks/useWallet";
import {useEffect, useState} from "react";
import config from "@app/config";
import CryptoSkull from "@src/artifacts/contracts/CryptoSkull.sol/CryptoSkull.json";

const { ethers } = require("ethers");

const texts = require('@data/json/text.json');

const contractAddress = config.ADDRESS_CONTRACT; //15:20 Comment créer une Dapp avec Solidity et ReactJS (tuto pour débutants)

export default function Topbar() {
    const socialNetworks = texts.social_network;
    const interact = useWallet()[3];
    const isConnected = useWallet()[4];
    const connect = useWallet()[5];
    const disconnect = useWallet()[6];

    useEffect(() => {
        (async() => typeof window.ethereum === 'undefined' ? disconnect() : connect())();
    })

    const requestAccount = async () =>  {
        await window.ethereum.request({method: 'eth_requestAccounts'});
    }

    // const buySkull = async () => {
    //     if(typeof window.ethereum !== 'undefined') {

    //         await requestAccount(); 
            
    //         const provider = new ethers.providers.Web3Provider(window.ethereum);
    //         const signer = provider.getSigner();
    //         const contract = new ethers.Contract(contractAddress, CryptoSkull.abi, signer);
    //         const transaction = await contract.buySkull();

    //         try {
    //             const data = await contract.buySkull();
    //             console.log(data);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     }
    // }
    
    return <nav className="transition ease-in-out container mx-auto flex justify-between flex-wrap p-4 absolute top-0 left-0 right-0 z-50">
        <div className="flex w-full md:w-72 center mb-3">
            <Link to={routes.home}><img className="pointer" src={beeLogo} width="40" height="40" alt=""/></Link>
        </div>

        <div className="flex justify-around mb-3 w-full md:w-max">
            {socialNetworks.map((s, i) => <a
                className="transform center flex transition ease-in-out hover:text mx-4 hover:font-bolder hover:scale-125"
                key={i} target="_blank"
                href={s.link}
                rel="noreferrer"
            >{s.name}</a>
            )}
        </div>

        {!isConnected && <div className="flex center w-full center md:w-max">
            <div
                children="Please connect your wallet to mint"
                className="bg-gray-50 text-gray-800 p-2 transform border-2 rounded-sm border-white-800 transition ease-in-out hover:text hover:font-bolder"
            />
        </div>}
    </nav>
}

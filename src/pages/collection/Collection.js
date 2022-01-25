import FullContainer from "@components/container/Container";
import {Link, useParams} from "react-router-dom";
import DivImage from "@components/div-image/DivImage";
import StatsTopItemsOwner from "@layouts/Collection/StatsTopItemsOwner";
import {useEffect} from "react";
import useTheme from "@src/hooks/useTheme";
import HorizontalSubMenu from "@components/horizontal-sub-menu/HorizontalSubMenu";
import routes from "@utils/routes";
import Breadcrumb from "@components/bread-crumb/Breadcrumb";
import {firstUpperCase} from "@utils/stringUtils";
import OverAllStats from "@layouts/Collection/OverAllStats";
import AllCollectionTypeAndAttribute from "@layouts/Collection/AllCollectionTypeAndAttribute";
import LargestSales from "@layouts/Collection/LargestSales";
import LastTransactions from "@layouts/Collection/LastTransactions";
import ForSale from "@layouts/Collection/ForSale";
import Bids from "@layouts/Collection/Bids";
import Sales from "@layouts/Collection/Sales";

const subMenuButtons = [
    'Overall Stats',
    'Top owners',
    'All Skull',
    'Largest sales',
    'Last transactions',
    'For sale',
    'Bids',
    'Sales'
];

const Collection = () => {
    const {name} = useParams();
    const white = useTheme()[3];

    useEffect(() => white() , [])

    return <FullContainer>

        <Breadcrumb>
            <Link to={routes.home}>{firstUpperCase("home")}</Link>
            <p>{firstUpperCase(name)}</p>
        </Breadcrumb>

        <h1 className="my-4 text-4xl">{firstUpperCase(name)} Collection</h1>

        <p className="py-12">
            10,000 unique collectible characters with proof of ownership stored on the Ethereum blockchain.
            The project that inspired the modern CryptoArt movement.
            Selected press and appearances include Mashable, CNBC, The Financial Times, Bloomberg,
            MarketWatch, The Paris Review, Salon, The Outline, BreakerMag, Christie's of London,
            Art|Basel, The PBS NewsHour, The New York Times in 2018 and again in 2021.
            The Cryptopunks are one of the earliest examples of a "Non-Fungible Token" on Ethereum,
            and were inspiration for the ERC-721 standard that powers most digital art and collectibles.
        </p>

        <div className="mb-20">
            <DivImage path={require('@assets/images/bee.png').default} />
        </div>

        <HorizontalSubMenu buttons={subMenuButtons}>
            <OverAllStats />
            <StatsTopItemsOwner />
            <AllCollectionTypeAndAttribute />
            <LargestSales />
            <LastTransactions />
            <ForSale />
            <Bids />
            <Sales />
        </HorizontalSubMenu>


        <hr className="mt-6" />

        <div className="py-12">
            <h2 className="font-semibold text-xl mb-6">What is a {firstUpperCase(name)} ?</h2>

            <p>
                The {name} are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status (here's an example).
            </p>
        </div>

        <hr className="mt-6" />

        <div className="py-12">
            <h2 className="font-semibold text-xl mb-6">What exactly is going on here?</h2>

            <p>
                The {name} are 24x24 pixel art images, generated algorithmically. Most are punky-looking guys and girls, but there are a few rarer types mixed in: Apes, Zombies and even the odd Alien. Every punk has their own profile page that shows their attributes as well as their ownership/for-sale status (here's an example).
            </p>
        </div>

        <hr className="mt-6" />

        <div className="py-12">
            <h2 className="font-semibold text-xl mb-6">How do I get a {name}?</h2>

            <ul>
                <l>Download and install a Chrome browser plugin called MetaMask. This will allow websites (that you authorize) access to your Ethereum account.</l>
                <l>If you made a new account, buy some Ether. The MetaMask plugin has a button that will allow you to buy Ether from Coinbase.</l>
                <l>Once you have the plugin installed, this website will recognize it and add buttons that allow you to bid on, buy and sell punks directly in the interface.</l>
                <l>For example, you can buy Punk #8560 for 73.99 ETH ($180,199.68 USD).</l>
            </ul>
        </div>

        <Link className="text-blue-600 underline" to={routes.home}>Show FAQ</Link>

    </FullContainer>
}


export default Collection

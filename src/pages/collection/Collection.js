import FullContainer from "@components/container/Container";
import {Link, useParams} from "react-router-dom";
import DivImage from "@components/div-image/DivImage";
import StatsTab from "@layouts/Collection/StatsTab";
import StatsItemsOwner from "@layouts/Collection/StatsItemsOwner";
import CardContainer from "@components/card-container/CardContainer";
import {useEffect} from "react";
import useTheme from "@src/hooks/useTheme";
import HorizontalSubMenu from "@components/horizontal-sub-menu/HorizontalSubMenu";
import routes from "@utils/routes";
import Breadcrumb from "@components/bread-crumb/Breadcrumb";
import {firstUpperCase} from "@utils/stringUtils";

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

        <DivImage path={require('@assets/images/bee.png').default} />

        <HorizontalSubMenu buttons={['Overall Stats', 'Top owners', 'Item 3'] }>

            <CardContainer>
                <StatsTab />
            </CardContainer>

            <StatsItemsOwner />

            <CardContainer>
                <span>"</span>
            </CardContainer>
        </HorizontalSubMenu>


    </FullContainer>
}


export default Collection

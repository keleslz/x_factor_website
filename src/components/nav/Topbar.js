import {Link} from "react-router-dom";
import beeLogo from "@assets/images/bee.png";
import routes from "@utils/routes";
import useWallet from "@src/hooks/useWallet";

const texts = require('@data/json/text.json');

export default function Topbar() {
    const socialNetworks = texts.social_network;
    const interact = useWallet()[3];

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

        {<div className="flex center w-full center md:w-max">
            <button
                children="Connect wallet"
                className="bg-gray-50 text-gray-800 p-2 transform border-2 rounded-md border-white-800 transition ease-in-out hover:text hover:font-bolder hover:scale-125"
                onClick={() => interact()}
            />
        </div>}
    </nav>
}

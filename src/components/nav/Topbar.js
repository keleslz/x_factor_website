import {Link, useLocation} from "react-router-dom";
import beeLogo from "@assets/images/bee.png";
import routes from "../../utils/routes";
import {  } from "react-router-dom";

const texts = require('@data/json/text.json');

export default function Topbar() {
    const socialNetworks = texts.social_network;
    return <nav className="w-full absolute mt-10">
            <div className="text-lg flex-wrap px-4 sm:mx-auto sm:w-4/6 flex sm:center md:justify-around">
                <div className="w-6/12 flex">
                    <Link className="lg:pl-12 flex center" to='/'>
                        <img
                            width={50}
                            height={50}
                            src={beeLogo}
                            alt="Bee logo"
                            className="mr-4"
                        />
                        <div>
                            KNA
                        </div>
                    </Link>
                </div>
                <div className="flex justify-around w-2/4 flex-wrap ">
                    {socialNetworks.map((s, i) => <a
                        className="transform center flex transition ease-in-out hover:text hover:font-bolder hover:scale-125"
                        key={i} target="_blank"
                        href={s.link}>{s.name}</a>)}
                </div>
            </div>
        </nav>
}

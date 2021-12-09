import {Link} from "react-router-dom";
import beeLogo from "@assets/images/bee.png";
const texts = require('@data/json/text.json');

export default function Topbar() {
    const socialNetworks = texts.social_network;

    return <nav className="w-full absolute mt-10">
        <div className="text-lg mx-auto bg-gray-50 w-4/6 flex flex md:justify-around">
            <div className="w-6/12 flex">
                <Link className="lg:pl-12" to='/'>
                        <img
                            width={50}
                            height={50}
                            src={beeLogo}
                            alt="Bee logo"
                        />
                </Link>
            </div>
            <div className="flex justify-around w-2/4 flex-wrap ">
                {socialNetworks.map((s, i) => <Link key={i} to={s.link} >{s.name}</Link>)}
            </div>
        </div>
    </nav>
}

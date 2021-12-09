import {Link} from "react-router-dom";
const texts = require('@data/json/text.json');

const Footer = () => {
    const socialNetworks = texts.social_network;
    const copyright = texts.copyright;

    return <footer className="w-95-percent mt-4 flex-wrap py-4 text-lg mx-auto w-full flex ">
        <div className="w-full mx-auto py-4 flex-wrap bg-gray-100 shadow-lg rounded-md justify-around flex">
            {socialNetworks.map((s, i) => <Link className="px-2 "key={i} to={s.link} >{s.name}</Link>)}
            <Link className="" to='/'><p>&copy; {copyright}</p></Link>
        </div>
    </footer>
}

export default Footer;

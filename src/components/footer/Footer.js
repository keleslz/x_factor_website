import {Link} from "react-router-dom";
const texts = require('@data/json/text.json');

const Footer = () => {
    const socialNetworks = texts.social_network;
    const copyright = texts.copyright;

    return <footer className="px-auto px-4 pt-6 pb-4 text-xs">
        <div className="flex flex-wrap center">
            {socialNetworks.map((s, i) => <Link className="px-4 mb-2" key={i} to={s.link} >{s.name}</Link>)}
            <Link className="px-2 mb-2" to='/'>
                <p>&copy; {copyright}</p>
            </Link>
        </div>
    </footer>
}

export default Footer;

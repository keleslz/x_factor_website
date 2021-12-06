import {Link} from "react-router-dom";

const Footer = () => {
    return <footer className="w-95-percent mt-4 py-4 text-lg mx-auto w-full flex ">
        <div className="w-full mx-auto py-4 bg-gray-100 shadow-lg rounded-md justify-around flex">
            <Link className="" to='/discord'>Discord</Link>
            <Link className="" to='/insta'>Insta</Link>
            <Link className="" to='/insta'><p>&copy; 2020 Beeverse.com</p></Link>
        </div>
    </footer>
}

export default Footer;

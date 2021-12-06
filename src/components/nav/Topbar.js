import {Link} from "react-router-dom";
import beeLogo from "@assets/images/bee.png";

export default function Topbar() {
    return <nav className="w-full absolute">
        <div className="text-lg mx-auto bg-gray-50 w-4/6 flex items-center">
            <div className="w-6/12">
                <Link className="pl-4" to='/'>
                    <div className="flex flex-col">
                        <span >Bee'Verse</span>
                        <img
                            className="pl-4"
                            width={50}
                            height={50}
                            src={beeLogo}
                        />
                    </div>
                </Link>
            </div>
            <div className="flex justify-around w-2/4">
                <Link className="" to='/discord'>Discord</Link>
                <Link className="" to='/insta'>Insta</Link>
            </div>
        </div>
    </nav>
}

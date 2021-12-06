import Card from "../../components/card/Card";
import Button from "../../components/button/Button";
import {Link} from "react-router-dom";

export default function FirstPart() {
    const cards = [{
        title : 'The Coldest Sunset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores perferendis eaque, exercitationem praesentium nihil.'
    }, {
        title : 'The Coldest Sunset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores perferendis eaque, exercitationem praesentium nihil.'
    }, {
        title : 'The Coldest Sunset',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores perferendis eaque, exercitationem praesentium nihil.'
    }]

   return <div
            className="rounded-t-lg shadow-lg full-container bg-center bg-gray-50 w-6/12 pt-48 flex center flex-col transition ease-in-out duration-700"
        >

       <div className="mb-24">
            <h1 className="h-1/4 flex center ease-in-out duration-700 text-center px-4 font-sans text-2xl transition transform hover:-translate-y-2 cursor-pointer font-bold h-1/2 ">
                1,111 unique NFT's who need Drivers
            </h1>
        </div>

       <div className="mb-24">
           <Link to="/collections/bee">
               <Button
                   children="Show all"
                   type="big"
                   color="white"
                   bg="blue"
               />
           </Link>
       </div>

       <div className="flex center flex-wrap">
           {cards.map( e =>  <Card
                   title={e.title}
                   description={e.description}
               />)}
       </div>
    </div>
}

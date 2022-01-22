import FullContainer from "@components/container/Container";
import Pills from "@components/pills/Pills";
import Rotator from "@components/rotator/Rotator";
import beeLogo from "@assets/images/bee.png";
import {useSelector} from "react-redux";
import Glych from "../../components/react-vfx/Glych";
import {VFXImg} from "react-vfx";

const texts = require('@data/json/text.json');
const imageSize = 300;

export default function FirstPart() {
    const intro = texts.home.intro;
    const collections = useSelector(state => state.collections.items);

    return <FullContainer>
        <div className="flex justify-around flex-wrap space-x-4 mb-12 pt-12">
            <div className="w-80 mb-12">
                <p className="mb-8">{intro}</p>
                <Pills />
            </div>

            <div  className="mb-12">
                <h1 className=" w-80 text-4xl font-semibold">
                    <span className=" mb-4 inline-block">Discover rare</span>
                    <span className=" mb-4 inline-block"> digital art</span>
                    <span className=" mb-4 inline-block">and collect <strong className="text-salmon">NFTs</strong></span>
                </h1>
            </div>

            <div className="w-max relative overflow-hidden">

                <Glych>
                    <VFXImg  width={imageSize} src={beeLogo} shader="rgbShift"></VFXImg>
                </Glych>

                <p className="absolute inset-0 flex center top-0 font-bold text-9xl text-black">X</p>
            </div>
        </div>

    </FullContainer>
}

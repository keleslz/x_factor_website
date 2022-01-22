import FirstPart from "@layouts/home/FirstPart";
import FadeIn from 'react-fade-in';
import Faq from "@layouts/home/Faq";
import CategoryRow from "@layouts/home/category-row/CategoryRow";
import Glych from "../../components/react-vfx/Glych";
import {VFXDiv, VFXSpan} from "react-vfx";
import ScrollMotion from "../../components/react-scroll-motion/ScrollMotion";

export default function Home() {
    return <div className="relative">

        <ScrollMotion>
            <Glych>
                <VFXDiv
                    className="text-4xl full-container flex text-center center text-white leading-relaxed"
                    style={{fontSize: "4em"}}
                    shader="rgbShift"
                >
                    Join XFactor on the Metaverse
                </VFXDiv>
            </Glych>
        </ScrollMotion>

        <FadeIn>

            <FirstPart/>
            <CategoryRow/>
            <Faq/>
        </FadeIn>
    </div>
}

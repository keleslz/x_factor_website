import FirstPart from "@layouts/home/FirstPart";
import FadeIn from 'react-fade-in';
import Faq from "@layouts/home/Faq";
import CategoryRow from "@layouts/home/category-row/CategoryRow";
import Glych from "@components/react-vfx/Glych";
import {VFXDiv} from "react-vfx";
import ScrollMotion from "@components/react-scroll-motion/ScrollMotion";
import useWallet from "@src/hooks/useWallet";
import FullContainer from "@components/container/Container";
import useTheme from "@src/hooks/useTheme";
import {useEffect} from "react";

export default function Home() {
    const [isOpen] = useWallet();
    const dark = useTheme()[2];

    useEffect(() => {
        dark();
    },[])

    return !isOpen ? (<div className="relative">
        <ScrollMotion>
            <Glych>
                <VFXDiv
                    className="text-4xl full-container flex text-center center text-white leading-relaxed"
                    style={{fontSize: "4em"}}
                    shader="rgbShift"
                >
                    Join X-Factor on the Metaverse
                </VFXDiv>
            </Glych>
        </ScrollMotion>

        <FadeIn>

            <FirstPart/>
            <CategoryRow/>
            <Faq/>
        </FadeIn>
    </div>) : <FullContainer />
}

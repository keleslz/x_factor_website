import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    FadeIn,
    MoveOut,
    Sticky,
} from "react-scroll-motion";

const ScrollMotion = ({children}) => {
    return <ScrollContainer>

        <ScrollPage page={0}>
            <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -400))}>
                {children}
            </Animator>
        </ScrollPage>

    </ScrollContainer>
}

export default ScrollMotion;

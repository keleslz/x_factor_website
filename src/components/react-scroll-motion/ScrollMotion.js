import {
    Animator,
    ScrollContainer,
    ScrollPage,
    batch,
    Fade,
    FadeIn,
    Move,
    MoveIn,
    MoveOut,
    Sticky,
    StickyIn,
    ZoomIn
} from "react-scroll-motion";

const ScrollMotion = ({children}) => {

    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return <ScrollContainer>

        <ScrollPage page={0}>
            <Animator animation={batch(FadeIn(), Sticky(), MoveOut(0, -400))}>
                {children}
            </Animator>
        </ScrollPage>

    </ScrollContainer>
}

export default ScrollMotion;

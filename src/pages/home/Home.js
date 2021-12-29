import FirstPart from "@layouts/home/FirstPart";
import SecondPart from "@layouts/home/SecondPart";
import FadeIn from 'react-fade-in';
import ThirdPart from "@layouts/home/ThirdPart";
import BackgroundImage from "@components/background-image/BackgroundImage";


export default function Home() {
    return <div className="relative">
        <BackgroundImage />
        <FadeIn>
            <FirstPart />
            <SecondPart />
            {/*<ThirdPart />*/}
        </FadeIn>
    </div>
}

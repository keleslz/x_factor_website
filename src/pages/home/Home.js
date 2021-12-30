import FirstPart from "@layouts/home/FirstPart";
import SecondPart from "@layouts/home/SecondPart";
import FadeIn from 'react-fade-in';
import BackgroundImage from "@components/background-image/BackgroundImage";
import Faq from "@layouts/home/Faq";
import bg from "@assets/images/bg.jpg";


export default function Home() {
    return <div className="relative">
        <BackgroundImage bg={bg} />
        <FadeIn>
            <FirstPart />
            <SecondPart />
            <Faq />
        </FadeIn>
    </div>
}

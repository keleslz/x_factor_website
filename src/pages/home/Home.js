import FirstPart from "@layouts/home/FirstPart";
import SecondPart from "@layouts/home/SecondPart";
import FadeIn from 'react-fade-in';
import Faq from "@layouts/home/Faq";

export default function Home() {
    return <div className="relative">
        <FadeIn>
            <FirstPart />
            <SecondPart />
            <Faq />
        </FadeIn>
    </div>
}

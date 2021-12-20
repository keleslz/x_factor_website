import FirstPart from "@layouts/home/FirstPart";
import SecondPart from "@layouts/home/SecondPart";
import FadeIn from 'react-fade-in';
import ThirdPart from "@layouts/home/ThirdPart";


export default function Home() {
    return <div>
        <FadeIn>
            <FirstPart />
            <ThirdPart />
            <SecondPart />
        </FadeIn>
    </div>
}

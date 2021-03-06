import SpringCarousselAuto from "@components/spring-caroussel-auto/SpringCarousselAuto";
import bg from "@assets/images/bg.jpg";

const BackgroundImage = () => <SpringCarousselAuto className="fixed inset-0 fixed inset-0 opacity-25" from={'-20px'} to={'20px'} duration={5_000} addStyles={{zIndex : -1000}}>
    <div className="absolute inset-0 -z-100" style={{ backgroundImage: `url(${bg})`, zIndex: '-1000'}}></div>
</SpringCarousselAuto>

export default BackgroundImage;

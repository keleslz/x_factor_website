import {useSelector} from "react-redux";
import {useEffect} from "react";

const MessageBanner = ({ hasCloseButton = true }) => {
    const message = useSelector(state => state.error.value);

    useEffect(() => {
        if(message.length > 0)
        {
            document.body.style.overflow = 'hidden'
        }else {
            document.body.style.overflow = ''
        }
    },[message])

    return message.length > 0 ? (
        <div
            className="z-50 flex center overflow-hidden bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg fixed inset-0 text-black"
        >
            {hasCloseButton && <div className="cursor-pointer absolute top-5 right-5 font-sans"><span
                onClick={() => window.location.reload()}>X</span></div>}
            {message}
        </div>
    ) : (<div></div>)
}

export default MessageBanner;

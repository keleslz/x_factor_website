import {useState} from "react";

const MessageBanner = ({
   message,
   hasCloseButton = true
}) => {
    const [isActive, setIsActive] = useState(message.length > 0)
    return isActive ? (
        <div
            className="flex center overflow-hidden bg-white p-5 rounded-xl bg-opacity-60 backdrop-filter backdrop-blur-lg fixed inset-0">
            {hasCloseButton && <div className="cursor-pointer absolute top-5 right-5 font-sans"><span
                onClick={() => setIsActive(!isActive)}>X</span></div>}
            {message}
        </div>
    ) : (<div></div>)
}

export default MessageBanner;

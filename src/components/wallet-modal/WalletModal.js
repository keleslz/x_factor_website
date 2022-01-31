import Sail from "@components/sail/Sail";
import Button from "@components/button/Button";
import useWallet from "@src/hooks/useWallet";

const WalletModal = () => {
    const isOpen = useWallet()[0];
    const interact = useWallet()[3];
    const connect = useWallet()[5];
    const disconnect = useWallet()[6];

    return <Sail isHidden={!isOpen}>
        <div className="flex flex-col p-4 bg-white shadow-md hover:shodow-2xl rounded-2xl">
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         className="w-16 h-16 rounded-2xl p-3 border border-blue-100 text-blue-400 bg-blue-50"
                         fill="none"
                         viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                              d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                    <div className="flex flex-col ml-3">
                        <div className="text-blue-400 font-semibold leading-none">Connect your metamask account</div>
                    </div>
                </div>
            </div>
            <div className="flex center mt-6 flex-wrap">
                <Button
                    type="normal"
                    children="Connect"
                    color="white"
                    bg="blue"
                    className="mb-2"
                    onClick={() => {
                        connect();
                        interact();
                    }}
                />
                <Button
                    type="normal"
                    children="Cancel"
                    color="white"
                    bg="red"
                    className="mb-2"
                    onClick={() => {
                        disconnect();
                        interact();
                    }}
                />
            </div>
        </div>
    </Sail>
}

export default WalletModal;

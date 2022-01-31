import {useDispatch, useSelector} from "react-redux";
import {close , open, connect as connectToWallet, disconnect as disconnectWallet } from "@redux/reducers/walletReducer";

const useWallet = () => {

    const isOpen = useSelector(state => state.wallet.modal.isOpen );
    const isConnected = useSelector(state => state.wallet.modal.isConnected );

    const dispatch = useDispatch();

    const active = () =>  dispatch(open());

    const disable = () =>  dispatch(close());

    const interact = () => isOpen ? disable() : active();

    const connect = () => dispatch(connectToWallet());

    const disconnect = () =>dispatch(disconnectWallet());

    return [isOpen , active, disable, interact, isConnected, connect, disconnect];
}

export default useWallet;

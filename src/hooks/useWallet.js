import {useDispatch, useSelector} from "react-redux";
import {close , open } from "@redux/reducers/walletReducer";

const useWallet = () => {

    const isOpen = useSelector(state => state.wallet.modal.isOpen );
    const isConnected = useSelector(state => state.wallet.modal.isConnected );

    const dispatch = useDispatch();

    const active = () =>  dispatch(open());

    const disable = () =>  dispatch(close());

    const interact = () => isOpen ? disable() : active();

    return [isOpen , active, disable, interact, isConnected];
}

export default useWallet;

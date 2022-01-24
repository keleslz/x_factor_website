import {useDispatch, useSelector} from "react-redux";
import {dark, light} from "@redux/reducers/themeReducer";

const useTheme = () => {
    const theme = useSelector(state => state.theme );
    const dispatch = useDispatch();

    const getClassName = () => `${theme.bg} ${theme.text}`;

    const setDark = () => dispatch(dark());

    const setLight = () => dispatch(light());

    return [theme, getClassName, setDark, setLight];
}

export default useTheme;

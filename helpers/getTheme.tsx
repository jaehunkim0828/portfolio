import { useSelector } from "react-redux";

import { RootState } from "../store/reducers";

export default function getTheme(style: any, name: any) {
    const { mode } = useSelector((state: RootState) => state.themeMode);

    const isLight = mode === 'light';
    // console.log(typeof window !== 'undefined' && window.localStorage.getItem('mode'));

    return isLight ? `${name} ${style.light}` : `${name} ${style.dark}`
}
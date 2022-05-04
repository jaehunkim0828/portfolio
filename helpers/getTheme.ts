import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../store/reducers";

export default function GetTheme(style: any, name: any) {
    const { mode } = useSelector((state: RootState) => state.themeMode);
    const [isLight, setIsLight] = useState(true);

    useEffect(() => {
        if (mode === 'light') {
            setIsLight(true);
            return;
        };
        setIsLight(false);

    }, [mode])
    return isLight ? `${name} ${style.light}` : `${name} ${style.dark}`
}
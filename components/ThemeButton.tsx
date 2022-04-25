import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { onLight, onDark } from '../store/actions/themeMode';

import style from '../styles/themeButton.module.scss';
import { RootState } from '../store/reducers';
import getTheme from '../helpers/getTheme';

export default function ThemeButton() {
    const dispatch = useDispatch();
    const { mode } = useSelector((state: RootState) => state.themeMode);

    const [location, setLication] = useState(0);

    useEffect(() => {
        if (mode === 'dark') {
            setLication(1);
        };
    }, [mode]);


    const onClickMode = () => {
        if (!location) {
            dispatch(onDark());
            window.localStorage.setItem('mode', 'dark');
            setLication(1);
            return;
        };
        window.localStorage.setItem('mode', 'light');
        dispatch(onLight());
        setLication(0);
    }

    return (
        <button 
            className={getTheme(style, style.themeButton)}
            onClick={onClickMode}
        >
            <div className={getTheme(style, style.btn)} style={{
                transform: `translate3d(${!location? 0 : location * 29}px, 0px, 0px)`
            }}></div>
        </button>
    )
}
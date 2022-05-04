import { useRouter } from 'next/router';

import style from '../styles/nav.module.scss';
import Image from 'next/image';

import getTheme from '../helpers/getTheme';
import { navProfile } from '../data';
import { useResize } from '../hooks/useResize';
import toggle from '../public/images/navtoggle.svg';
import down from '../public/images/down.png';
import { useState } from 'react';



export default function Nav() {
    const router = useRouter();
    const { nowWidth } = useResize();

    const [isTgClicked, setIsTgClicked] = useState<boolean>(false);

    const onToggle = () => {
        setIsTgClicked(!isTgClicked);
    }


    return (
        <div className={getTheme(style, style.navContainer)}>
            <div className={getTheme(style, style.items)} >
                {
                    nowWidth && nowWidth > 650 ? (
                        <div className={style.itemsContainer}>
                            {navProfile?.map((e, i) => (
                                <div 
                                    key={i}
                                    className={style.item} 
                                    onClick={() => router.push(e.path)}
                                >
                                    {e.name}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div 
                            className={style.toggle}
                            onClick={onToggle}
                        >
                            <div className={style.toggleContainer}>
                                <div className={style.image}>
                                    <Image src={!isTgClicked ? toggle : down} alt='toggle'/>
                                </div>
                                <div className={style.dropdown} style={{ height: isTgClicked ? '100%': '0'}}>
                                    {navProfile?.map((e, i) => (
                                        <div 
                                            key={i}
                                            className={style.dropItem} 
                                            onClick={() => router.push(e.path)}
                                        >
                                            {e.name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
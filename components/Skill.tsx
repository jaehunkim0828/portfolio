import Image from 'next/image';
import { useState } from 'react';

import style from '../styles/skills.module.scss';
import Language from './Language';

export default function Skill({element, index }: {element: any, index: number}) {
    const [ishover, setIshover] = useState<boolean>(false);

    return (
        <div>
            <div 
                className={style.item}
                onMouseOver={() => setIshover(true)}
                onMouseOut={() => setIshover(false)}
            >
                <div className={style.image}><Image src={element.image} layout='fill' alt={element.image} /></div>
                <span>{element.name}</span>
            </div>
            {ishover && <Language />}
        </div>
    )
}
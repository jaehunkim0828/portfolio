import Image from 'next/image';

import getTheme from '../helpers/getTheme';
import style from '../styles/about.module.scss';
import me from '../public/images/jae2.jpeg';
import { useResize } from '../hooks/useResize';
import { useState } from 'react';

export default function About() {
    const { nowWidth } = useResize();

    const college =['West Log Angeles College', 'WLAC'];

    
    
    const aboutData = [
        {key: '나이', value: '25(23)'},
        {key: '생년월일', value: '1998.08.28'},
        {key: '이메일', value: 'jhunkim0828@gmail.com'},
        {key: '학력', value: `${nowWidth < 650 ? college[1] : college[0]} 1학년`},
    ];

    return (
        <div  className={getTheme(style, style.aboutContainer)}>
            <div className={getTheme(style, style.title)}>About Me</div>
            <div className={getTheme(style, style.contents)}>
                <div className={getTheme(style, style.form)}>
                    {aboutData.map((e, i) => (
                        <div key={i} className={getTheme(style, style.item)}>
                            <div className={getTheme(style, style.key)}>{e.key}</div>
                            <div className={getTheme(style, style.value)}>{e.value}</div>
                        </div>
                    ))}
                </div>
                <Image src={me} alt='none' width='150px' height='150px' layout='intrinsic'/>
            </div>
            <div className={style.intro}>저는 이런 사람입니다!</div>
            <ul>
                <li>지금은 비록 프론트엔드를 주력으로 하고 있지만 풀스택이 되기위해 노력하는 개발자입니다.</li>
                <li>남들에게 아는 지식 공유를 좋아하는 개발자입니다.</li>
                <li>멈추지 않고 꾸준히 성장하는 개발자입니다.</li>
            </ul>
        </div>
    )
}
import Image from 'next/image';

import style from '../styles/skills.module.scss';
import GetTheme from '../helpers/getTheme';

import { front, back, rest } from '../data';

export default function Skills() {
    return (
        <div className={GetTheme(style, style.skill)}>
            <div className={GetTheme(style, style.skillTitle)}>Skills</div>
            <form className={GetTheme(style, style.skillContainer)}>
                <div>
                    <div className={style.part}>Front-end</div>
                    <div className={style.itemContainer}>
                        {front.map((e, i) => (
                            <div key={i} className={style.item}>
                                <div className={style.image}><Image src={e.image} layout='fill' alt={e.image} /></div>
                                <span>{e.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={style.part}>Back-end</div>
                    <div className={style.itemContainer}>
                        {back.map((e, i) => (
                            <div key={i} className={style.item}>
                                <div className={style.image}><Image src={e.image} layout='fill' alt={e.image} /></div>
                                <span>{e.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className={style.part}>Rest Tools</div>
                    <div className={style.itemContainer}>
                        {rest.map((e, i) => (
                            <div key={i} className={style.item}>
                                <div className={style.image}><Image src={e.image} layout='fill' alt={e.image} /></div>
                                <span>{e.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}
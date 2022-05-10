import style from '../styles/skills.module.scss';
import GetTheme from '../helpers/getTheme';

import { front, back, rest } from '../data';
import Skill from './Skill';

export default function Skills() {

    return (
        <div className={GetTheme(style, style.skill)}>
            <div className={GetTheme(style, style.skillTitle)}>Skills</div>
            <form className={GetTheme(style, style.skillContainer)}>
                <div>
                    <div className={style.part}>Front-end</div>
                    <div className={style.itemContainer}>
                        {front.map((e, i) => (
                            <Skill element={e} index={i} key={i} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className={style.part}>Back-end</div>
                    <div className={style.itemContainer}>
                        {back.map((e, i) => (
                            <Skill element={e} index={i} key={i} />
                        ))}
                    </div>
                </div>
                <div>
                    <div className={style.part}>Rest Tools</div>
                    <div className={style.itemContainer}>
                        {rest.map((e, i) => (
                            <Skill element={e} index={i} key={i} />
                        ))}
                    </div>
                </div>
            </form>
        </div>
    )
}
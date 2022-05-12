import Image from 'next/image';
import { useState } from 'react';
import ReactTooltip from 'react-tooltip';

import style from '../styles/skills.module.scss';

export default function Skill({element, index, section }: {element: any, index: number, section: string}) {


    return (
        <div>
            <div 
                className={style.item}
            >
                <div 
                    data-for={`skill-${section}-${index}`}
                    data-tip
                    className={style.image}
                ><Image src={element.image} layout='fill' alt={element.image} /></div>
                <span>{element.name}</span>
            </div>
            <ReactTooltip
                id={`skill-${section}-${index}`}
                type='info'
                place='top'
                effect='solid'
                role='example'
                aria-haspopup='true'
                multiline={true}
            >
                <div className={style.tooltip}>
                    <div className={style.toolTitle}>사용한 프로젝트</div>

                    <div>
                        {element.projects.map((project: string, i: number) => (
                            <div key={i}>
                                <br />
                                <div>{project}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </ReactTooltip>
        </div>
    )
}
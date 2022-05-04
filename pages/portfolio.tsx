import { useEffect, useState } from 'react';
import anime from 'animejs';

import style from '../styles/portfolio.module.scss';
import GetTheme from '../helpers/getTheme';
import Particle from "../components/Particle";
import { projects } from '../data';
import Image from 'next/image';
import Projects from '../components/Project';
import Footer from '../components/Footer';

export default function Portfolio() {
    const [open, setOpen] = useState<boolean>(false);
    const [projectIndex, setIndex] = useState<number>(0);

    useEffect(() => {
        const logoAnimation = anime.timeline({
            autoplay: true,
            delay: 200
        });
    
        logoAnimation
            .add({
                delay: 5500,
                targets: `#${style.logo}`,
                translateY: [-300, 0],
                opacity: [0, 1],
                elasticity: 100,
                duration: 1600
            })
            .add({
                targets: `#${style.logo}`,
                scale: [1, 1.3],
                duration: 1800,
                elasticity: 1000,
            });
    }, [])

    const openProject = (index: number) => {
        setOpen(true);
        setIndex(index)
    }

    return (
        <div className={GetTheme(style, style.portfolio)}>
            <Particle />
            <div className={GetTheme(style, style.title)}>Portfolios</div>
            <section className={style.projects}>
                {projects.map((e, i) => (
                    <button 
                        className={style.project} 
                        key={i}
                        onClick={() => openProject(i)}
                    >
                        <div className={style.image}  style={{ backgroundImage: `url(${e.image.src})`}} />
                        <div className={style.sub}>
                            <div className={GetTheme(style, style.name)}>{e.name}</div>
                            <div className={style.time}>{e.time}</div>
                        </div>
                    </button>
                ))}
            </section>
            { open && <Projects setOpen={setOpen} number={projectIndex}/> }
            <Footer />
        </div>
    )
}
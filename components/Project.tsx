import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import GetTheme from '../helpers/getTheme';
import style from '../styles/project.module.scss';
import xbutton from '../public/images/xbutton.png';
import { projectAll } from '../data';
import SlideImage from './SlideImage';
import github from '../public/images/github.svg';
import world from '../public/images/world.png';

interface Project {
    setOpen: (type: boolean) => void;
    number: number;
}

export default function Projects({ setOpen, number }: Project) {
    const projectRef = useRef<HTMLDivElement>(null);
    const router = useRouter();

    const {name, image, parts, url} = projectAll[number];

    const handleClickBackground = (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === projectRef.current) {
        setOpen(false);
      }
    };

    const clickUrl = (url: string) => {
      router.push(url);
    }

    useEffect(() => {
        document.body.style.cssText = `
          position: fixed; 
          top: -${window.scrollY}px;
          overflow-y: scroll;
          width: 100%;`;
        return () => {
          const scrollY = document.body.style.top;
          document.body.style.cssText = '';
          window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
        };
      }, []);

    return (
        <div ref={projectRef} onClick={handleClickBackground} className={style.project}>
            <div className={GetTheme(style, style.projectContainer)}>
              <div className={style.top}>
                <button onClick={() => setOpen(false)} className={style.btn}>
                  <Image src={xbutton} alt='btn' width='100%' height='100%' layout='fill'/>
                </button>
              </div>
              <section className={style.content}>
                <div className={style.title}>{name}</div>
                <div className={style.image}>
                  <SlideImage size={300} images={image} />
                </div>
                <div className={style.link}>
                  <div className={style.name}>Project URL 🔗</div>
                  <div className={style.btnContainer}>
                    <button className={GetTheme(style, style.linkBtn)} onClick={() => clickUrl(url[0])}>
                      <Image src={github} alt='github' width='35%' height='35%'/>
                    </button>
                    {url[1] ? 
                      <button onClick={() => clickUrl(url[1])} className={GetTheme(style, style.linkBtn)}>
                        <Image src={world} alt='github' width='35%' height='35%'/>
                      </button> : undefined
                    }
                  </div>
                </div>
                {parts.map((e, i) => (
                  <div key={i} className={style.part}>
                    <div className={style.partName}>{e.name}</div>
                    <div className={style.partcontent}>{
                      e.name !== '메인 기능 🗝' && e.name !== '사용한 기술들 🛠' ? (
                        <div>{e.content.map((story, j) => (
                          <p key={j}>{story}</p>
                        ))}</div>
                      ) : (
                        <ul>{e.content.map((story, j) => (
                          <li key={j} className={style.mainLi}>{story}</li>
                        ))}</ul>
                      )
                    }</div>
                  </div>
                ))}
              </section>
            </div>
        </div>
    )
}
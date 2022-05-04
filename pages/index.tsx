import type { NextPage } from 'next'
import Typewriter from 'typewriter-effect';
import { useEffect } from 'react';
import anime from 'animejs';

import style from '../styles/home.module.scss';
import About from '../components/About';
import Posting from '../components/Posting';
import Particle from '../components/Particle';
import GetTheme from '../helpers/getTheme';
import Skills from '../components/Skills';
import Footer from '../components/Footer';


const Home: NextPage = () => {
  
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

  return (
    <div  className={GetTheme(style, style.home)}>
      <div className={style.typeitContainer}>
          <Typewriter
              onInit={(typewriter) => {
                  typewriter
                  .typeString('안녕하세요')
                  .pauseFor(200)
                  .deleteAll(100)
                  .typeString('Front-end')
                  .pauseFor(200)
                  .typeString(' Developer')
                  .start();
              }}
              options={{
                  loop: false,
                  cursor: '',
                  wrapperClassName: style.typeit
              }}
          />
          <div id={style.logo}>김재훈입니다</div>
          <Particle />
      </div>
      <About  />
      <Skills />
      <Posting />
      <Footer />
    </div>
  )
}

export default Home

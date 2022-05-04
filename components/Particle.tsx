import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useSelector } from "react-redux";

import style from '../styles/particle.module.scss';
import { RootState } from "../store/reducers";

export default function Particle() {

    const { mode } = useSelector((state: RootState) => state.themeMode);

    const particlesInit = async (main: any) => {
        await loadFull(main);
    };
    
    const snow = mode === 'dark' ? '#b7e3d5' : '#a9cec2';
    const background = mode === 'dark' ? '#2d2d2d' : 'rgb(246, 246, 246)';


    return (
        <Particles
            id="tsparticles"
            className={style.particle}
            init={particlesInit}
            options={{
                background: {
                color: {
                    value: background,
                },
                },
                fpsLimit: 120,
                interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "grab",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                    quantity: 4,
                    },
                    repulse: {
                    distance: 200,
                    duration: 0.4,
                    },
                },
                },
                particles: {
                color: {
                    value: snow,
                },
                line_linked: {
                    color: snow,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: true,
                    speed: 1,
                    straight: true,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.5,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
                },
                detectRetina: true,
            }}
        />
    )
}
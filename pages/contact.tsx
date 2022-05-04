import Image from 'next/image';

import Particle from '../components/Particle';
import GetTheme from '../helpers/getTheme';
import style from '../styles/contact.module.scss';
import { contacts } from '../data';
import Footer from '../components/Footer';

export default function Contact() {
    return (
        <div className={GetTheme(style, style.contact)}>
            <Particle />
            <div className={style.contactContainer}>
                <div className={GetTheme(style, style.title)}>Contact</div>
                <form className={style.form}>
                    {contacts.map((e, i) => (
                        <div key={i} className={style.content}>
                            <div className={style.image}>
                                <Image src={e.image} layout='fill'alt='contact'/>
                            </div>
                            <a className={GetTheme(style, style.link)} href='https://github.com/jaehunkim0828'>{e.name}</a>
                        </div>
                    ))}
                </form>
            </div>
            <Footer />
        </div>
    )
}
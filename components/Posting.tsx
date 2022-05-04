import axios from "axios"
import { useEffect, useState } from "react";
import GetTheme from "../helpers/getTheme";
import Link from "next/link";

import any from '../public/images/dark-background.png';
import style from '../styles/posting.module.scss';

export default function Posting() {
    const [posts, setPosts] = useState<any[]>([]);
    const [images, setImage] = useState<any[]>([]);

    const getPosting = async () => {
        const data = await axios(`https://www.tistory.com/apis/post/list?access_token=${process.env.NEXT_PUBLIC_TISTORY_ACCESS_TOKEN}&output=json&blogName=hun-dev&page=1`);
        const ps = data.data.tistory.item.posts.slice(0,3);
        setPosts(ps);
        for (let i = 0; i < ps.length; i += 1) {
            const post = await axios.get(`https://www.tistory.com/apis/post/read?access_token=${process.env.NEXT_PUBLIC_TISTORY_ACCESS_TOKEN}&output=json&blogName=hun-dev&postId=${ps[i].id}`);
            const content: string = post.data.tistory.item.content;
            const comments = post.data.tistory.item.comments;
            const time = post.data.tistory.item.date.split('').slice(0,10).join('');
            const start: number = content.indexOf("https://blog.kakaocdn");
            const end: number = content.indexOf("' data-lightbox='lightbox");
            setImage(prev => {
                return [
                    ...prev,
                    {
                        time,
                        comments,
                        image: content.substring(start, end)
                    }
                ]
            })
        }
    }

    useEffect(() => {
        getPosting();
    }, [])

    return (
        <div className={GetTheme(style, style.posting)}>
            <div className={GetTheme(style, style.postingTitle)}>Blog 최근 Posting</div>
            <div className={GetTheme(style, style.postingContainer)}>
                {posts.map((e, i) => (
                    <Link key={i} href={e.postUrl} passHref>
                        <div  className={style.post}>
                            <div className={style.postImage} style={{ backgroundImage: `url(${images[i]?.image?? any})`}}></div>
                            <div className={style.title}>{e.title.length > 16 ? e.title.slice(0, 16)  + '...': e.title}</div>
                            <div className={style.sub}>
                                <div>{images[i]?.time}</div>
                                <div>댓글: {images[i]?.comments}</div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}
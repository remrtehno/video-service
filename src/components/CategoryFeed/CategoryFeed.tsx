import React, { FC } from 'react';
import s from './CategoryFeed.module.scss';
import { categoryFeed } from '../../mockup/mockup';
import play from '../../assets/images/play.svg';

const CategoryFeed: FC = () => (
    <>
        <nav className={s.categoryFeed}>
            <a className={s.navItem} href="/">Новое</a>
            <a className={s.navItem} href="/">Не просмотренное</a>
            <a className={s.navItem} href="/">Популярное</a>
        </nav>

        {
            categoryFeed && categoryFeed.map((el) => (
                <div className={s.video} key={el.id}>
                    <div className={s.videoPlay}>
                        <video
                            className={s.player}
                            preload="none"
                            poster={el.img}
                        >
                            <track
                                src="/"
                                kind="captions"
                                srcLang="ru"
                            />
                            <source
                                type="video/mp4"
                                src="/"
                            />
                        </video>
                        <div className={s.overlay}>
                            <img src={play} alt="play" />
                        </div>
                    </div>
                    <div className={s.videoText}>
                        <h5 className={s.title}>{el.title}</h5>
                        <div className={s.bottom}>
                            <div className={s.like}>{el.likes}</div>
                            <div className={s.look}>{el.views}</div>
                        </div>
                    </div>
                </div>
            ))
        }
    </>
);

export default CategoryFeed;

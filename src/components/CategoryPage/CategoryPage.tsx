import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import s from './CategoryPage.module.scss';
import back from '../../assets/images/back.png';
import { categoryPage, categoryPageVideos } from '../../mockup/mockup';
import Footer from '../Footer/Footer';

const CategoryPage: FC = () => {
    const history = useHistory();

    const goBack = () => {
        history.goBack();
    };

    return (
        <div className={s.categoryPage}>
            <header className={s.header}>
                <button type="button" onClick={goBack} className={s.back}>
                    <img src={back} alt="back" />
                </button>
                <h1 className={s.title}>Голые и смешные</h1>
            </header>
            <div className={s.categoryImage}>
                <div className={s.categoryText}>{categoryPage.title}</div>
                <div className={s.categoryDesc}>{categoryPage.desc}</div>
                <img className={s.categoryImg} src={categoryPage.img} alt={categoryPage.title} />
            </div>
            <nav className={s.categoryFeed}>
                <a className={s.navItem} href="/">Новое</a>
                <a className={s.navItem} href="/">Не просмотренное</a>
                <a className={s.navItem} href="/">Популярное</a>
            </nav>
            <div className={s.categoryVideos}>
                {
                    categoryPageVideos && categoryPageVideos.map((el) => (
                        <div className={s.categoryVideo}>
                            <div className={s.catVideoTitle}>{el.title}</div>
                            <div className={s.views}>{el.views}</div>
                            <video controls poster={el.source} className={s.video}>
                                <track src={el.source} kind="captions" srcLang="ru" />
                                <source src={el.source} type="video/webm" />
                                <source src={el.source} type="video/mp4" />
                            </video>
                        </div>
                    ))
                }
                <a href="button" className={s.more}> Получить ещё </a>
            </div>
            <Footer />
        </div>

    );
};
export default CategoryPage;

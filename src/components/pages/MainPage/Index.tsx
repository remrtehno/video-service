import React, { FC } from 'react';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import s from './Index.module.scss';
import Swiper from '../../Swiper/Swiper';
import Categories from '../../Categories/Categories';
import CategoryFeed from '../../CategoryFeed/CategoryFeed';

const MainPage: FC = () => (
    <>
        <Header />
        <div className={s.title}>Видео месяца</div>
        <Swiper />
        <div className={s.title}>Категории</div>
        <Categories />
        <CategoryFeed />
        <Footer />
    </>
);

export default MainPage;

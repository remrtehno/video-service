import React, { FC } from 'react';
import { categories } from '../../mockup/mockup';
import s from './Categories.module.scss';

const Categories: FC = () => (
    <div className={s.categories}>
        {categories && categories.map((el) => (
            <div className={s.item} key={el.id}>
                <img src={el.img} alt="" />
                <div className={s.overlay}>{el.name}</div>
            </div>
        ))}
    </div>
);

export default Categories;

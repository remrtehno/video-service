import React, { FC } from 'react';
import s from './Loader.module.scss';

const Loader:FC = () => (
    <div className={s.loader}>
        <div className={s.whirlpool} />
    </div>
);

export default Loader;

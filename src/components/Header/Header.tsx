import React, { FC } from 'react';
import s from './Header.module.scss';
import logo from '../../assets/images/smile.png';

const Header: FC = () => (
    <header className={s.header}>
        <div className={s.block}>
            <img src={logo} className={s.smile} alt="logo" />
            <h1 className={s.title}>
                ГОЛЫЕ И
                <br />
                {' '}
                <span className={s.titleSpan}>СМЕШНЫЕ</span>
            </h1>
        </div>
    </header>
);

export default Header;

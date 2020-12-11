import React, { FC } from 'react';
import s from './Footer.module.scss';
import useFooterApi from '../../api/useFooterApi';

const Footer: FC = () => {
    const html = useFooterApi();
    return (
        <footer className={s.footer}>
            <nav className={s.footerNav}>
                <a href="/">Стоимость услуги</a>
                <a href="/">Пользовательское соглашение</a>
            </nav>
            <div dangerouslySetInnerHTML={{ __html: html }} />
        </footer>
    );
};

export default Footer;

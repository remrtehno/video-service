import React, { FC, useEffect, useState } from 'react';
import axios from 'axios';
import s from 'InnerPage.module.scss';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';

type Props = {
    url: string
};

const InnerPage: FC<Props> = ({ url }) => {
    const state = useState();
    useEffect(() => {
        axios.get(url);
    }, []);

    return (
        <div className={s.innerPage}>
            <Header />
            <div className={s.innerPage}>
                {state}
            </div>
            <Footer />
        </div>
    );
};

export default InnerPage;

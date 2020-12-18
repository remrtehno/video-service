import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import s from './Loader.module.scss';
import { LoaderState } from '../../types/Loader';

const Loader:FC = () => {
    const isLoading = useSelector((state: LoaderState) => state.isLoading);

    if (!isLoading) return null;

    return (
        <div className={s.loader}>
            <div className={s.whirlpool} />
        </div>
    );
};

export default Loader;

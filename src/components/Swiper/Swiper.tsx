import React, { FC, useRef } from 'react';
import { SwiperSlide } from 'swiper/react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper.scss';
import classNames from 'classnames';
import { slidesMain } from '../../mockup/mockup';
import s from './Swiper.module.scss';
import play from '../../assets/images/play.svg';
import next from '../../assets/images/next.png';
import prev from '../../assets/images/prev.png';

const Slider: FC = () => {
    const ref = useRef(null);

    const goNext = () => {
        if (ref.current !== null) {
            // @ts-ignore
            ref.current.swiper.slideNext();
        }
    };

    const goPrev = () => {
        if (ref.current !== null) {
            // @ts-ignore
            ref.current.swiper.slidePrev();
        }
    };

    return (
        <div className={s.slider}>

            <Swiper
                slidesPerView={1}
                ref={ref}
            >
                {slidesMain && slidesMain.map((el) => (
                    <SwiperSlide
                        key={el.id}
                    >
                        <div className={s.sliderText}>
                            <div className={s.date}>{el.date}</div>
                            <div className={s.desc}>{el.desc}</div>
                        </div>
                        <video
                            className={s.video}
                            preload="none"
                            poster={el.poster}
                        >
                            <track
                                src="/"
                                kind="captions"
                                srcLang="ru"
                            />
                            <source
                                type="video/mp4"
                                src=""
                            />
                        </video>
                        <div className={s.overlay}>
                            <img src={play} alt="play" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <button
                type="button"
                className={classNames(s.navigationButton, s.prev)}
                onClick={goPrev}
            >
                <img src={prev} alt="prev" />
            </button>
            <button
                type="button"
                className={classNames(s.navigationButton, s.next)}
                onClick={goNext}
            >
                <img src={next} alt="next" />
            </button>
        </div>
    );
};

export default Slider;

import Slider from 'react-slick';

import React, { FC } from 'react';

import styles from './nosotros.module.scss';

const Flip = require(`react-reveal/Flip`);

const Nosotros: FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    draggable: false,
    touchMove: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1151,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const customeSlider: any = React.createRef();

  const gotoNext = () => {
    customeSlider.current.slickNext();
  };

  const gotoPrev = () => {
    customeSlider.current.slickPrev();
  };
  return (
    <Flip top>
      <div className={styles.container_nosotros}>
        <div className={styles.prev}>
          <button
            type="button"
            onClick={() => {
              gotoPrev();
            }}
          >
            <img src="/assets/flecha.svg" alt="" />
          </button>
        </div>
        <Slider
          className={styles.container_carrousel}
          {...settings}
          ref={customeSlider}
        >
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/conexion.jpeg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Si no encuentras otro punto de conexión con tus clientes, usando
                solamente redes sociales y quieres llegar a ellos más
                fácilmente, nosotros somos tu solución.
              </p>
            </div>
          </div>
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/dinero.png" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Olvídate de desagradables portales para crear páginas por
                internet que no solucionan tus problemas y además buscan
                venderte servicios innecesarios.
              </p>
            </div>
          </div>
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/buscar.jpeg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Buscamos ofrecerle a los clientes un producto nuevo e innovador
                con diseños desarrollados especialmente para cada cliente.
              </p>
            </div>
          </div>
          <div className={styles.container_card}>
            <div className={styles.container_img}>
              <img src="/assets/diseño.jpeg" alt="" />
            </div>
            <div className={styles.container_text}>
              <p>
                Nuestros productos son diseñados y desarrollados para añadir
                valor a tus productos o servicios.
              </p>
            </div>
          </div>
        </Slider>
        <div className={styles.next}>
          <button
            type="button"
            onClick={() => {
              gotoNext();
            }}
          >
            <img src="/assets/flecha.svg" alt="" />
          </button>
        </div>
      </div>
    </Flip>
  );
};

export default Nosotros;

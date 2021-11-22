import React, { FC } from 'react';

import styles from './inicio.module.scss';

const Fade = require(`react-reveal/Fade`);

const Inicio: FC = () => (
  <div id="inicio" className={styles.container_inicio}>
    <div className={styles.container_titulo}>
      <Fade left>
        <div className={styles.titulo}>
          TRANSIMOVIL <br />
          <span> ENTRE TODOS NOS APOYAMOS </span>
        </div>
        <div className={styles.subtitulo}>
        </div>
      </Fade>
    </div>
    <div className={styles.container_img}>
      <img src="/assets/trafic.jpg" alt="imagen principal" />
    </div>
  </div>
);

export default Inicio;

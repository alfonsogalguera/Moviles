import { v4 as uuidv4 } from 'uuid';

import React, { FC, useState } from 'react';

import styles from './trabajamos.module.scss';

const Zoom = require(`react-reveal/Zoom`);

const Trabajamos: FC = () => {
  const [cards] = useState([
    {
      titulo: `Investigación`,
      descripcion: `En esta etapa vamos a identificar y documentar las necesidades de tu página web a través de una investigación analítica, y así se planteará una solución.`,
      img: `/assets/investigacion.png`,
    },
    {
      titulo: `Diseño`,
      descripcion: `Desarrollaremos modelos para solucionar las necesidades previamente identificadas. Se diseñan los componentes técnicos para solucionar el proyecto a construir.`,
      img: `/assets/diseño.png`,
    },
    {
      titulo: `Desarrollo`,
      descripcion: `Implementación de la solución donde se programará, se probará y se pondrá en producción el código para tu página web.`,
      img: `/assets/desarrollo.png`,
    },
  ]);
  return (
    <div className={styles.container_trabajamos}>
      {cards.map((e, index) => (
        <div
          key={uuidv4()}
          className={
            index % 2 === 0
              ? styles.container_text_izquierda
              : styles.container_text_derecha
          }
        >
          <Zoom>
            <div className={styles.container_text}>
              <h3 className={index % 2 === 0 ? styles.rosa : styles.azul}>
                {e.titulo}
              </h3>
              <p>{e.descripcion}</p>
            </div>
            <div className={styles.container_img}>
              <img src={e.img} alt="Img" />
            </div>
          </Zoom>
        </div>
      ))}
    </div>
  );
};

export default Trabajamos;

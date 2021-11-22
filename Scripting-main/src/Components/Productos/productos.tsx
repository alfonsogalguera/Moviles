import { v4 as uuidv4 } from 'uuid';

import React, { FC, useState } from 'react';
import styles from './productos.module.scss';

const Tada = require(`react-reveal/Pulse`);

const Productos: FC = () => {
  const [produtos] = useState([
    {
      titulo: `Diseño Web`,
      descripcion: `Te ayudamos a crear la parte visual de tu marca a través de un sitio web que sea responsivo, optimizado para poder verlo correctamente desde cualquier dispositivo, haciendo uso de las mejores prácticas teniendo en cuenta la usabilidad y funcionalidad del sitio como prioridad.`,
      caracteristicas: [`Diseño Responsivo`],
      img: `/assets/diseño_p.png`,
    },
    {
      titulo: `Desarrollo Web`,
      descripcion: ``,
      caracteristicas: [
        `Hosting.`,
        `Dominio.`,
        `Desarrollo en Wordpress / React.`,
        `SEO básico.`,
        `Calificación igual o superior a 90 en evaluacion de Google.`,
        `Optimización de código, imágenes y velocidad de carga.`,
        `1 Certificado SSL.`,
      ],
      img: `/assets/desarrollo_p.png`,
    },
  ]);
  return (
    <div className={styles.container_productos}>
      {produtos.map((e, index) => (
        <Tada key={uuidv4()}>
          <div className={styles.container_producto}>
            <h3 className={index % 2 === 0 ? styles.azul : styles.rosa}>
              {e.titulo}
            </h3>
            <div className={styles.text}>
              {e.descripcion && <p>{e.descripcion}</p>}
              <ul>
                {e.caracteristicas.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
            <div className={styles.container_img}>
              <img src={e.img} alt="img/product" />
            </div>
          </div>
        </Tada>
      ))}
    </div>
  );
};

export default Productos;

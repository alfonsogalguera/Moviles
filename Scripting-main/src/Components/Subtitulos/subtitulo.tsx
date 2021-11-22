import React, { FC } from 'react';

import styles from './subtitulo.module.scss';

interface SubtituloProps {
  titulo: string;
  id: string;
}
const Subtitulo: FC<SubtituloProps> = ({ titulo, id }) => (
  <div id={id} className={styles.subtitulo}>
    <p>{titulo}</p>
  </div>
);

export default Subtitulo;

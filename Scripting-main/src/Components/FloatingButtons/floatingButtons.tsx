import React, { FC, useEffect, useState } from 'react';
import styles from './floatingButtons.module.scss';

const Fade = require(`react-reveal/Fade`);
const FloatingButtons: FC = () => {
  const [abrir, setabrir] = useState(false);
  const popup = () => {
    setTimeout(() => {
      setabrir(!abrir);
    }, 10000);
  };
  useEffect(() => {
    popup();
  }, []);
  return (
    <div>
      <div className={styles.container_buttons}>
        <Fade>
          <span className={abrir ? styles.popup : styles.close}>
            Ven, te estamos esperando
            <span />
            <button
              type="button"
              onClick={() => {
                setabrir(!abrir);
              }}
            >
              x
            </button>
          </span>
        </Fade>
        <a
          href="https://www.facebook.com/Scripting-108198798071835"
          target="_blank"
          rel="noreferrer"
        >
          <img src="/assets/facebook.svg" alt="Facebook" />
        </a>
        {/* <img src="/assets/whatsapp.svg" alt="Whatsapp" /> */}
      </div>
    </div>
  );
};

export default FloatingButtons;

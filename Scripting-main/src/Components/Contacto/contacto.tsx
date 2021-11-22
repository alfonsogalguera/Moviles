import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import React, { FC, useEffect, useState } from 'react';

import styles from './contacto.module.scss';

const axios = require(`axios`); // eslint-disable-line import/no-extraneous-dependencies

const Fade = require(`react-reveal/Fade`);

const Contacto: FC = () => {
  const [mensaje, setmensaje] = useState(`En breve nos comunicaremos contigo!`);
  const [show, setshow] = useState(false);
  const ContactoSchema = Yup.object().shape({
    name: Yup.string()
      .min(10, `Nombre muy corto`)
      .max(50, `Nombre muy largo`)
      .required(`Nombre requerido`),
    email: Yup.string()
      .email(`Correo electronico invalido`)
      .required(`Correo electronico requerido`),
    phone: Yup.string()
      .min(10, `Telefono con 10 digitos`)
      .max(10, `Telefono con maximo 10 digitos`)
      .required(`Numero requerido`),
    products: Yup.string().required(`Selecciona un producto`),
  });

  useEffect(() => {
    setTimeout(() => {
      setshow(false);
    }, 5000);
  });
  return (
    <div>
      <Fade>
        <div
          className={
            show ? styles.container_notification : styles.container_none
          }
        >
          {mensaje}
        </div>
      </Fade>
      <div className={styles.container}>
        <div className={styles.container_contacto}>
          <Formik
            initialValues={{
              name: ``,
              email: ``,
              phone: ``,
              products: ``,
            }}
            validationSchema={ContactoSchema}
            validateOnChange={false}
            validateOnBlur={false}
            onSubmit={(values, { resetForm }) => {
              setmensaje(`Enviando...`);
              setshow(true);
              axios
                .post(`/api/cot`, {
                  name: values.name,
                  email: values.email,
                  phone: values.phone,
                  products: values.products,
                })
                .then(() => {
                  setmensaje(`En breve nos comunicaremos contigo!`);
                  setshow(true);
                })
                .catch(() => {
                  setmensaje(`Intentelo más tarde`);
                  setshow(true);
                });
              resetForm();
            }}
          >
            {({ errors, touched }) => (
              <Form>
                <h3>Demos el siguiente paso</h3>
                <p>
                  <span>Nombre completo:</span>
                  <Field
                    name="name"
                    className={errors.name && touched.name ? styles.error : ``}
                  />
                </p>
                <p>
                  <span>
                    Correo <br /> electronico:
                  </span>
                  <Field
                    name="email"
                    className={
                      errors.email && touched.email ? styles.error : ``
                    }
                  />
                </p>
                <p>
                  <span>Teléfono:</span>
                  <Field
                    name="phone"
                    type="number"
                    className={
                      errors.phone && touched.phone ? styles.error : ``
                    }
                  />
                </p>
                <p>
                  <span>Productos:</span>
                  <Field
                    name="products"
                    as="select"
                    className={
                      errors.products && touched.products ? styles.error : ``
                    }
                  >
                    <option> </option>
                    <option value="diseño">Diseño Web</option>
                    <option value="desarrollo">Desarrollo Web</option>
                    <option value="Proyecto+">Proyecto completo</option>
                  </Field>
                </p>
                <p>
                  <button type="submit">Solicitar</button>
                </p>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Contacto;

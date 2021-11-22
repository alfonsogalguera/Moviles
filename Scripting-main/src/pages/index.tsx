/* eslint-disable */
const MessengerCustomerChat = require('react-messenger-customer-chat');

import Contacto from '../Components/Contacto/contacto';
import FloatingButtons from '../Components/FloatingButtons/floatingButtons';
import Inicio from '../Components/Inicio/inicio';
import Subtitulo from '../Components/Subtitulos/subtitulo';
import Head from 'next/head';
import Navbar from '../Components/Navbar/Navbar';
import Nosotros from '@/Components/Nosotros/nosotros';
import Trabajamos from '@/Components/Trabajamos/trabajamos';
import Productos from '@/Components/Productos/productos';
import Footer from '@/Components/Footer/footer';

const Fade = require(`react-reveal/Fade`);

export default function Home() {
  return (
    <div>
      <Head>
        <title>Scripting</title>
        <link rel="icon" href="/assets/Logo.png" />
      </Head>
      <MessengerCustomerChat
        pageId="108198798071835"
        appId="1201717183595271"
        language="es_LA"
        shouldShowDialog={true}
        loggedInGreeting="¡Hola! como podemos ayudarte?"
        loggedOutGreeting="¡Hola! como podemos ayudarte?"
      />
      <Navbar />
      <Inicio />
      <Subtitulo titulo="¿Como trabajamos?" id="como" />
      <Trabajamos />
      <Subtitulo titulo="Productos" id="productos" />
      <Productos />
      <Subtitulo titulo="¿Por qué nosotros?" id="porque" />
      <Nosotros />
      <Subtitulo titulo="contactanos" id="contactanos" />
      <Contacto />
      <Footer />
    </div>
  );
}

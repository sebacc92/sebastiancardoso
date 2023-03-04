import { component$, useRef, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const audioRef = useRef<HTMLVideoElement>()
  return (
    <div class="mt-4">
      {/* <h2>Aprende. Crea. Comparte!</h2> */}
        <h1 class="text-3xl font-bold">Sobre mí</h1>
      <div class="about-me-content">
        <figure class="rounded-md">
          <img src="/images/yo3.webp" alt="Foto de Seba" class="photo border-8 border-grey-500/50" />
        </figure>
        <div class="">
          <div class="about-me-text mr-4">
            <p>
              <span>Hola! Mi nombre es <strong>Sebastián Cardoso</strong>.</span>
              <button
                class="button-audio-play"
                role="button"
                aria-label="How to pronounce my name"
                onClick$={() => {
                  if(audioRef.current != null){
                    audioRef.current.play()
                  }
                }}
              >
                <i class="play-button"></i>
              </button>
            </p>
            <audio ref={audioRef} src="/audio/presentation.mp3"></audio>
            <p>Soy desarrollador front-end con mas de 3 años de experiencia en aplicaciones que usan React.</p>
          </div>
        </div>
      </div>
      <h2 class="text-2xl">🕐 Timeline de mi vida</h2>
      <ul class="list-timeline">
        <li>🔸<strong>1992</strong>: 👶 Nazco en Montevideo, Uruguay 🇺🇾.</li>
        <li>🔸<strong>1996</strong>: 🧳 Nos mudamos a Buenos Aires, Argentina 🇦🇷.</li>
        <li>🔸<strong>2001</strong>: 🖥️ Me regalan mi primera computadora Pentium IV con 4GB de disco y 256MB de Ram.</li>
        <li>🔸<strong>2002</strong>: 🎮 Instalo un emulador de SEGA con mas 500 juegos y me paso los fines de semana jugando a cada uno.</li>
        <li>🔸<strong>2003</strong>: 📞 Conecto la computadora por dial-up al teléfono de casa y descubro Internet. Busco letras de canciones y trucos para los juegos.</li>
        <li>🔸<strong>2004</strong>: 💿 Mi amigo del barrio tiene Internet ADSL y grabadora de CDs. Aprendo a descargar música mp3 del Ares y a grabar CDs vírgenes.</li>
        <li>🔸<strong>2005</strong>: 🖨️ Me regalan mi primer impresora y la uso para imprimir fotos y tapas de los CDs con canciones.</li>
        <li>🔸<strong>2006</strong>: 👨‍🎓 Termino la primaria. En aquel tiempo 9° grado.</li>
        <li>🔸<strong>2007</strong>: 🗺️ Mudanza de Ituzaingo a Brandsen.</li>
        <li>🔸<strong>2008</strong>: 👨‍💼 Hago un curso de operador Office en IAC</li>
        <li>🔸<strong>2009</strong>: 👨‍🎓 Termino la secundaria con orientación a EGEOR (Economía y Gestión de las Organizaciones).</li>
        <li>🔸<strong>2010</strong>: 🏃 Empiezo la carrera de Licenciatura en Sistemas en la UNLP.</li>
        <li>🔸<strong>2011</strong>: 💻 Me regalan mi primera notebook (Lenovo G470).</li>
        <li>🔸<strong>2012</strong>: 💻 Adios Windows🪟 Hola Linux🐧💚.</li>
        <li>🔸<strong>2013</strong>: 🥬 Dejo de comer animales y adopto una dieta basada en plantas.</li>
        <li>🔸<strong>2014</strong>: Abandono la carrera universitaria y empiezo una crisis existencial.</li>
        <li>🔸<strong>2015</strong>: Me independizo y trabajo unos meses de ayudante de cocina, luego de mozo y después despachando combustible en una <a href="https://www.shell.com.ar/" target="_blank" class="text-blue-500 hover:text-blue-700">Shell</a>.</li>
        <li>🔸<strong>2016</strong>: Empiezo a trabajar en la caja de una <a href="https://www.farmaciaojeda.com.ar/" target="_blank" class="text-blue-500 hover:text-blue-700">farmacia</a>.</li>
        <li>
          🔸<strong>2017</strong>
          :
          <ul>
            <li>🔹Empiezo a estudiar Astronomía en la UNLP. Abandono a los 6 meses.</li>
            <li>🔹✈️ Viajo en avión por primera vez. Conozco Mendoza, San Luis y Ushuaia.</li>
          </ul>
        </li>
        <li>
          🔸<strong>2018</strong>
          :
          <ul>
            <li>🔹Me inscribo en <a href="https://platzi.com/c/seba/" target="_blank" class="text-blue-500 hover:text-blue-700">Platzi</a> y empiezo a estudiar programación de forma autodidacta.</li>
            <li>🔹Aprendo bastante de Javascript(Vue y React), Nodejs y Python.</li>
            <li>🔹🐈🐈‍⬛ Adopto a <a href="https://www.instagram.com/p/BtLw5MOHutO/" target="_blank" class="text-blue-500 hover:text-blue-700">Sol y Pante</a>.</li>
          </ul>
        </li>
        <li>
          🔸<strong>2019</strong>
          :
          <ul>
            <li>🔹👋 Renuncio a mi trabajo en la farmacia.</li>
            <li>🔹Comienzo a trabajar presencial en <a href="https://arzion.com/" target="_blank" class="text-blue-500 hover:text-blue-700">Arzion</a> como programador React para un sistema de <a href="https://www.anantara.com/es" target="_blank" class="text-blue-500 hover:text-blue-700">booking de hoteles</a>.</li>
          </ul>
        </li>
        <li>
          🔸<strong>2020</strong>
          :
          <ul>
            <li>🔹Llega la pandemia y empiezo a trabajar remoto.</li>
            <li>🔹👫 <a href="https://www.instagram.com/dai_lentz/" target="_blank" class="text-blue-500 hover:text-blue-700">Daiana</a> y yo empezamos nuestra relación.</li>
            <li>🔹Compro mi notebook Asus Vivobook Ryzen 7 4700u.</li>
          </ul>
        </li>
        <li>
          🔸<strong>2021</strong>
          :
          <ul>
            <li>🔹🏠 Daiana y yo empezamos a convivir juntos con su 🐶 <a href="https://www.instagram.com/p/BGsbWgXupX8UO2EibELFj8v5Wcjv35BN3xUGJ80/" target="_blank" class="text-blue-500 hover:text-blue-700">Tori</a> viene con nosotros.</li>
            <li>🔹En Arzion empezamos un nuevo proyecto para gestionar pedidos online llamado <a href="https://www.myshop4.com/" target="_blank" class="text-blue-500 hover:text-blue-700">MyShop4</a>.</li>
            <li>🔹En Arzion actualizamos un sistema de directorio de empresas globales llamado <a href="https://www.iglobal.co/" target="_blank" class="text-blue-500 hover:text-blue-700">iGlobal</a>.</li>
          </ul>
        </li>
        <li>🔸<strong>2022</strong>: 👶 Nace Ciro, nuestro hijo.</li>
        <li>🔸<strong>2023</strong>: Iniciamos un rebranding de MyShop4 y le agregamos unos cuantos features mas. Ahora pasa a llamarse <a href="https://www.morfi.pro" target="_blank" class="text-blue-500 hover:text-blue-700">Morfi</a>.</li>
        <li>🔸
          <span class="inline-block text-gray-900 text-opacity-50 animate-pulse duration-1000"><strong>Escribiendo mi presente</strong></span>
          <span class="inline-block text-4xl text-gray-900 text-opacity-50 animate-pulse duration-1000"><strong>. </strong></span>
          <span class="inline-block text-4xl text-gray-900 text-opacity-50 animate-pulse duration-1000"><strong>. </strong></span>
          <span class="inline-block text-4xl text-gray-900 text-opacity-50 animate-pulse duration-1000"><strong>. </strong></span>
        </li>
      </ul>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | About me',
};

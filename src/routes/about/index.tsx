import { component$, useRef, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const audioRef = useRef<HTMLVideoElement>()
  return (
    <div class="about-me-container">
      <h2>Aprende. Crea. Comparte!</h2>
      <div class="about-me-content">
        <figure>
          <img src="/images/yo3.webp" alt="Foto de Seba" class="photo" />
        </figure>
        <div class="about-me-text">
          <p>
            <span>Hola! Me llamo Sebastian Cardoso</span>
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
          <p>Me dedico a programar y me encanta el desarrollo Web. Empecé mi carrera en el 2010 cuando estudié Informática en la UNLP programando con Pascal. Luego experimenté con Php, Python y algo de Java.</p>
          <p>Hoy en día tengo mas de 3 años experiencia prgramando con React. Soy un eterno estudiante y creo en el aprendizaje permanente. Actualmente me encuentro practicando Python y Qwik.js.</p>
          <p>En mi tiempo libre, me gusta desconectar de la tecnología y conectarme con la naturaleza. Por eso, me dedico a mi pequeña huerta, donde cultivo mis propias verduras y frutas. Me encanta experimentar con nuevas plantas y técnicas de jardinería para mejorar mi habilidad en este pasatiempo.</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | About me',
};

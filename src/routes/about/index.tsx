import { component$, useRef, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const audioRef = useRef()
  return (
    <div>
      <h1>Never stop learning!</h1>
      <div>
        <img src="/images/yo.jpg" alt="Foto de Seba" height="125" width="125" />
        <div>
          <p>
            Hola! Me llamo Sebastian Cardoso
            <button
              class="button-audio-play"
              role="button"
              aria-label="How to pronounce my name"
              onClick$={() => audioRef.current.play()}
            >
              <i>▶️</i>
            </button>
            <audio ref={audioRef} src="/audio/presentation.mp3"></audio>
            Empece como estudiante de Informatica en la Universidad Nacional de La Plata en el 2010.</p>
          <p>Actualmente soy desarrollador frontend con React en Arzion. Naci en Montevideo, Uruguay pero estoy viviendo en Buenos Aires, Argentina.</p>
          <p>Yo amo el dark mode, open source y los proyectos paralelos. Cuando no estoy desarrollando estoy leyendo o mirando peliculas</p>
          <p>Yo estoy realmente feliz de vivir en esta era digital de cambios tecnológicos. Mi propósito es desarrollar software que cambie las vidas las personas para mejor.</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | About me',
};

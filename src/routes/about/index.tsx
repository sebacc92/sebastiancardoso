import { component$, useRef, useStylesScoped$ } from '@builder.io/qwik';
import styles from './about.css?inline';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const audioRef = useRef<HTMLVideoElement>()
  return (
    <div>
      <h1>Planea. Crea. Comparte!</h1>
      <div>
        <figure>
          <img src="/images/yo3.webp" alt="Foto de Seba" class="photo" />
        </figure>
        <div class="container">
          <p class="nowrap">
            <span>Hola! Me llamo Sebastian Cardoso</span>
            <span
              class="button-audio-play"
              role="button"
              aria-label="How to pronounce my name"
              onClick$={() => {
                if(audioRef.current != null){
                  audioRef.current.play()
                }
              }}
            >
              <img src="/images/play.png" width="25" />
            </span>
          </p>
          <audio ref={audioRef} src="/audio/presentation.mp3"></audio>
          <p>Naci en Montevideo, Uruguay pero estoy viviendo en Buenos Aires, Argentina.</p>
          <p>Empece como estudiante de Informatica en la Universidad Nacional de La Plata en el 2010. Luego me interese por el desarrollo Web.</p>
          <p>Actualmente soy desarrollador frontend con React en <a href="https://arzion.com/">Arzion</a>. </p>
          <p>Yo estoy realmente feliz de vivir en esta era digital de cambios tecnológicos. La automatización construida con la base del software esta resolviendo muchos problemas de los humanos.</p>
          <p>Hoy podemos unirnos como Planeta porque tenemos Internet. Mi sueño es que Internet llegue a todas partes del mundo y la gente se pueda unir al inconsciente colectivo por medio de la información y los datos.</p>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | About me',
};

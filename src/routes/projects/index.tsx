import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './projects.css?inline';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  useStylesScoped$(styles);
  // todo get from back
  const proyects = [
    {
      title: 'Morfi',
      description: 'Menu digital para restaurantes y casas de comida.',
      link: 'https://morfi.pro'
    },
    {
      title: 'Reversi Game',
      description: 'El juego de Reversi, también conocido como Otelo.',
      link: 'https://reversi-game.sebastiancardoso92.vercel.app/'
    }
  ]
  return (
    <div class="projects-container">
      {proyects.map(proyect => (
        <div class="project-card" onClick$={() => window.open(proyect.link, '_blank')}>
          <h1>{proyect.title}</h1>
          <p>{proyect.description}</p>
        </div>
      ))}
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | Projects',
};

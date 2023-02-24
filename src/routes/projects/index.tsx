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
      link: 'https://morfi.pro',
    },
    {
      title: 'Reversi Game',
      description: 'El juego de Reversi, también conocido como Otelo.',
      link: 'https://reversi-game.sebastiancardoso92.vercel.app/',
      github:'https://github.com/sebaveg/Reversi-Game',
    },
    {
      title: 'Podcast',
      description: 'Podcasts que consumen la API de AudioBoom',
      link: 'https://lab.sebastiancardoso92.vercel.app/',
      github:'https://github.com/sebaveg/next-podcasts-api-audioboom',
    },
    
  ]
  return (
    <div class="container mx-auto py-8">
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {proyects.map(proyect => (
          <div class="rounded-lg overflow-hidden shadow-lg bg-cover bg-center" style="background-image:url('https://example.com/my-image.jpg');">
            <div class="p-4 bg-white">
              <h2 class="text-2xl font-bold mb-2">{proyect.title}</h2>
              <p class="text-gray-700 text-base">{proyect.description}</p>
              <a href={proyect.link} class="block mt-2 text-blue-600 hover:underline">Demo</a>
              {proyect.github && <a href={proyect.github} class="block mt-2 text-blue-600 hover:underline">Github</a>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | Projects',
};

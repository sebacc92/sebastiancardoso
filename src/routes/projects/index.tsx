import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';


export default component$(() => {
  // todo get from back
  const proyects = [
    {
      title: 'Morfi',
      description: 'Morfi.pro es una herramienta muy útil para restaurantes y casas de comida que quieren ofrecer una experiencia más cómoda y eficiente a sus clientes y mejorar su gestión interna.'
    }
  ]
  return (
    <div>
      {proyects.map(proyect => (
        <div>
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

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Mis proyects</h1>
      <p>hola</p>
      <p>mundo</p>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | Projects',
};

import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>About me</h1>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | About me',
};

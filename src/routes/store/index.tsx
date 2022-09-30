import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      About me
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso',
};

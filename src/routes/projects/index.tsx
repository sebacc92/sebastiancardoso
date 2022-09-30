import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';

export default component$(() => {
  return (
    <div>
      <h1>Mis proyects</h1>
      <div>
        <div class="card">
          <h2>MyShop4</h2>
          <img src="/images/myshop4.png" width="350" />
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso | Projects',
};

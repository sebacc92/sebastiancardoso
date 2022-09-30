import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { QwikLogo } from '~/components/icons/qwik';

export default component$(() => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Slot />
        </section>
      </main>
      <footer>
        Made with ♡
        <QwikLogo />
      </footer>
    </>
  );
});

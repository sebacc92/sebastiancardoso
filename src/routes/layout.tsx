import { component$, Slot } from '@builder.io/qwik';
import Header from '../components/header/header';
import { useLocation } from '@builder.io/qwik-city';
import Footer from '~/components/footer/footer';

export default component$(() => {
  const location = useLocation()
  return (
    <div class="flex flex-col h-screen">
      <Header />
      <main class="flex-grow p-4">
        <section>
          <div class={location.pathname.includes('/articles/') ? "mdx-body" : ''}>
            <Slot />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
});

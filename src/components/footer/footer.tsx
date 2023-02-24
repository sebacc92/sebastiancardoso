import { component$, useStore, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import { QwikLogo } from '~/components/icons/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);
  const state = useStore({ darkMode: false });

  return (
    <footer>
      <div>
        Made with ❤️ & dev with<Link href="https://qwik.builder.io/"><QwikLogo /></Link>
      </div>
      <div>
        <button
          class="button-mode-switch bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick$={() => {
            document.body.classList.toggle('dark-mode')
            state.darkMode = !state.darkMode
          }}
        >
          {state.darkMode ? <>🌞</> : <>🌚</>} 
        </button>
      </div>
    </footer>
  );
});

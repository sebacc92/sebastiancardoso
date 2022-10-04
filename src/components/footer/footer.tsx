import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import { QwikLogo } from '~/components/icons/qwik';
import { Link } from '@builder.io/qwik-city';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <div>
        Made with ❤️ &<Link href="https://qwik.builder.io/"><QwikLogo /></Link>
      </div>
      <div>
        Light / Dark
      </div>
    </footer>
  );
});

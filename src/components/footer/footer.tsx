import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './footer.css?inline';
import { QwikLogo } from '~/components/icons/qwik';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      Made with ♡
      <QwikLogo />
    </footer>
  );
});

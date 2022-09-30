import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { Link } from '@builder.io/qwik-city';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <nav>
        <ul>
          <li>
          <Link class="mindblow" href="/about">
            About
          </Link>
          </li>
          <li>
            <a href="https://cv.sebastiancardoso.com" target="_blank">
              cv
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
});

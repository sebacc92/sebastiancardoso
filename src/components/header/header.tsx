import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { Link } from '@builder.io/qwik-city';


export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div>
        <Link class="logo" href="/">
          <img src="/images/logo.svg" alt="logo" width="40"/>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link class="mindblow" href="/projects">
              Projects
            </Link>
          </li>
          <li>
            <Link class="mindblow" href="/articles">
              Articles
            </Link>
          </li>
          <li>
            <Link class="mindblow" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

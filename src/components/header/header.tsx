import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { Link, useLocation } from '@builder.io/qwik-city';


export default component$(() => {
  useStylesScoped$(styles);
  const location = useLocation()
  console.log('location', location)

  return (
    <header>
      <div>
        <Link href="/">
          <span class="hover-effect">SC</span>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link class={{ active: location.pathname === '/projects/'}} href="/projects">
              <span>Projects</span>
            </Link>
          </li>
          <li>
            <Link class={{ active: location.pathname === '/articles/'}} href="/articles">
              <span>Articles</span>
            </Link>
          </li>
          <li>
            <Link class={{ active: location.pathname === '/about/'}} href="/about">
              <span>About</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
});

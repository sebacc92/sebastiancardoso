import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { Link, useLocation } from '@builder.io/qwik-city';

const Nav = ({ location }) => (
  <nav
    class="flex items-center justify-center gap-4 overflow-x-auto lg:overflow-visible p-4 text-sm font-medium uppercase"
  >
    <Link class={{ active: location.pathname === '/projects/'}} href="/projects">
      <div class="flex-shrink-0 px-4 py-2 rounded text-gray-900 text-center hover:bg-gray-300 transition duration-500 ease-in-ou">Proyectos</div>
    </Link>
    <Link class={{ active: location.pathname === '/articles/'}} href="/articles">
      <div class="flex-shrink-0 px-4 py-2 rounded text-gray-900 text-center hover:bg-gray-300 transition duration-500 ease-in-ou">Artículos</div>
    </Link>
    <Link class={{ active: location.pathname === '/about/'}} href="/about">
      <div class="flex-shrink-0 px-4 py-2 rounded text-gray-900 text-center hover:bg-gray-300 transition duration-500 ease-in-ou whitespace-nowrap">Acerca de</div>
    </Link>
  </nav>
)
export default component$(() => {
  useStylesScoped$(styles);
  const location = useLocation()

  return (
    <header aria-label="Site Header" class="shadow-sm">
      <div
        class="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4"
      >
        <div class="flex w-0 flex-1">
          <Link href="/">
            <span class="sr-only">Logo</span>
            <span class="hover-effect">SC</span>
          </Link>
        </div>

        <div class="hidden items-center justify-center gap-4 text-sm font-medium lg:flex lg:w-0 lg:flex-1 uppercase">
          <Nav location={location} />
        </div>

        <div class="flex w-0 flex-1 justify-end">
          <button class="rounded-full bg-gray-100 p-2 text-gray-500" type="button">
            <span class="sr-only">Buscador</span>
            <svg
              class="h-5 w-5"
              fill="currentColor"
              viewbox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clip-rule="evenodd"
                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                fill-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      <div class="border-t border-gray-100 lg:hidden">
        <Nav location={location} />
      </div>
    </header>
  );
});

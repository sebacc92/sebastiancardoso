import { component$, useStylesScoped$ } from '@builder.io/qwik';
import styles from './header.css?inline';
import { Link, useLocation } from '@builder.io/qwik-city';

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

        <nav
          aria-label="Site Nav"
          class="hidden items-center justify-center gap-4 text-sm font-medium lg:flex lg:w-0 lg:flex-1 uppercase"
        >
          <Link class={{ active: location.pathname === '/projects/'}} href="/projects">
            <span class="px-4 rounded text-gray-900 text-center hover:bg-gray-300">Proyectos</span>
          </Link>
          <Link class={{ active: location.pathname === '/articles/'}} href="/articles">
            <span class="px-4 rounded text-gray-900 text-center hover:bg-gray-300">Artículos</span>
          </Link>
          <Link class={{ active: location.pathname === '/about/'}} href="/about">
            <span class="px-4 rounded text-gray-900 text-center hover:bg-gray-300 whitespace-nowrap">Acerca de</span>
          </Link>
        </nav>

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
        <nav
          class="flex items-center justify-center gap-4 overflow-x-auto p-4 text-sm font-medium uppercase"
        >
          <Link class={{ active: location.pathname === '/projects/'}} href="/projects">
            <span class="flex-shrink-0 px-4 rounded text-gray-900 text-center hover:bg-gray-300">Proyectos</span>
          </Link>
          <Link class={{ active: location.pathname === '/articles/'}} href="/articles">
            <span class="flex-shrink-0 px-4 rounded text-gray-900 text-center hover:bg-gray-300">Artículos</span>
          </Link>
          <Link class={{ active: location.pathname === '/about/'}} href="/about">
            <span class="flex-shrink-0 px-4 rounded text-gray-900 text-center hover:bg-gray-300 ">Acerca de</span>
          </Link>
        </nav>
      </div>
    </header>
  );
});

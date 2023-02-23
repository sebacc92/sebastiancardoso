import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Twitter } from '~/components/icons/twitter';
import { Instagram } from '~/components/icons/instagram';
import { Linkedin } from '~/components/icons/linkedin';
import { Github } from '~/components/icons/github';
import { Gitlab } from '~/components/icons/gitlab';

export default component$(() => {
  return (
    <div class="wrapper2">
      <div class="container2">
        <div class="section-1">
          <div class="relative">
            <img src="/images/yo4.jpeg" alt="Foto de sebastian" class="rounded-full w-36 h-36 object-cover shadow-lg" />
            <div class="absolute inset-0 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300">
              <span class="text-4xl">👋</span>
            </div>
          </div>
          <div class="text">
            <div class="name">
              Seba Cardoso
            </div>
            <div class="description">Web developer</div>
          </div>
        </div>
        <div class="section-2">
          <div class="links">
            <div><a target="_blank" href="https://gitlab.com/sebacode"><Gitlab /></a></div>
            <div><a target="_blank" href="https://github.com/sebacc92"><Github /></a></div>
            <div><a target="_blank" href="https://twitter.com/sebacc92"><Twitter /></a></div>
            <div><a target="_blank" href="https://linkedin.com/in/sebastiancardoso92"><Linkedin /></a></div>
            <div><a target="_blank" href="https://instagram.com/sebacc92"><Instagram /></a></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso',
};

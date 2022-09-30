import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import { Twitter } from '~/components/icons/twitter';
import { Instagram } from '~/components/icons/instagram';
import { Linkedin } from '~/components/icons/linkedin';
import { Github } from '~/components/icons/github';

export default component$(() => {
  return (
    <div class="wrapper">
      <div class="container">
        <div class="section-1">
          <div class="avatar">
            <img src="/images/yo.jpg" alt="Foto de sebastian" />
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
            <div><a target="_blank" href="https://twitter.com/sebacc92"><Twitter /></a></div>
            <div><a target="_blank" href="https://instagram.com/sebacc92"><Instagram /></a></div>
            <div><a target="_blank" href="https://github.com/sebacc92"><Github /></a></div>
            <div><a target="_blank" href="https://linkedin.com/in/sebastiancardoso92"><Linkedin /></a></div>
          </div>
        </div>
      </div>
    </div>
  );
});

export const head: DocumentHead = {
  title: 'Sebastian Cardoso',
};

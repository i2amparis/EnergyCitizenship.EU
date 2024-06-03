import { c as create_ssr_component, v as validate_component, e as escape } from './index3-9449d6ac.js';
import { h as hero_img } from './slider_2-1e40ffbd.js';

const css = {
  code: ".break-out-of-container.svelte-1iv7hj5{left:50%;margin-left:-50vw;margin-right:-50vw;max-width:99.2vw;position:relative;right:50%;width:100vw}",
  map: null
};
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="hero max-h-96 break-out-of-container svelte-1iv7hj5" style="${"background-image: url(" + escape(hero_img, true) + ");"}"><div class="hero-overlay bg-opacity-60"></div>
    <div class="hero-content text-left text-neutral-content p-12"><div class="max-w-md mr-24"><h1 class="mb-5 text-5xl font-bold">Explore the Interactive Map</h1>
        <p>Open the interactive map</p>
        <p class="mb-5">and explore a variety of data</p>
        <button class="btn btn-primary"><svg width="32px" height="32px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M9 20L3 17V4L9 7M9 20L15 17M9 20V7M15 17L21 20V7L15 4M15 17V4M9 7L15 4" stroke="#000000" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            Map  
        </button></div>
      <div class="max-w-md"><h1 class="mb-5 text-5xl font-bold">This may surprise you! </h1>
        <p class="mb-5">Things we have learnt
            from talking about energy with 68 initiatives.</p>
        <button class="btn btn-primary"><svg width="32px" height="32px" viewBox="0 0 24.00 24.00" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M4 19V6.2C4 5.0799 4 4.51984 4.21799 4.09202C4.40973 3.71569 4.71569 3.40973 5.09202 3.21799C5.51984 3 6.0799 3 7.2 3H16.8C17.9201 3 18.4802 3 18.908 3.21799C19.2843 3.40973 19.5903 3.71569 19.782 4.09202C20 4.51984 20 5.0799 20 6.2V17H6C4.89543 17 4 17.8954 4 19ZM4 19C4 20.1046 4.89543 21 6 21H20M9 7H15M9 11H15M19 17V21" stroke="#000000" stroke-width="0.9600000000000002" stroke-linecap="round" stroke-linejoin="round"></path></g></svg>
            Stories       
        </button></div></div>
  </div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="max-w-7xl mx-auto">${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})}


</div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-76f9fed2.js.map

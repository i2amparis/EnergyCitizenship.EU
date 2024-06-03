import { c as create_ssr_component, v as validate_component, e as escape } from './index3-9449d6ac.js';
import { h as hero_img } from './slider_2-1e40ffbd.js';
import { T as Technologies } from './Technologies-a6337634.js';

const Community_Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { title } = $$props;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  return `<div class="hero max-h-96" style="${"background-image: url(" + escape(hero_img, true) + ");"}"><div class="hero-overlay bg-opacity-70"></div>
  <div class="hero-content text-left text-neutral-content p-12"><div class="max-w-xl mr-24 bg-slate-200 bg-opacity-10 border-2 rounded-md p-6"><h1 class="text-4xl font-bold">${escape(title)}</h1></div></div>
</div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `${validate_component(Community_Hero, "CommunityHero").$$render($$result, { title: data.community["Name"] }, {}, {})}

<div class="max-w-7xl mx-auto pl-32 pr-32 mb-20"><div class="text-sm breadcrumbs mt-6 mb-12 "><ul><li><a href="/interactive_map">Map</a></li> 
          <li>${escape(data.community["Name"])}</li></ul></div>

    <div class="grid grid-flow-col grid-rows-3 gap-4"><div class="artboard phone-1 p-6 rounded-md border-dashed border-2 bg-slate-200 row-span-3" data-theme="emerald"><h2 class="card-title mb-2">Type of Initiative
            </h2>
            <p>${escape(data.community["Name"])}</p>

            <h2 class="card-title mb-2 mt-5">Country
            </h2>
            <p>${escape(data.community["Country"])}</p>
            <h2 class="card-title mb-2 mt-5">Project Start
            </h2>
            <p>${escape(data.community["Project start"])}</p>
            <h2 class="card-title mb-2 mt-5">Project End
            </h2>
            <p>${escape(data.community["Project end"])}</p></div>

        <div class="ml-5 col-span-2"><h1 class="text-3xl font-bold mb-2">Description</h1>
            <p>${escape(data.community["Short description"])}</p></div>

        <div class="ml-5 col-span-2 row-span-2"><h1 class="text-3xl font-bold mb-2">Technologies</h1>
            
            ${validate_component(Technologies, "Technologies").$$render(
    $$result,
    {
      data: data.community["Technologies_filter"]
    },
    {},
    {}
  )}</div></div>

    <h1 class="text-3xl font-bold mt-12 mb-2">Goals</h1>
    <p>${escape(data.community["Goal"])}</p>

    <h1 class="text-3xl font-bold mt-12 mb-2">Planned impacts</h1>
    <p>${escape(data.community["Planned impacts"])}</p>

    <h1 class="text-3xl font-bold mt-12 mb-2">Actual impacts</h1>
    <p>${escape(data.community["Actual impacts"])}</p></div>`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-796b540d.js.map

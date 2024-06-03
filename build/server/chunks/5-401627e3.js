import { e as error } from './index-2b68e648.js';
import { D as DataRetriever } from './data-retriever-ad12b41a.js';

let retriever = new DataRetriever();
const load = ({ fetch, params }) => {
  const fetchCommunity = async (id) => {
    if (id <= retriever.data.length) {
      const data = retriever.getCommunityById(id);
      return data;
    } else {
      throw error(404, {
        message: "Not found"
      });
    }
  };
  return {
    community: fetchCommunity(params.energyCommunities)
  };
};

var _page = /*#__PURE__*/Object.freeze({
  __proto__: null,
  load: load
});

const index = 5;
let component_cache;
const component = async () => component_cache ??= (await import('./_page.svelte-796b540d.js')).default;
const universal_id = "src/routes/interactive_map/[energyCommunities]/+page.js";
const imports = ["_app/immutable/nodes/5.ff4e2fea.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/chunks/data-retriever.f7dc9f73.js","_app/immutable/chunks/index.f7580e40.js","_app/immutable/chunks/slider_2.b9075baf.js"];
const stylesheets = [];
const fonts = [];

export { component, fonts, imports, index, stylesheets, _page as universal, universal_id };
//# sourceMappingURL=5-401627e3.js.map

import { c as create_ssr_component, d as each, e as escape, a as add_attribute } from './index3-9449d6ac.js';

const solar_pv = "/_app/immutable/assets/solar_pv.0d2f737d.svg";
const wind = "/_app/immutable/assets/wind.a23a5efa.svg";
const smart_meters = "/_app/immutable/assets/smart_meters.e93c50fb.svg";
const hydro_power = "/_app/immutable/assets/hydro_power.62a62f01.svg";
const electromobility = "/_app/immutable/assets/electromobility2.27cdfb03.svg";
const hvac = "/_app/immutable/assets/hvac2.f6b2bbda.svg";
const renovation = "/_app/immutable/assets/renovation2.18cbf60a.svg";
const batteries = "/_app/immutable/assets/batteries.8d69affc.svg";
const Technologies = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  let technologies = [
    {
      name: "Solar PV",
      src: solar_pv,
      compare: "PV",
      disable: true
    },
    {
      name: "Wind",
      src: wind,
      compare: "Wind",
      disable: true
    },
    {
      name: "Smart Systems",
      src: smart_meters,
      compare: "Smart systems or monitoring",
      disable: true
    },
    {
      name: "Other sources",
      src: hydro_power,
      compare: "Other energy sources (biomass, hydro, hydrogen)",
      disable: true
    },
    {
      name: "EMobility",
      src: electromobility,
      compare: "Electromobility",
      disable: true
    },
    {
      name: "HVAC",
      src: hvac,
      compare: "Heat pumps, solar heaters, HVAC",
      disable: true
    },
    {
      name: "Renovation",
      src: renovation,
      compare: "Renovation",
      disable: true
    },
    {
      name: "Batteries",
      src: batteries,
      compare: "Batteries",
      disable: true
    }
  ];
  if (typeof data === "string" && data != "") {
    data.split(" | ").forEach((element) => {
      for (var i = 0; i < technologies.length; i++) {
        if (technologies[i]["compare"] == element) {
          technologies[i]["disable"] = false;
          return;
        }
      }
    });
  }
  var j;
  if (typeof data === "string" && data == "all") {
    for (j = 0; j < technologies.length; j++) {
      technologies[j]["disable"] = false;
    }
  }
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  return `<div class="grid grid-cols-2 lg:grid-cols-3 gap-6 mt-5">${each(technologies, (tech) => {
    return `<div class="${"lg:flex flex-wrap justify-start content-around " + escape(tech.disable ? "opacity-40" : "opacity-100", true)}"><img class="mask mask-squircle w-16 h-16 bg-slate-200"${add_attribute("src", tech.src, 0)}${add_attribute("alt", tech.name, 0)}>
            <div class="p-1 text-sm mt-auto mb-auto ml-auto mr-auto lg:ml-2 ">${escape(tech.name)}</div> 
        </div>`;
  })}</div>`;
});

export { Technologies as T };
//# sourceMappingURL=Technologies-a6337634.js.map

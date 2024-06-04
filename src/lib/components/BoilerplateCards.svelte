<script>

  export let data;


</script>

<div class="group delay-150 ease-in-out hover:translate-y-2 focus:-translate-y-2 relative flex flex-col bg-clip-border rounded-xl bg-transparent text-gray-700 shadow-md min-h-[30rem] items-end overflow-hidden"><img src="{data.imageUrl}" alt="bg" class="absolute inset-0 h-full w-full object-cover object-center" />
  <div class=" absolute inset-0 bg-black/20 transition-all hover:bg-black/70 hover:backdrop-blur hover:cursor-pointer">
      <div class="p-6 relative flex flex-col justify-end">
      <h4 class="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-white">{data.title}</h4>
      <p class="block antialiased font-sans text-base font-light leading-relaxed text-white my-2">{data.description}</p>
        <a
          class="link transition delay-100 group-hover:link-info text-slate-400 mt-2 flex items-center"
          href={data.href}
          >Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 ml-2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
            />
          </svg>
        </a>
    </div>
  </div>
</div>
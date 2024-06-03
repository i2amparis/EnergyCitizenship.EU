<script>
  import hero_img from '$lib/assets/slider_2.jpg';
  // import hero_img from '$lib/assets/grass_1280.jpg';
  export let title;
</script>

<section class="hero max-h-[10em] md:h-32 overflow-visible my-0 mt-2 py-2 backdrop-blur-md" style="background-image: url({hero_img});">
  <!-- <div class="hero-overlay bg-opacity-70"></div> -->
  <div class="max-w-lg text-center m-auto rounded-2xl backdrop-blur-md">
    <h2 class="text-white font-bold text-2xl sm:text-3xl lg:text-4xl">{title}</h2>
  </div>
</section>
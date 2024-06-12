<script>

export let data;

</script>

<section class=" max-w-sm sm:mx-auto">
    {#each data as { name, imageUrl, description }}
      <details>
        <summary><img class="w-32 scale-50 min-[370px]:scale-75 sm:scale-90 translate-y-12 sm:translate-y-5" src={imageUrl} alt='temp' /> <h6 class="sm:ml-2 translate-y-2 sm:-translate-y-5">{name}</h6></summary>
        <div>
          <article class="prose">
            {description}
          </article>
          <!-- <p class="prose-p:">{description}</p> -->
        </div>
      </details>
    {/each}
  </section>



  <style>

    
    summary {
      display: flex;
      align-items: baseline;
      cursor: pointer;
      padding: 10px;
      font-family: "Space Mono", monospace;
      font-size: 1.1rem;
      transition: .3s;
      border-bottom: 1px solid;
      user-select: none;
      /* max-height: 15vw; */
    }
    
    details > div {
      display: flex;
      flex-wrap: wrap;
      overflow: auto;
      height: 100%;
      padding: 0 20px;
      font-family: "Karla", sans-serif;
      line-height: 1.5;
    }
    
    
    
    details[open] > summary {
       color: oklch(0.766626 0.135433 153.450024 / 1);
    }

    
    @media (min-width: 368px) {
      details[open] > div > article {
        opacity: 0;
        animation-name: showContent;
        animation-duration: 0.3s;
        animation-delay: 0.2s;
        animation-fill-mode: forwards;
        margin: 0;
      }
    
      details[open] > div {
        animation-name: slideDown;
        animation-duration: 0.3s;
        animation-fill-mode: forwards;
      }
    
    }
    
    @keyframes slideDown {
      from {
        opacity: 0;
        height: 0;
        padding: 0;
      }
    
      to {
        opacity: 1;
        height: auto;
        padding: 20px;
      }
    }
    
    
    @keyframes showContent {
      from {
        opacity: 0;
      }
      to {
        opacity: 1;
      }
    }
    </style>
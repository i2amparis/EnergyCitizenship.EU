<script>

    export let data;
    export let text_dark;

</script>




    <div class=" max-w-xl bg-img backdrop-blur-sm" style="background-image: url('{data.imageUrl}');">
        <div class="flex rounded-lg h-full shadow-xl p-8 flex-col bg-white/20 dark:bg-black/10 dark:text-black" >
            <div><span class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary ">{data.category}</span></div>
            <div class="flex items-center mb-4 ">
                <a href="{data.href}" class="mt-3 hover:text-primary hover:rounded-md"><h2 class="text-xl lg:text-3xl font-medium font-mono"><strong>{data.title}</strong></h2></a>
            </div>
            <div class="flex flex-col justify-between flex-grow pb-8 min-[370px]:border-b-2">
                <p class="leading-relaxed text-base max-w-xs ">
                    {data.description}
                </p>
                
                <a href="{data.href}" class="mt-6 hover:text-primary inline-flex items-center rounded-full text-sm font-semibold focus:outline-none">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>
                
            </div>
            <div class="mt-5 flex flex-row justify-between max-[370px]:hidden">
                <div class="flex flex-col ">
                    <span class="block text-[#8a8a93] dark:text-black tracking-tight text-xs uppercase">Authors</span>
                    <div class="mt-2 max-w-xs dark:text-gray-600">
                        {#each data.authors as author, i}
                            {#if i != data.authors.length - 1}
                                <span class="text-xs">{author}, </span>
                            {:else}
                                <span class="text-xs"> {author}</span>
                            {/if}
                            
                        {/each}
                    </div>
                </div>
                <div class="flex flex-col">
                    <span class="block text-[#8a8a93] dark:text-black tracking-tight text-xs uppercase">Audience</span>
                    <div class="flex gap-2 mt-2 max-w-xs">
                        {#each data.badges as badge }
                        <div style="color: {badge.color} " class="badge badge-sm badge-outline ">{badge.title}</div>
                        {/each}
                    </div>
                </div>
                
            </div>
        </div>
    </div>


<style>

    .bg-img {
        background-position: 70%;
        background-size: 70% auto;
        background-repeat: no-repeat;
    }


</style>
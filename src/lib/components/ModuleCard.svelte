<script>

    export let data;


</script>




    <div class="p-4 max-w-xl bg-img" style="background-image: url('{data.imageUrl}');">
        <div class="flex rounded-lg h-full shadow-xl p-8 flex-col dark:bg-slate-800 bg-opacity" >
            <!-- <img class="" src="{data.imageUrl}" alt="imagePlaceholder"> -->
            <div><span class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary ">{data.category}</span></div>
            <div class="flex items-center mb-4">
                <a href="{data.href}" class="mt-3 hover:text-primary hover:rounded-md"><h2 class="text-xl lg:text-3xl font-medium font-mono">{data.title}</h2></a>
            </div>
            <div class="flex flex-col justify-between flex-grow pb-8 min-[370px]:border-b-2">
                <p class="leading-relaxed text-base max-w-xs z-10">
                    {data.description}
                </p>
                
                <a href="{data.href}" class="mt-6 hover:text-primary inline-flex items-center rounded-full text-sm font-semibold focus:outline-none">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                        stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                        <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                </a>

                <!-- <a
                class="group inline-flex items-center h-9 rounded-full text-sm font-semibold  px-3 focus:outline-none focus:ring-2 bg-slate-100 text-slate-700 hover:bg-slate-200 hover:text-slate-900 focus:ring-slate-500 mt-6"
                href="">Learn
                more
                <svg class="ml-3 text-slate-300 group-hover:text-slate-400"
                    width="3" height="6" viewBox="0 0 3 6" fill="none" stroke="currentColor" stroke-width="2"
                    stroke-linecap="round" stroke-linejoin="round">
                    <path d="M0 0L3 3L0 6"></path>
                </svg></a> -->
                
            </div>
            <div class="mt-5 flex flex-row justify-between max-[370px]:hidden">
                <div class="flex flex-col ">
                    <span class="block text-[#8a8a93] tracking-tight text-xs uppercase">Authors</span>
                    <div class="mt-2 max-w-xs">
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
                    <span class="block text-[#8a8a93] tracking-tight text-xs uppercase">Audience</span>
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

        background-position: 50%;
        background-size: 80% auto;
        background-repeat: no-repeat;
        /* z-index: -5; */
        
    }

    .bg-opacity {
        background-color: rgba(255,255,255, 0.5);
    }

</style>
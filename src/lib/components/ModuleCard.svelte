<script>

    export let data;


</script>




    <div class="p-4 max-w-xl">
        <div class="flex rounded-lg h-full shadow-xl p-8 flex-col dark:bg-slate-800 ">
            <span class="inline-block mb-4 text-xs font-bold capitalize border-b-2 border-primary ">Education</span>
            <div class="flex items-center mb-4">
                <a href="#" class="mt-3 hover:text-primary hover:rounded-md"><h2 class="text-lg lg:text-2xl font-medium font-mono!">{data.title}</h2></a>
            </div>
            <div class="flex flex-col justify-between flex-grow pb-8 border-b-2">
                <p class="leading-relaxed text-base ">
                    {data.description}
                </p>
                
                <a href="#" class="mt-3 hover:text-primary inline-flex items-center rounded-full text-sm font-semibold focus:outline-none">Learn More
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
            <div class="mt-5 flex flex-row justify-between">
                <div>

                </div>
                <div class="flex gap-2">
                    {#each data.badges as badge }
                    <div style="color: {badge.color} " class="badge badge-sm badge-outline ">{badge.title}</div>
                    {/each}
                </div>
                
            </div>
        </div>
    </div>


<style>



</style>
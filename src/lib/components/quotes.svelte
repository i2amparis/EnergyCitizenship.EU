<script>
    // import { testimonials } from "$lib/quotes-data";
    import { getCountryQuotes } from "$lib/quotes-data";
    
    export let country;
    let testimonials = getCountryQuotes(country);
</script>

<section>
    <div class="text-2xl mb-5 flex items-center">

        <svg viewBox="0 0 24 18" aria-hidden="true" class="w-8 h-8 scale-75 text-gray-600">
            <path d="M0 18h8.7v-5.555c-.024-3.906 1.113-6.841 2.892-9.68L6.452 0C3.188 2.644-.026 7.86 0 12.469V18zm12.408 0h8.7v-5.555C21.083 8.539 22.22 5.604 24 2.765L18.859 0c-3.263 2.644-6.476 7.86-6.451 12.469V18z" fill="currentColor" />
        </svg>
        Quotes

    </div>

    <ul class="">
        {#each testimonials.slice(0, 3) as {quote, badges} }
            <li
            class="w-full flex flex-col border-b-2 border-neutral-100 border-opacity-100 py-4 dark:border-opacity-50">
                <div class="prose-sm sm:prose ">
                    "{quote}"
                </div>
                <div class="flex justify-between mt-4 p-4">
                    <div></div>
                    <div class="flex flex-shrink-0 gap-2">
                    {#each badges as badge}
                        <div class="badge badge-outline"> {badge} </div>
                    {/each}
                    </div>
                </div>
                
            </li>
        {/each}
    </ul>
</section>
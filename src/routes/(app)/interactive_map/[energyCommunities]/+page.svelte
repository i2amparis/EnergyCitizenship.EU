<script>

    import CommunityHero from '$lib/components/Community_Hero.svelte';
    import Technologies from '$lib/components/Technologies.svelte';

    export let data;
    // console.log(data.community)
</script>


<CommunityHero 
    title={data.community["Name"]}
/>

<div class="sm:max-w-7xl mx-auto lg:pl-32 pl-5 lg:pr-32 pr-5 mb-20">

    <div class="text-sm breadcrumbs overflow-hidden mt-6 mb-12 ">
        <ul>
            <li><a href="/interactive_map">Map</a></li> 
            <li>{data.community["Name"]}</li>
        </ul>
    </div>

    <div class="grid md:grid-flow-col md:grid-rows-3 grid-flow-row gap-4">
    


        <div class="lg:artboard phone-1 p-6 rounded-md border-dashed border-2 bg-slate-200 row-span-3" data-theme="emerald">

            <h2 class="card-title mb-2">
                Type of Initiative
            </h2>
            <p>{data.community["Name"]}</p>

            <h2 class="card-title mb-2 mt-5">
                Country
            </h2>
            <p>{data.community["Country"]}</p>
            <h2 class="card-title mb-2 mt-5">
                Project Start
            </h2>
            <p>{data.community["Project start"]}</p>
            <h2 class="card-title mb-2 mt-5">
                Project End
            </h2>
            <p>{data.community["Project end"]}</p>

        </div>

        <div class="ml-5 col-span-2">
            <h1 class="text-3xl font-bold mb-2">Description</h1>
            <p>{data.community["Short description"]}</p>
        </div>

        <div class="ml-5 col-span-2 row-span-2">

            <h1 class="text-3xl font-bold mb-2">Technologies</h1>
            
            <Technologies
                data={data.community["Technologies_filter"]}
                checkbox={false}
            />

        </div>

    </div>

    <h1 class="text-3xl font-bold mt-12 mb-2">Goals</h1>
    <p>{data.community["Goal"]}</p>

    <h1 class="text-3xl font-bold mt-12 mb-2">Planned impacts</h1>
    <p>{data.community["Planned impacts"]}</p>

    <h1 class="text-3xl font-bold mt-12 mb-2">Actual impacts</h1>
    <p>{data.community["Actual impacts"]}</p>

</div>

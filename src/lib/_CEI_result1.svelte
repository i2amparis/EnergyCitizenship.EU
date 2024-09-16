<script>
    import { getContext } from "svelte";
    import { contextKey } from "$lib/components.js";

    const { getMap, getMapbox } = getContext(contextKey);
    const map = getMap();

    
</script>
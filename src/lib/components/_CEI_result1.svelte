<script>
    import { getContext } from "svelte";
    import { contextKey } from "$lib/components.js";
    import marker from "$lib/assets/CEI_marker.png"

    const { getMap, getMapbox } = getContext(contextKey);
    const map = getMap();

    map.loadImage(
            //'https://docs.mapbox.com/mapbox-gl-js/assets/custom_marker.png',
            marker,
            (error, image) => {
                if (error) throw error;
                map.addImage('custom-marker', image);
                
                map.addSource('points', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [ -8.039227994187375, 52.94637646984333]
                                },
                                'properties': {
                                    'title': 'Cloughjordan Ecovillage'
                                }
                            },
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [ 4.330236207304141, 51.999023409646696]
                                },
                                'properties': {
                                    'title': 'EnergieC Midden-Delfland'
                                }
                            },
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [ 20.94945570072261, 41.407013900002866]
                                },
                                'properties': {
                                    'title': 'Belica Energy Community'
                                }
                            }
                        ]
                    }
                });

                // Add a symbol layer
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'points',
                    'layout': {
                        'icon-image': 'custom-marker',
                        // get the title name from the source's "title" property
                        'text-field': ['get', 'title'],
                        'text-font': [
                            'Open Sans Semibold',
                            'Arial Unicode MS Bold'
                        ],
                        'text-offset': [0, 1.25],
                        'text-anchor': 'top'
                    }
                });
            }
        );
</script>
import { error } from '@sveltejs/kit';
import { DataRetriever } from '$lib/data-retriever.js'

import {ENCDataRetriever} from '$lib/data_handler/fetch-community-data.js'

let retriever = new DataRetriever()


export const load = ({ fetch, params }) => {



    const fetchCommunity = async (id) => {

        if(retriever.checkIncludesId(id)){
            const data = retriever.getCommunityById(id);
            return data
        }
        else {
            throw error(404, {
                message: 'Not found'
            });
        }
        
    }

    return {
        community: fetchCommunity(params.energyCommunities )
    }

}
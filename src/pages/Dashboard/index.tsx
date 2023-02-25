import React from 'react'
import { MeiliSearch } from 'meilisearch'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { Box, Flex } from '@chakra-ui/react';
import Card from '../../components/Card';

const client = instantMeiliSearch(
    'https://ms-5871cafdda1c-2301.sgp.meilisearch.io',
    'fd910a2c03bb59170385c0f71aafd1dc07dd0173a8373819dc77ee34bd6ff9d6'
);

// const client = new MeiliSearch({
//   host: 'https://ms-5871cafdda1c-2301.sgp.meilisearch.io',
//   apiKey: '05009a17cfaf0f21bbe243394cfec5153d3c9e05',
// })

const Dashboard = () => {
  return (
    <Box pt="100px" color="white" zIndex={2} pos="relative">
        <InstantSearch
            indexName="pdfs"
            searchClient={client}
        >
            <SearchBox className='search-box' />
            <Flex gap="20px" direction="row">
                <Hits hitComponent={Hit} />
            </Flex>
        </InstantSearch>
    </Box>
  )
}

const Hit = ({ hit }: any) => {
    console.log(hit)
    return (
        <Card fileName={hit.name} />
        // <Highlight attribute="name" hit={hit} />
    )
};

export default Dashboard
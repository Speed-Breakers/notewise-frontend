import React from 'react'
import { MeiliSearch } from 'meilisearch'
import { InstantSearch, SearchBox, Hits, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';

const client = instantMeiliSearch(
    'https://ms-5871cafdda1c-2301.sgp.meilisearch.io',
    '05009a17cfaf0f21bbe243394cfec5153d3c9e05'
);
  
// const client = new MeiliSearch({
//   host: 'https://ms-5871cafdda1c-2301.sgp.meilisearch.io',
//   apiKey: '05009a17cfaf0f21bbe243394cfec5153d3c9e05',
// })

const Dashboard = () => {
  return (
    <InstantSearch
        indexName="steam-video-games"
        searchClient={client}
    >
        <SearchBox />
        <Hits hitComponent={Hit} />
    </InstantSearch>
  )
}

const Hit = ({ hit }: any) => <Highlight attribute="name" hit={hit} />;

export default Dashboard
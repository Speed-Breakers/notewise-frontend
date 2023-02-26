import React, {useState} from 'react'
import { MeiliSearch } from 'meilisearch'
import { InstantSearch, SearchBox, Hits, Pagination, Highlight } from 'react-instantsearch-dom';
import { instantMeiliSearch } from '@meilisearch/instant-meilisearch';
import { Box, Flex, Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
   } from '@chakra-ui/react';
import TableRow from '../../components/TableRow';
import Cards from '../../components/Cards';

const client = instantMeiliSearch(
    'https://search.notewise.study/',
    'dbb2b3e91c023a0f8943e6d5b57a9760971b932c3052a477799acd70c4465ef0'
);

// const client = new MeiliSearch({
//   host: 'https://ms-5871cafdda1c-2301.sgp.meilisearch.io',
//   apiKey: '05009a17cfaf0f21bbe243394cfec5153d3c9e05',
// })

const Dashboard = () => {
    const [index, setIndex] = React.useState("pdfs");
    const [query, setQuery] = useState("");

    const TableHit = ({ hit }: any) => {
        console.log(hit)
        return (
            <TableRow file={hit} query={query} />
            // <Highlight attribute="summary" hit={hit} />
        )
    };
    const CardHit = ({ hit }: any) => {
        console.log(hit)
        return (
            <Cards file={hit} query={query} />
            // <Highlight attribute="summary" hit={hit} />
        )
    };

  return (
    <Box pt="100px" color="white" zIndex={2} pos="relative">
        <InstantSearch
            indexName={index}
            searchClient={client}
            onSearchStateChange={(e) => {
                if(e.query==="") {
                    setIndex("pdfs");
                } else if(index !== "pdf_pages") {
                    setIndex("pdf_pages");
                }
            }}
        >
            <SearchBox className='search-box' />
            <Flex gap="20px" direction="row" mt="50px" className={index === "pdfs" ? "pdfs-list" : "pdf-pages-list"}>
                {index === "pdfs" ?
                    <Hits hitComponent={CardHit} />
                    :
                    <Hits hitComponent={TableHit} />
                }
            </Flex>
            {/* <Pagination /> */}
        </InstantSearch>
    </Box>
  )
}



export default Dashboard
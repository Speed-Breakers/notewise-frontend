import { Box } from '@chakra-ui/react'
import { Document, Page } from 'react-pdf'
import React, {useState} from 'react'
import Loader from '../../components/Loader'

const DetailsPage = () => {
    const [isLoading, setIsLoading] = useState(false)

    const onDocumentLoadSuccess = () => {

    }

    return (
        <>
            {isLoading &&
                <Loader />
            }
            <Box pt="100px" color="white" zIndex={2} pos="relative">
                <Document
                    file={{ url: 'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK' }}
                    onLoadSuccess={onDocumentLoadSuccess}
                    >
                    <Page pageNumber={1} />
                </Document>
                {/* <Document
                    file={{ url: 'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK' }}
                    onLoadSuccess={onDocumentLoadSuccess}
                > */}
            </Box>
        </>
    )
}

export default DetailsPage
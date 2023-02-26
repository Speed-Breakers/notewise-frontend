import { Box, Button, Flex, Text, useToast } from '@chakra-ui/react'
// import { Document, Page, pdfjs } from 'react-pdf'
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import React, {useState, useEffect} from 'react'
import Loader from '../../components/Loader'
import { useParams } from 'react-router-dom';

const DetailsPage = () => {
    const [isLoading, setIsLoading] = useState(true) 
    const [totalPages, setTotalPages] = useState(0);
    const [pageNumber, setPageNumber] = useState(0)
    const [isNextDisabled, setIsNextDisabled] = useState(false)
    const [isPrevDisabled, setIsPrevDisabled] = useState(false)
    const {fileId, title} = useParams()
    const toast = useToast()

    console.log(fileId, title);

    const onDocumentLoadSuccess = ({ numPages }: any) => {
        setTotalPages(numPages);
        setIsLoading(false)
    }

    const goNextPage = () => {
        if (pageNumber < totalPages) {
            setPageNumber(prev => prev+1)
        }   else {
            setIsNextDisabled(true)
        }
    }

    const goPrevPage = () => {
        if (pageNumber > 0) {
            setIsLoading(true)
            setPageNumber(prev => prev-1)
        }   else {
            setIsPrevDisabled(true)
        }
    }

    return (
        <>
            {isLoading &&
                <Loader />
            }
            <Flex pt="100px" color="white" zIndex={2} pos="relative" w="calc(100vw - 50px)" maxW="1000px" margin="auto">
                <Flex direction="column" >
                    {!isLoading &&
                        <Flex justifyContent="space-between" alignItems={"center"} mt="20px" mb="20px">
                            <Button color="black" onClick={() => goPrevPage()}>Prev</Button>
                            <Text>Page {pageNumber+1}/{totalPages}</Text>
                            <Button color="black" onClick={() => goNextPage()}>Next</Button>
                        </Flex>
                    }
                    <Document
                        file={{ url: 'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK' }}
                        onLoadSuccess={onDocumentLoadSuccess}
                        >
                        <Page pageNumber={2} />
                    </Document>
                    {!isLoading &&
                        <Flex justifyContent="space-between" alignItems={"center"} mt="20px" mb="50px">
                            <Button color="black">Prev</Button>
                            <Text>Page {pageNumber+1}/{totalPages}</Text>
                            <Button color="black">Next</Button>
                        </Flex>
                    }
                </Flex>
                <Box w="200px"></Box>
            </Flex>
        </>
    )
}

export default DetailsPage
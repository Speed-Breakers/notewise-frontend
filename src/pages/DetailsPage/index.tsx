import { Box, Button, Flex, Input, Text, useToast, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Textarea,
       } from '@chakra-ui/react'
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
    const [isNoteModalOpen, setIsNoteModalOpen] = useState(false)
    const [noteText, setNoteText] = useState("")
    const {fileId, title} = useParams()
    const toast = useToast()

    console.log(fileId, title);

    const onDocumentLoadSuccess = ({ numPages }: any) => {
        setTotalPages(numPages);
        setIsLoading(false)
    }

    const goNextPage = () => {
        if (pageNumber < totalPages) {
            setIsLoading(true)
            setPageNumber((prev:any) => prev+1)
        }   else {
            setIsNextDisabled(true)
        }
    }

    const goPrevPage = () => {
        if (pageNumber > 0) {
            setIsLoading(true)
            setPageNumber((prev:any) => prev-1)
        }   else {
            setIsPrevDisabled(true)
        }
    }

    useEffect(() => {
        // const url = `https://cdn.jsdelivr.net/npm/pdfjs-dist@5.2.0/build/pdf.worker.min.js`
        // pdfjs.GlobalWorkerOptions.workerSrc = url

    }, )

    console.log(`https://notewise.sgp1.digitaloceanspaces.com/notewise/${fileId}/${title}`)

    return (
        <>
            {isLoading &&
                <Loader />
            }
            <Flex pt="100px" color="white" zIndex={2} pos="relative" w="calc(100vw - 50px)" maxW="1100px" margin="auto"justifyContent="space-between">
                <Flex direction="column" >
                    {!isLoading &&
                        <Flex justifyContent="space-between" alignItems={"center"} mt="20px" mb="20px">
                            <Button color="black" onClick={() => goPrevPage()}>Prev</Button>
                            <Flex alignItems="center"><Text mr="10px">Page</Text> <Input value={pageNumber} onChange={(e:any) => setPageNumber(parseInt(e.target.value))} p="5px" w="35px" /> / {totalPages}</Flex>
                            <Button color="black" onClick={() => goNextPage()}>Next</Button>
                        </Flex>
                    }
                    <Document
                        file={{ url: 'https://cdn.filestackcontent.com/wcrjf9qPTCKXV3hMXDwK' }}
                        // file={{ url: `https://notewise.sgp1.digitaloceanspaces.com/notewise/${fileId}/${title}` }}
                        onLoadSuccess={onDocumentLoadSuccess}
                        >
                        <Page pageNumber={pageNumber-1} />
                    </Document>
                    {!isLoading &&
                        <Flex justifyContent="space-between" alignItems={"center"} mt="20px" mb="50px">
                            <Button color="black">Prev</Button>
                            <Flex alignItems="center"><Text mr="10px">Page</Text> <Input value={pageNumber} onChange={(e:any) => setPageNumber(parseInt(e.target.value))} p="5px" w="35px" /> / {totalPages}</Flex>
                            <Button color="black">Next</Button>
                        </Flex>
                    }
                </Flex>
                <Box w="200px" mt="20px">
                    <Modal isOpen={isNoteModalOpen} onClose={() => setIsNoteModalOpen(false)}>
                        <ModalOverlay />
                        <ModalContent>
                        <ModalHeader>Modal Title</ModalHeader>
                        <ModalCloseButton />
                        <ModalBody>
                            <Text>Add Description :</Text>
                            <Textarea onChange={(e) => setNoteText(e.target.value)} />
                        </ModalBody>

                        <ModalFooter>
                            <Button colorScheme='blue' mr={3} onClick={() => setIsNoteModalOpen(false)}>
                            Save
                            </Button>
                        </ModalFooter>
                        </ModalContent>
                    </Modal>
                    <Button color="black" onClick={() => setIsNoteModalOpen(true)}>Add new note</Button>
                </Box>
            </Flex>
        </>
    )
}

export default DetailsPage
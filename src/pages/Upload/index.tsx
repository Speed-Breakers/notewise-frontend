import { Box, Flex, Text, useCallbackRef } from '@chakra-ui/react'
import axios from 'axios'
import React, {useState} from 'react'
import {useDropzone} from 'react-dropzone'
import Loader from '../../components/Loader'

const Upload = () => {
    const onDrop = useCallbackRef(async (acceptedFiles) => {
        // Do something with the files
        setIsLoading(true)
        console.log(acceptedFiles)
        const formData = new FormData()
        formData.append("file", acceptedFiles[0])
        const res = await axios.post("https://api.notewise.study/files", formData, {headers: { "Content-Type": "multipart/form-data" }})
        console.log(res.data)
        setIsLoading(false)
    }, [])
    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
    const [isLoading, setIsLoading] = useState(false)
    
    return (
        <>
            {isLoading &&
                <Loader />
            }
            <Box pt="100px" color="white" zIndex={2} pos="relative">
                <Text fontSize={25} textAlign="center" mb="30px" mt="50px">Upload your pdf :</Text>
                <Flex justifyContent="center" alignItems="center" h="200px" cursor="pointer" fontSize={20} borderRadius="10px" mt="100px" border="2px dashed black" w={"calc(100vw - 50px)"} maxW="900px" margin="auto" bg="rgba(255,255,255,0.2)" {...getRootProps()}>
                    <input {...getInputProps()} />
                    {
                        isDragActive ?
                        <Text textAlign="center">Drop the files here ...</Text> :
                        <Text textAlign="center">Drag 'n' drop some files here, or click to select files</Text>
                    }
                </Flex>
            </Box>
        </>
    )
}

export default Upload
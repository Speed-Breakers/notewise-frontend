import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import pdfLogo from "../assets/pdfLogo.png"

interface CardsProps {
    fileId: string,
    fileName: string
}
const Cards = ({file} : any) => {
    const navigate = useNavigate()
    const routeHandler = (fileId:string, fileName:string) => {
        const url = encodeURIComponent(`/${fileId}/${fileName}`);
        navigate(`/file/${encodeURIComponent(fileId)}/${encodeURIComponent(fileName)}`)
    }
  return (
    <Flex onClick={() => routeHandler(file.pdf_id, file.name)} cursor="pointer" w="150px" direction="column" border="1px solid #666" bg="rgba(255,255,255,0.3)" backdropFilter="blur(20px)" borderRadius="10px"
        boxShadow="-2px -2px 5px rgba(255,255,255,0.4), 2px 2px 5px rgba(0,0,0,1)" p="10px">
        <Image src={pdfLogo} alt="pdf" />
        <Box>
            <Text textOverflow="ellipsis" w="100%" h="25px" mt="5px" whiteSpace="nowrap" overflow={"hidden"}>{file.name}</Text>
        </Box>
    </Flex>
  )
}

export default Cards
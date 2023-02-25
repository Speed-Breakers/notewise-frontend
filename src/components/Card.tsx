import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import pdfLogo from "../assets/pdfLogo.png"

interface CardProps {
    fileName: string
}

const Card = ({fileName} : CardProps) => {
  return (
    <Flex w="150px" direction="column" border="1px solid #666" bg="rgba(255,255,255,0.3)" backdropFilter="blur(20px)" borderRadius="10px"
        boxShadow="-2px -2px 5px rgba(255,255,255,0.4), 2px 2px 5px rgba(0,0,0,1)" p="10px">
        <Image src={pdfLogo} alt="pdf" />
        <Box>
            <Text textOverflow="ellipsis" w="100%" h="25px" mt="5px" whiteSpace="nowrap" overflow={"hidden"}>{fileName}</Text>
            <Text>100 KB</Text>
        </Box>
    </Flex>
  )
}

export default Card
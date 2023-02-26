import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import pdfLogo from "../assets/pdfLogo.png"

interface CardProps {
    file: any
}

const TableRow = ({file} : CardProps) => {
  const navigate = useNavigate()
  return (
    // <Flex w="150px" direction="column" border="1px solid #666" bg="rgba(255,255,255,0.3)" backdropFilter="blur(20px)" borderRadius="10px"
    //     boxShadow="-2px -2px 5px rgba(255,255,255,0.4), 2px 2px 5px rgba(0,0,0,1)" p="10px">
    //     <Image src={pdfLogo} alt="pdf" />
    //     <Box>
    //         <Text textOverflow="ellipsis" w="100%" h="25px" mt="5px" whiteSpace="nowrap" overflow={"hidden"}>{fileName}</Text>
    //         <Text>100 KB</Text>
    //     </Box>
    // </Flex>
    <Flex justifyContent="space-between" alignItems="center" w="100%" bg="rgba(0,0,0,0.3)" p="10px" px="30px" borderBottom="1px solid black">
      <Image src={pdfLogo} w="40px" />
      <Text ml="10px" w="calc(100% - 300px)" fontSize={20}>{file.name || file.pdf_name}</Text>
      <Text ml="10px" w="100px">{file.summary ? file.summary.length <= 20 ? file.summary : `${file.summary.slice(0, 30)}...` : ''}</Text>
      <Text ml="10px">{file?.page_num && `Page No. : ${file?.page_num}`}</Text>
    </Flex>
  )
}

export default TableRow
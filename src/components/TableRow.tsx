import { Box, Flex, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import pdfLogo from "../assets/pdfLogo.png"

interface CardProps {
    file: any
}

const TableRow = ({file} : CardProps) => {
  const navigate = useNavigate()
  const routeHandler = (fileId:string, fileName:string) => {
    const url = encodeURIComponent(`/${fileId}/${fileName}`);
    navigate(`/file/${encodeURIComponent(fileId)}/${encodeURIComponent(fileName)}`)
  }
  return (
    <Flex cursor="pointer" onClick={() => routeHandler(file.pdf_id, file.pdf_name)} mb="5px" justifyContent="space-between" alignItems="center" w="100%" bg="rgba(255,255,255,0.1)" p="10px" px="30px" borderBottom="1px solid black">
      <Image src={pdfLogo} w="40px" />
      <Text ml="10px" w="calc(100% - 300px)" fontSize={20}>{file.name || file.pdf_name}</Text>
      <Text ml="10px" w="100px">{file.summary ? file.summary.length <= 20 ? file.summary : `${file.summary.slice(0, 30)}...` : ''}</Text>
      <Text ml="10px">{file?.page_num && `Page No. : ${file?.page_num}`}</Text>
    </Flex>
  )
}

export default TableRow
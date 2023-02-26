import { Box, Flex, Image, Text, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
 } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import {BsChevronDown} from 'react-icons/bs'
import pdfLogo from "../assets/pdfLogo.png"

interface CardProps {
    file: any,
    query: string
}

const TableRow = ({file, query} : CardProps) => {
  const navigate = useNavigate()
  const routeHandler = (fileId:string, fileName:string) => {
    const url = encodeURIComponent(`/${fileId}/${fileName}`);
    navigate(`/file/${encodeURIComponent(fileId)}/${encodeURIComponent(fileName)}`)
  }

  const getContextText = () => {
    console.log(file.summary)
    console.log(file?.summary?.indexOf(query))
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
            <Flex cursor="pointer" mb="5px" justifyContent="space-between" alignItems="center" w="100%" bg="rgba(255,255,255,0.1)" p="10px" px="30px" borderBottom="1px solid black">
              <Image src={pdfLogo} w="40px" onClick={() => routeHandler(file.pdf_id, file.pdf_name)} />
              <Text ml="10px" w="calc(100% - 300px)" onClick={() => routeHandler(file.pdf_id, file.pdf_name)} fontSize={20}>{file.name || file.pdf_name}</Text>
              <Text ml="10px" w="100px">{file.summary ? file.summary.length <= 20 ? file.summary : `${file.summary.slice(0, 30)}...` : ''}</Text>
              <AccordionButton w="fit-content" onClick={getContextText}>
                <Text ml="10px">
                  <Flex alignItems="center">
                    <Text>
                    {file?.page_num && `Page No. : ${file?.page_num}`}
                    </Text>
                    <BsChevronDown />
                  </Flex> </Text>
              </AccordionButton>
            </Flex>
        </h2>
        <AccordionPanel pb={4}>
          {file.summary?.slice(0, 50)}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    
  )
}

export default TableRow
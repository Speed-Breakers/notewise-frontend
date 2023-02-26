import { Box, Flex, Image, Text, Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
 } from '@chakra-ui/react'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {BsChevronDown} from 'react-icons/bs'
import pdfLogo from "../assets/pdfLogo.png"

interface CardProps {
    file: any,
    query: string
}

const TableRow = ({file, query} : CardProps) => {
  const [resultContent, setResultContent] = useState("")
  const navigate = useNavigate()
  const routeHandler = (fileId:string, fileName:string) => {
    const url = encodeURIComponent(`/${fileId}/${fileName}`);
    navigate(`/file/${encodeURIComponent(fileId)}/${encodeURIComponent(fileName)}`)
  }

  const getContextText = () => {
    console.log(query)
    console.log(file.summary.indexOf(query), file.summary.substr(248, 40))
    if (file.summary.indexOf(query) !== -1)
      setResultContent(file.summary?.substr(file.summary.indexOf(query), file.summary.length - file.summary.indexOf(query)))
  }

  return (
    <Accordion allowToggle>
      <AccordionItem>
        <h2>
            <Flex direction={{base: "column", md: "row"}} cursor="pointer" mb="5px" justifyContent="space-between" alignItems="center" w="100%" bg="rgba(255,255,255,0.1)" p="10px" px="30px" borderBottom="1px solid black">
              <Flex justifyContent={{base: "space-between", md: "unset"}}>
                <Image src={pdfLogo} w="40px" h="40px" onClick={() => routeHandler(file.pdf_id, file.pdf_name)} />
                <Text ml="10px" w="300px" onClick={() => routeHandler(file.pdf_id, file.pdf_name)} fontSize={20}>{file.name || file.pdf_name}</Text>
              </Flex>
              <Flex w="250px" justifyContent={{base: "space-between", md: "center"}}>
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
            </Flex>
        </h2>
        <AccordionPanel pb={4}>
          {resultContent}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
    
  )
}

export default TableRow
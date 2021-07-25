import React from 'react'
import {Box,Text,Accordion,AccordionItem,AccordionButton,AccordionPanel,AccordionIcon} from '@chakra-ui/react';
import faq_list from '../Utils/faq.json';

const Faq = ({index,setIndex,currentId,setCurrentId}) => {
    return (
        <>
        <Accordion allowToggle index={index}>
                {
                    faq_list.map(faq=>(
                        <AccordionItem p="4" key={faq.id} name={`accordion-item-${faq.id}`}>
                            <AccordionButton onClick={() => { 
                                if (faq.id === currentId) {
                                    setCurrentId(null);
                                    setIndex(null);
                                  } else {
                                    setCurrentId(faq.id);
                                    setIndex(faq.id - 1);
                                  }
                            } }>
                                <Box flex="1" textAlign="left">
                                    <Text fontWeight="semibold">{faq.question}</Text>
                                </Box>
                                <AccordionIcon/>
                            </AccordionButton>
                            <AccordionPanel pb="4">
                                {faq.answer}
                            </AccordionPanel>
                        </AccordionItem>
                    ))
                }
        </Accordion>
        </>
       
    )
}

export default Faq

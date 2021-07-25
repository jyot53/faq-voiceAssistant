import React , {useState,useEffect,useRef} from 'react'
import {ChakraProvider,theme} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import Faq from './components/Faq'; 
import alanBtn from "@alan-ai/alan-sdk-web";
import {scroller} from 'react-scroll';

const App = () => {
  const alanBtnInstance = useRef(null);
  const [index,setIndex] = useState(null);
  const [currentId,setCurrentId] = useState(null);

useEffect(() => {
    if (!alanBtnInstance.current) {
        alanBtnInstance.current = alanBtn({
            key: 'abaf0677c3af5ec12bc8b9538046234f2e956eca572e1d8b807a3e2338fdd0dc/stage',
            onCommand: (commandData) => {
                    if (commandData.command === 'gotoFaq') {
                      scroller.scrollTo(`accordion-button-${commandData.faqId}`, {
                        duration: 800,
                        delay: 0,
                        smooth: 'easeInOutQuart',
                      });
                      // Call the client code that will react to the received command
                      setIndex(commandData.faqId-1);
                      setCurrentId(commandData.faqId);

                    }
                }
        });
    }
}, []);
  return (
    <ChakraProvider theme={theme}>
      <Navbar/>
      <Faq index={index} setIndex={setIndex} currentId={currentId} setCurrentId={setCurrentId}/>
    </ChakraProvider>
  )
}

export default App

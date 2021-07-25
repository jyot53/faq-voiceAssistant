import React from 'react';
import {Box,Flex,Heading,Spacer} from '@chakra-ui/react';
import {ColorModeSwitcher} from '../ColorModeSwitcher';

const Navbar = () => {
    return (
       <Flex align="center" boxShadow="base" p="2">
           <Box p="2">
               <Heading size="lg">Frequently Asked Questions</Heading>
           </Box>
           <Spacer/>
           <Box>
                <ColorModeSwitcher/>
           </Box>
       </Flex>
    )
}

export default Navbar

import React from 'react';
import { Heading, Box, Flex }  from '@chakra-ui/react';
import img from '../images/theater.png'

const Hero = () => {

    return(
        <Box bgImage={img}
            bgPosition="center"
            bgRepeat="no-repeat" 
            bgColor='blackAlpha.800' 
            w='100%'
            h='550px' 
            p={[2, 5, 10]} 
            color='white'>
            <Flex px={[5,10,20]} py={20}>
                <Heading as="h1" size="4xl" textAlign="left" w="500px" h="300px" lineHeight={1.25}>
                    Watch something incredible.
                </Heading>
            </Flex>
        </Box>
    );
};

export default Hero;
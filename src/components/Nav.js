import React from 'react';
import { Heading, Box, Flex } from '@chakra-ui/react';

const Nav = () => {

    return(
        <Box bg='blackAlpha.800' color='white' p={[2, 5, 10]}>
            <Flex px={[5, 10, 20]}>
                <Box border='1px' borderColor='white'>
                    <Heading as="h2" size="xl" px={[5]} py={[3]} fontSize={[15, 30]}>
                        MovieMax
                    </Heading>
                </Box>
            </Flex>
        </Box>
    );
};

export default Nav;
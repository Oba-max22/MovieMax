import React from 'react';
import { Box, VStack } from '@chakra-ui/react';
import Category from './Category.js';
import Search from './Search.js';


const Main = () => {

    const cartoons = ['Frozen', 'Minions', 'Zootopia', 'Lion King', 'Finding Nemo', 
    'Up', 'Moana', 'The Incredibles', 'Kung Fu Panda', 'Sing'];
    
    const action = ['Avengers: Endgame', 'Avengers: Infinity War', 'Spider-Man: No Way Home', 'Uncharted', 'Furious 7',
    'The Avengers', 'Black Panther', 'Avengers: Age of Ultron', 'Jurassic World: Fallen Kingdom', 'The Fate of the Furious'];

    return(
        <Box p={[2, 5, 10]}>
            <Search />
            <VStack alignItems="flex-start" px={[5, 10, 20]} spacing={5} >
                <Category name = 'Action' titles = {action} />
                <Category name = 'Animation' titles = {cartoons} />
            </VStack>
        </Box>
    );
};

export default Main;
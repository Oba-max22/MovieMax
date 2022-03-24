import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Image, Flex, Heading, HStack } from '@chakra-ui/react';

const Category = ({name, titles}) => {

    const [movies, setMovies]= useState([])

    useEffect(() => {
        async function fetchData() {
            const response = await axios.all(titles.map((title) => axios.get('http://www.omdbapi.com/?type=movie&t=' + title + "&apikey=" + process.env.REACT_APP_MY_API_KEY)));
            return response;
        }
        fetchData()
        .then(res=> setMovies(res))
    },[titles]);

    return(
        <Box py={[5]} >
            <Flex flexDirection="column" alignItems="flex-start">
                <Heading>{name}</Heading>
                <HStack overflowY='hidden' overflowX='scroll'>
                    {movies.map((movie, index) => (
                        <Image key={index} src={movie.data.Poster} alt='movie poster' borderRadius={10}/>

                    ))}
                </HStack>
            </Flex>
        </Box>
    );
};

export default Category;

import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Input, Text, Box, VStack, HStack, Image, Flex, Heading } from '@chakra-ui/react';


const Search = () => {
    const [keyword, setKeyword] = useState('');
    let [result, setResult]= useState([]);

    let url = "https://www.omdbapi.com/?type=movie&s=" + keyword + "&apikey=" + process.env.REACT_APP_MY_API_KEY;

    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(url);
            return response.data;
        }
        fetchData()
        .then(res => setResult(res.Search))
    },[url]);

    const handleChange = (e) => {
        setKeyword(e.target.value)
    };

    let results = []
    if (result !== undefined) results = [...result];

    return (
        <Box>
            <VStack alignItems="flex-start" px={[5, 10, 20]} spacing={5} >
                <Text>Search</Text>
                    <Input
                        value={keyword}
                        onChange={handleChange}
                        placeholder='Search by movie title'
                        size='lg'
                    />
                    <Flex flexDirection="column" alignItems="flex-start">
                        <HStack overflowY='hidden' overflowX='scroll'>
                            {
                                keyword === "" || results.length === 0 ? <Heading as="h2" size="xl" fontSize={30}>Not Found!</Heading> 
                                : 
                                results.map((movie, index) =>
                                    <Image key={index} src={movie.Poster} alt='movie poster' borderRadius={10}/>
                                )
                            }
                        </HStack>
                    </Flex>
            </VStack>
        </Box>
  
    );
}

export default Search;
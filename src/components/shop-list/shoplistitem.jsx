import React, {useState} from 'react';
import {Box, Image, Flex, Text, Skeleton, Spacer} from '@chakra-ui/react';

const ShopListItem = ({id, name, imageUrl, price}) => {
    
    const [imgLoaded, setimgLoaded] = useState(false);

    const checkSkeltonChange = () => {
        setTimeout(() => setimgLoaded(true), 1000);
    }

    return(
        <Box>
            <Skeleton style={{
                    width: "320px",
                    height: "350px"
                }} 
                isLoaded={imgLoaded}
                colorScheme="telegram" 
                speed="1.2" 
                fadeDuration="0.8">
                <Box overflow="hidden">
                    <Image borderRadius="md" onLoad={checkSkeltonChange} src={imageUrl} objectFit="cover" _hover={{
                        cursor: "pointer",
                        transform: "scale(1.2)",
                        transition: "transform 2s cubic-bezier(0.25, 0.25, 0.45, 0.95)"
                    }} />
                </Box>
            </Skeleton>
            <Flex align="baseline" mt={2}>
                <Box>
                    <Text
                        ml={2}
                        textTransform="uppercase"
                        fontSize="sm"
                        fontWeight="bold"
                    >
                    {name}
                    </Text>
                </Box>
                <Box>
                    <Text ml={1} fontSize="sm">
                        <b> {price} </b>
                    </Text>
                </Box>
            </Flex>
        </Box>
    );
}

export default ShopListItem;
import { Box, Image, Flex, Badge, Skeleton, Text, useColorMode, useColorModeValue} from '@chakra-ui/react';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';

const MenuItem = ({section : { title, imageUrl, linkUrl} }) => {
    // const {colorMode, toggleColorMode} = useColorMode();
    const bg = useColorModeValue("telegram", "whatsapp");
    const color = useColorModeValue("gray.800", "white");
    
    const [imgLoaded, setimgLoaded] = useState(false);

    const checkSkeltonChange = () => {
        // setTimeout(() => setimgLoaded(true), 0);
        setimgLoaded(true);
    }

    return(
        <Box maxW="320px">
            <Box overflow="hidden">
                <Skeleton style={{
                        width: "320px",
                        height: "218px"
                    }} 
                    isLoaded={imgLoaded} 
                    colorScheme="telegram" 
                    speed="1.2" 
                    fadeDuration="0.8">
                        <Link to={linkUrl}>
                            <Image borderRadius="md"
                                src={imageUrl}
                                objectFit="cover"
                                onLoad = {checkSkeltonChange}
                                _hover={{
                                opacity: "0.9",
                                cursor: "pointer",
                                transform: "scale(1.2, 1.2)",
                                transition: "transform 2s cubic-bezier(0.25, 0.25, 0.45, 0.95)"
                            }} />
                        </Link>
                </Skeleton>
            </Box>
            <Flex align="baseline" justifyContent="center" mt={2}>
                <Link to={linkUrl}>
                    <Badge mt={0} colorScheme={bg} fontSize="xl" fontWeight="semibold">SHOP {title}</Badge>
                </Link>
            </Flex>
        </Box>
    );
}

export default MenuItem;
import { Box, Image, Flex, Badge, Skeleton, Text, useColorMode, useColorModeValue} from '@chakra-ui/react';
import React, {useState} from 'react';

const MenuItem = ({section : { title, imageUrl, linkUrl} }) => {
    // const {colorMode, toggleColorMode} = useColorMode();
    const bg = useColorModeValue("telegram", "whatsapp");
    const color = useColorModeValue("gray.800", "white");
    
    const [imgLoaded, setimgLoaded] = useState(false);

    const checkSkeltonChange = () => {
        setTimeout(() => setimgLoaded(true), 1000);
    }

    return(
        <Box maxW="320px">
            <Box overflow="hidden">
                <Skeleton style={{
                        width: "320px",
                        height: "230px"
                    }} 
                    isLoaded={imgLoaded} 
                    colorScheme="telegram" 
                    speed="1.2" 
                    fadeDuration="0.8">
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
                </Skeleton>
            </Box>
            {/* <Box 
                borderRadius="md" 
                backgroundImage={`url(${imageUrl})`}
                h={250} 
                w={300} 
                backgroundPosition="center" 
                backgroundSize="cover" /> */}
            <Flex align="baseline" mt={2}>
                <Badge colorScheme={bg}>{linkUrl}</Badge>
                <Text
                    ml={2}
                    textTransform="uppercase"
                    fontSize="sm"
                    fontWeight="bold"
                >
                {title}
                </Text>
            </Flex>
            <Text mt={2} fontSize="xl" fontWeight="semibold" lineHeight="short">
                {linkUrl}
            </Text>
            <Text mt={2} >$119/night</Text>
            <Flex mt={2} align="center">
                <Text ml={1} fontSize="sm">
                <b>4.84</b> (190)
                </Text>
            </Flex>
        </Box>
    );
}

export default MenuItem;
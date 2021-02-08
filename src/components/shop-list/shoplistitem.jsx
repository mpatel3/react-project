import React, {useEffect, useState} from 'react';
import {Box, Image, Flex, Text, Skeleton, Tag, TagLabel, HStack, Icon, Button} from '@chakra-ui/react';
import { FaPlusCircle } from 'react-icons/fa';
import { AddItemToCart } from './../../redux/cart/cart.actions';
import { connect } from 'react-redux';

const ShopListItem = ({item, addItemToCart}) => {
    const { name, imageUrl, price } = item;
    const [imgLoaded, setimgLoaded] = useState(false);
    let timeout  = null;
    const checkSkeltonChange = () => {
        timeout = setTimeout(() => setimgLoaded(true), 1000);
    }
    // will run everytime with [] option.
    useEffect(() => {
        // clean up function
        return () => {
            clearTimeout(timeout);
        }
    }, []);

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
                    <Image borderRadius="md"
                        onLoad={checkSkeltonChange}
                        src={imageUrl}
                        height="350px"
                        width="400px"
                        objectFit="cover" 
                        _hover={{
                            cursor: "pointer",
                            transform: "scale(1.2)",
                            transition: "transform 2s cubic-bezier(0.25, 0.25, 0.45, 0.95)"
                        }} 
                    />
                </Box>
            </Skeleton>
            {/* <Flex align="baseline" mt={2} alignItems="center"> */}
                <HStack mt={3}>
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
                <Tag
                    size = "lg"
                    borderRadius="full"
                    variant="solid"
                    colorScheme="green"
                >
                <TagLabel>$ {price}</TagLabel>
                </Tag>
                <Button type="button" p={3} colorScheme="blue" onClick={() => addItemToCart(item)}>
                    Add To Cart
                </Button>
            </HStack>
            {/* </Flex> */}
        </Box>
    );
}


const mapDispatchToProps = dispatch => {
    return {
        addItemToCart: item => dispatch(AddItemToCart(item))
    }
}

export default connect(null, mapDispatchToProps)(ShopListItem);
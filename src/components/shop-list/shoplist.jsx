import { Box, Heading, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";
import ShopListItem from './shoplistitem';

const ShopList = ({title, items}) => {
    
    const renderShopItem = () => {
        return (
            items
            .filter((item, index) => index < 4)
            .map(({id, ...restShopItem}) => {
                console.log({...restShopItem});
                return (
                    <ShopListItem key={id} {...restShopItem} test="manthan" />
                );
            })
        );
    }
    
    return (
        <Box>
            <Heading as="h4" size="lg" m={2}>{title}</Heading>
            <SimpleGrid columns={{sm: 2, md: 3, lg:4}} spacing={5}>
                {renderShopItem()}
            </SimpleGrid>
        </Box>
    );
}

export default ShopList;
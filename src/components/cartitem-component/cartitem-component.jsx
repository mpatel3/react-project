import {Flex, Image, Box, Text, Heading} from "@chakra-ui/react";

const CartItemComponent = ({item: {name, imageUrl, price, quantity}}) => {
    return ( 
        <Flex mt={3}>
            <Image 
                boxSize="100px"
                objectFit="cover"
                src={imageUrl}
            />
            <Box pl={5}>
                <Heading as="h5" size="sm">{name}</Heading>
                <Text display="i">{quantity} X ${price}</Text>
            </Box>
        </Flex>
    );
}

export default CartItemComponent;
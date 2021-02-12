import { selectShopCollectionItem } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';
import { Box, Center, Divider, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import ShopListItem from './shoplistitem';

const ShopCategory = ({collections}) => {
    const {title, items} = collections;
    return ( 
        <Box>
            <Center mb={2}>
                <Heading as="h2">{title}</Heading>
            </Center>
            <Divider mb={5} />
            <SimpleGrid columns={{sm: 2, md: 3, lg:4}} spacing={5} mb={5}>
                {items.map(item => <ShopListItem key={item.id} item={item} />)}
            </SimpleGrid>
        </Box>
    );
}

const mapStateToProps = (state, ownProps) => {
    return {
        collections : selectShopCollectionItem(ownProps.match.params.category)(state)
    }
}

export default connect(mapStateToProps, null)(ShopCategory);
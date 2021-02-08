import React from 'react';
import MenuItem from './menuitem';
import { SimpleGrid } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectMenuSections } from '../../redux/menu/menu.selector';

const MenuList = ({sections}) => {
    
    const renderMenuItem = () => {
        return (
            sections.map(section => {
                return <MenuItem key={section.id} section={section} />
            })
        )
    }

    return (
        <SimpleGrid columns={{sm: 2, md: 3, lg:4}} spacing="10px">
            {renderMenuItem()}
        </SimpleGrid>
    );
}

const mapStateToProps = createStructuredSelector({
    sections: selectMenuSections
})

export default connect(mapStateToProps, null)(MenuList);
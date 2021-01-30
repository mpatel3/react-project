import React, { Component } from 'react';
import MenuItem from './menuitem';
import {SimpleGrid} from '@chakra-ui/react';
import SECTIONS_DATA from '../../data/sections.data';

class MenuList extends Component{
    constructor (props) {
        super(props);
        this.state = { sections: SECTIONS_DATA }
        console.log(this.props);
    }

    renderMenuItem = () => {
        return (
            this.state.sections.map(section => {
                return <MenuItem key={section.id} section={section} />
            })
        )
    }

    
    render() {
        return (
            <SimpleGrid columns={{sm: 2, md: 3, lg:4}} spacing="10px">
                {this.renderMenuItem()}
            </SimpleGrid>
        );
    }   
}

export default MenuList;
import {extendTheme} from '@chakra-ui/react';

// add color mode configuration

const config = {
    initialColorMode: "light",
    useSystemColorMode: false,
}

const theme = extendTheme({config});

export default theme;
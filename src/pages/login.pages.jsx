import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import SignUp from '../components/login/signin.component';


const LoginPage = () => {
    return (
        <SimpleGrid columns={2} p={3} spacing={10}>
            <SignUp />
        </SimpleGrid>
    )
}

export default LoginPage;
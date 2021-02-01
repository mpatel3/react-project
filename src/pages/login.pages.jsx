import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from '../components/login/signin.component';
import SignUp from '../components/login/signup.component';


const LoginPage = (props) => {
    console.log(props);

    if(props['currentUser']) {
        // props[0].history.push('/'); 
        return <Redirect to="/" />
    }
    
    return (
        <SimpleGrid columns={2} p={3} spacing={10}>
            <SignIn />
            <SignUp /> 
        </SimpleGrid>
        
    )
}

export default LoginPage;
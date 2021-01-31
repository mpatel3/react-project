import React, { Component } from 'react';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Box,
    Heading,
    Input,
    Text,
    Button
} from "@chakra-ui/react";
import {signInwithGoogle} from '../../firebase/firebase.utils';


class SignUp extends Component {
    state = {
        email: '',
        password: ''
    }

    onFormSubmit = (event) => {
        // default behavior - prevent it
        event.preventDefault();
        console.log(this.state);
    }
    
    handleChange = (event) => {
        const {name, value} = event.target;
        // name now coming as a string. that's why accessing it via [name] syntax.
        this.setState({ [name]: value});
    }

    render() {
        return (
            <Box>
                <Heading as="h3" size="lg">I already have an Account</Heading>
                <Text fontSize={16} pt={3}>Sign in with your email and password</Text>
                <form style={{marginTop: "1rem"}} onSubmit={this.onFormSubmit}>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input 
                            type="email"
                            name="email"
                            value={this.state.email} 
                            variant="flushed"
                            onChange={this.handleChange} 
                            placeholder="Enter your email" />
                    </FormControl>
                    <FormControl mt={5}>
                        <FormLabel>Password</FormLabel>
                        <Input 
                            type="password"
                            name="password"
                            value={this.state.password} 
                            variant="flushed"
                            onChange={this.handleChange} 
                            placeholder="Enter your password" />
                    </FormControl>
                    <Button mt={5}  mr={5} type="submit" colorScheme="blue">Sign In</Button>
                    <Button mt={5} onClick ={signInwithGoogle} colorScheme="red">Sign In with Google</Button>
                </form>
            </Box>
        )
    }
}

export default SignUp;
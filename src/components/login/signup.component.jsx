import { FormControl, FormLabel, Box, Heading, Text, Input, Button } from '@chakra-ui/react';
import React, { Component } from 'react';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

class SignUp extends Component {
    
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;

        if(password !== confirmPassword) {
            alert('passwords does not match');
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument (user, {displayName});
            
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            })

        } catch(err) {
            console.log(err);
        }
    }

    handleChange = ({target: {name, value}}) => {
        this.setState({ [name] : value });
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return (
           <Box>
               <Heading>I do not have an account.</Heading>
               <Text>Sign up with email and password.</Text>
               <form style={{marginTop: "1rem"}} onSubmit={this.handleSubmit}>
                   <FormControl>
                       <FormLabel>Display Name</FormLabel>
                       <Input 
                            type="text"
                            name="displayName"
                            value={displayName} 
                            variant="flushed"
                            onChange={this.handleChange} 
                            placeholder="Display Name" />
                   </FormControl>
                   <FormControl mt={5}>
                       <FormLabel>Email</FormLabel>
                       <Input 
                            type="email"
                            name="email"
                            value={email} 
                            variant="flushed"
                            onChange={this.handleChange} 
                            placeholder="Enter your email id" />
                   </FormControl>
                   <FormControl mt={5}>
                       <FormLabel>Password</FormLabel>
                       <Input 
                            type="password"
                            name="password"
                            value={password} 
                            variant="flushed"
                            onChange={this.handleChange} 
                            placeholder="Enter your password" />
                   </FormControl>
                   <FormControl mt={5}>
                       <FormLabel>Confirm Password</FormLabel>
                       <Input 
                            type="password"
                            name="confirmPassword"
                            value={confirmPassword} 
                            variant="flushed"
                            onChange={this.handleChange} 
                            placeholder="Enter your password." />
                   </FormControl>
                   <Button type="submit" mt={5} colorScheme="blue" >Sign Up </Button>
               </form>
           </Box> 
        )
    }
}

export default SignUp;
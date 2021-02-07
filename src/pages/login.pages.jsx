import { SimpleGrid } from '@chakra-ui/react';
import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import SignIn from '../components/login/signin.component';
import SignUp from '../components/login/signup.component';
import { selectCurrentUser } from './../redux/user/user.selector';

const LoginPage = ({currentUser}) => {

    if(currentUser) {
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

// const mapStateToProps = ({user:{currentUser}}) => {
//     return { currentUser }
// }

// createStructuredSelector will take state and pass state in all the selectors
// and ultimately returning a state object which which will be passed as props in this component.
// if all key values are depends on all the selectors then we can use createStructuredSelector.
const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

export default  connect(mapStateToProps, null)(LoginPage);
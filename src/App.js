import React from 'react';
import { Box, theme } from '@chakra-ui/react';
import MenuList from './components/menulist/menuList';
import ShopPage from './pages/shopes.pages';
import LoginPage from './pages/login.pages';
import {BrowserRouter, Route, Switch as RouteSwich} from 'react-router-dom';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    console.log(auth);
    this.unsubscribeFromAuth =  auth.onAuthStateChanged((user) => {
      if(user) {
        console.log(user);
        // user exists || user has signed in
        this.setState({currentUser: user});
      } else {
        this.setState({currentUser: null});
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const contextType = theme;
    console.info(contextType);
    return (
      <Box m="0 20px">
        {/* <Box mb={4} bg={bg} color={color}>
          This box's style will change based on the color mode.
        </Box>
        */}
        <BrowserRouter>
          <Header currentUser={this.state.currentUser}/>
          <RouteSwich>
            <Route path='/' exact component={MenuList} />
            <Route path='/shops' exact component={ShopPage} />
            <Route path="/login" exact component={LoginPage} />
          </RouteSwich>
        </BrowserRouter>
      </Box>
    )
  }
}

export default App;

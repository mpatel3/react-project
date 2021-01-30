import React from 'react';
import { Box, theme } from '@chakra-ui/react';
import MenuList from './components/menulist/menuList';
import ShopPage from './pages/shopes.pages';
import LoginPage from './pages/login.pages';
import {BrowserRouter, Route, Switch as RouteSwich} from 'react-router-dom';
import Header from './components/header/header.component';

const App = (props) => {
  const contextType = theme;
  console.info(contextType);
  return (
    <Box m="0 20px">
      {/* <Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      */}
      <BrowserRouter>
        <Header />
        <RouteSwich>
          <Route path='/' exact component={MenuList} />
          <Route path='/shops' exact component={ShopPage} />
          <Route path="/login" exact component={LoginPage} />>
        </RouteSwich>
      </BrowserRouter>
    </Box>
  );
}

export default App;

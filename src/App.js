import React, { Lazy, Suspense } from 'react';
import { Box, theme } from '@chakra-ui/react';
import {BrowserRouter, Route, Switch as RouteSwich} from 'react-router-dom';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { connect } from 'react-redux';
import MenuList from './components/menulist/menuList';
// import ShopPage from './pages/shopes.pages';
// import LoginPage from './pages/login.pages';
import Header from './components/header/header.component';
// import Checkout from './pages/checkout.pages';

const ShopPage = React.lazy(() => import('./pages/shopes.pages'));
const LoginPage = React.lazy(() => import('./pages/login.pages'));
const Checkout = React.lazy(() => import('./pages/checkout.pages'));
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe listen to change in user data/document , but we will also get back first state of that data/document.
        userRef.onSnapshot(snapShot => {
          
          this.props.setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
          // this.setState({
          //   currentUser: {
          //     id: snapShot.id,
          //     ...snapShot.data()
          //   }
          // }, () => {
          //   console.log(this.state);
          // });
        });
      } else {
        this.props.setCurrentUser(null);
        // this.setState({currentUser: userAuth}); // userAuth comes null if user is not logged in.
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    const contextType = theme;
    // console.info(contextType);
    return (
      <Box m="0 20px">
        {/* <Box mb={4} bg={bg} color={color}>
          This box's style will change based on the color mode.
        </Box>
        */}
        <BrowserRouter>
          <Header />
          <RouteSwich>
            <Suspense fallback={<div>Loading.....</div>} >
              <Route path='/' exact component={MenuList} />
              <Route path='/shop' component={ShopPage} />
              <Route path="/login" exact render={(...props) => <LoginPage {...props} />} />
              <Route path="/checkout" exact component={Checkout} />
            </Suspense>
          </RouteSwich>
        </BrowserRouter>
      </Box>
    )
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);

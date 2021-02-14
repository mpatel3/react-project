import React, { Lazy, Suspense } from 'react';
import { Box, theme } from '@chakra-ui/react';
import {BrowserRouter, Route, Switch as RouteSwich} from 'react-router-dom';
import { auth, createUserProfileDocument, addCollectionAndDocuments } from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions';
import { connect } from 'react-redux';
import MenuList from './components/menulist/menuList';
// import ShopPage from './pages/shopes.pages';
// import LoginPage from './pages/login.pages';
import Header from './components/header/header.component';
// import Checkout from './pages/checkout.pages';
import { selectShopCollection } from './redux/shop/shop.selector';

const ShopPage = React.lazy(() => import('./pages/shopes.pages'));
const LoginPage = React.lazy(() => import('./pages/login.pages'));
const Checkout = React.lazy(() => import('./pages/checkout.pages'));
class App extends React.Component {

  unsubscribeFromAuth = null;

  componentDidMount() {
    // const { setCurrentUser, collectionArray } = this.props;
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        // subscribe listen to change in user data/document , but we will also get back first state of that data/document.
        userRef.onSnapshot(snapShot => {
          
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          })
        });
      } else {
        setCurrentUser(null);
      }

      // addCollectionAndDocuments('shop', Object.values(collectionArray).map(({id, title, items})=> ({id, title, items})));
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

/**
 * This is to add our shop data in firestore of firebase.
  const mapStateToProps = (state) => {
    return {
      collectionArray: selectShopCollection(state)
    }
}
*/

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);

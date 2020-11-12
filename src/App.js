import React from 'react';
import { Switch ,Route} from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage/homepage.component.jsx'
import ShopPage from './pages/homepage/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignOutPage from './pages/homepage/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx'; 
import {auth , createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.acion';

class App extends React.Component{

  unsubscribeFromAuth = null;

  //otan anoiksei to App iparxei ena open subscription sto opoio mporoume na log ton last user
  componentDidMount(){
    const {setCurrentUser} = this.props
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
              id:snapShot.id,
              ...snapShot.data()
            });
          });
      }
      setCurrentUser(userAuth)
    });
  }

  //kleinei to unsubcription to user
  //wste na allazei ksana to popUp logIn
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch =>({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);

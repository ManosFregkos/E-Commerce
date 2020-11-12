import React from 'react';
import { Switch ,Route} from 'react-router';
import './App.css';
import HomePage from './pages/homepage/homepage/homepage.component.jsx'
import ShopPage from './pages/homepage/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignOutPage from './pages/homepage/sign-in-and-sign-out/sign-in-and-sign-out.component.jsx'; 
import {auth , createUserProfileDocument} from './firebase/firebase.utils';

class App extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;

  //otan anoiksei to App iparxei ena open subscription sto opoio mporoume na log ton last user
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser:{
              id:snapShot.id,
              ...snapShot.data()
            }
          });
        })
      }
      this.setState({currentUser:userAuth})
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
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route  path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignOutPage} />
        </Switch>
      </div>
    );
  }
}

export default App;

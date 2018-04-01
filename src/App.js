import React, { Component } from 'react';
import { render } from 'react-dom'
import BooksList from './components/pages/booksList'
import { Provider } from 'react-redux'
import { applyMiddleware, createStore } from 'redux'
import logger from 'redux-logger'
// IMPORT ROUTER
//import {Router, Route} from 'react-router'
// import { Router, Route, IndexRoute } from 'react-router'

// IMPORT COMBINED REDUCERS
import reducers from './reducers/index'
import logo from './logo.svg';
import './App.css';
import Menu from './components/menu'
import Footer from './components/footer'
import BookList from './components/pages/booksList'
import Cart from './components/pages/cart'
import BooksForm from './components/pages/bookForm'
import Main from './components/main'
import createHistory from 'history/createBrowserHistory'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom'
const history = createHistory()

// link bootstrap https://react-bootstrap.github.io/components/buttons/
// step 1 create the store 
const middleware = applyMiddleware(logger)
const store = createStore(reducers, middleware)
const routes = {
  path: '/',
  component: Main,
  childRoutes: [
    { path: '/admin', component: BooksForm },
    {
      path: '/cart',
      component: Cart,
    }
  ]
};

class App extends Component {
  /*** <Provider store={store}>
          <div>
          <Menu/>
        <BooksList/>
        <Footer/>
        </div>
        </Provider>
  */
  render() {
    return (
      <Provider store={store}>
        <Router>
          {/* <Route  exact={true}  path="/" component={Main}>
        <Switch>
      <Route path="/booklist" component={BooksList}/>
      <Route path="/admin" component={BooksForm}/>
      <Route path="/cart" component={Cart}/>
      </Switch>
      </Route> */}
          <Main>
            {/*  <Route  exact={true}  path="/" component={Main}/> */}
              <Route  exact path="/" component={BooksList} />
            <Route path="/admin" component={BooksForm} />
            <Route path="/cart" component={Cart} />
          
          </Main>
        </Router>

        {/*  <Router  routes={routes} />
 */}
      </Provider>
    );
  }
}

export default App;

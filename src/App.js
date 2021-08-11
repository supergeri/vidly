import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import Movies from './components/movies'
import './App.css'
import NotFound from './components/notFound'
import Customers from './components/customers'
import Rentals from './components/rentals'
import NavBar from './components/navBar'
import MovieForm from './components/movieForm'
import LoginForm from './components/loginForm'
import RegisterForm from './components/registerForm'

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/register" component={RegisterForm}></Route>
          <Route path="/login" component={LoginForm}></Route>
          <Route path="/movies/:id" component={MovieForm}></Route>
          <Route path="/movies" component={Movies}></Route>
          <Route path="/customers" component={Customers}></Route>
          <Route path="/rentals" component={Rentals}></Route>
          <Route path="/not-found" component={NotFound}></Route>
          <Redirect from="/" exact to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  )
}

export default App

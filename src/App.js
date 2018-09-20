import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Button, Icon, Navbar, NavItem, Footer, Row, Col} from 'react-materialize'

class App extends Component {
  render() {
    return (
      <div className="">
        <Navbar brand='logo' right>
          <NavItem onClick={() => console.log('test click')}>Getting started</NavItem>
          <NavItem href='components.html'>Components</NavItem>
        </Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
        <Button waves='light'>
          <Icon>thumb_up</Icon>
        </Button>
          &nbsp; To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Row>
          <Col s={12} m={4} className='grid-example'>and some other things</Col>
          <Col s={12} m={4} className='grid-example'>and some other things</Col>
          <Col s={12} m={4} className='grid-example'>and some other things</Col>
        </Row>

        <Footer copyrights="&copy 2015 Copyright Text"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
          }
          links={
            <ul>
              <li><a className="grey-text text-lighten-3" href="#!">Link 1</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 2</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 3</a></li>
              <li><a className="grey-text text-lighten-3" href="#!">Link 4</a></li>
            </ul>
          }
          className='example'>
            <h5 className="white-text">Footer Content</h5>
            <p className="grey-text text-lighten-4">You can use rows and columns here to organize your footer content.</p>
        </Footer>
      </div>
    );
  }
}

export default App;

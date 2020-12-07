import styled from 'styled-components';
import { Component } from 'react';
import Consumer from './Consumer';
import Provider from './Provider';
import {Switch, Route} from 'react-router-dom'
import axios from 'axios';

class App extends Component{
  render(){
    return(
      <Switch>
        <Route path="/provider" component={Provider}/>
        <Route path="/" component ={Consumer}/>
      </Switch> 
    )
  }
}

export default App;

const HeaderLayout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100vw;
  flex-flow : row wrap;
`
const BodyLayout = styled.div`
  margin: 0 auto;
  display: flex;
  width: 100%;
  flex-flow : row wrap;
`


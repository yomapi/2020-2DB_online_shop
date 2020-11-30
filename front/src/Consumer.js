import styled from 'styled-components';
import Header from './components/Header';
import { Component } from 'react';
import Router from './Routes/Router';


class Consumer extends Component{
  render(){
    return(
      <>
        <HeaderLayout>
          <Header/>
        </HeaderLayout>
        <BodyLayout>
          <Router/>
        </BodyLayout>
      </>
    )
  }
}

export default Consumer;

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
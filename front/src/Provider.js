import styled from 'styled-components';
import Pheader from './provider_components/Pheader';
import { Component } from 'react';
import Phome from './provider_components/Phome';
import PenrollTemplate from './provider_components/PenrollTemplate';
import PorderListTemplate from './provider_components/PorderListTemplate';
import PuserInfoTemplate from './provider_components/PuserInfoTemplate';
import PLoginTemplate from './provider_components/PloginTemplate'
import notfound from './components/notfound';
import {Switch, Route} from 'react-router-dom';

class Provider extends Component{
    render(){
        const props = this.props;
        return(
        <>
            <HeaderLayout>
            <Pheader/>
            </HeaderLayout>
            <BodyLayout>
                <Switch>
                    <Route exact path={`${props.match.url}`} component ={Phome}/>
                    <Route path={`${props.match.url}/enroll`} component ={PenrollTemplate}/>
                    <Route path={`${props.match.url}/orders`} component ={PorderListTemplate}/>
                    <Route path={`${props.match.url}/user`} component ={PuserInfoTemplate}/>
                    <Route path={`${props.match.url}/login`} component ={PLoginTemplate}/>
                    <Route exact path={`${props.match.url}/*`} component={notfound}/>
                </Switch>
            </BodyLayout>
        </>
        )
    }
}

export default Provider;

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
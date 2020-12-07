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
    constructor(props){
        super(props);
        this.state ={Token:"",
                     IsLoggedOn:false,
                     userId:""}
    }
    
    LoginHandler = (token,id) =>{
        this.setState({
          IsLoggedOn : true,
          Token : token,
          userId : id
        })
    }
    
    LogoutHandler = () =>{
        this.setState({
          IsLoggedOn : false,
          Token : "",
          userId:""
        })
    }
    
    render(){
        const props = this.props;
        return(
        <>
            <HeaderLayout>
            <Pheader login={this.state.IsLoggedOn} LogoutHandler={this.LogoutHandler}/>
            </HeaderLayout>
            <BodyLayout>
                <Switch>
                    <Route exact path={`${props.match.url}`} render ={(prop)=><Phome match={prop.match}/>}/>
                    <Route path={`${props.match.url}/enroll`} render ={(prop)=><PenrollTemplate match={prop.match} token={this.state.Token} userId={this.state.userId}/>}/>
                    <Route path={`${props.match.url}/orders`} render ={(prop)=><PorderListTemplate match={prop.match} token={this.state.Token} userId={this.state.userId}/>}/>
                    <Route path={`${props.match.url}/user`} render ={(prop)=><PuserInfoTemplate match={prop.match}token={this.state.Token} userId={this.state.userId}/>}/>
                    <Route path={`${props.match.url}/login`} render ={(prop)=><PLoginTemplate match={prop.match} LoginHandler = {this.LoginHandler}/>}/>
                    <Route exact path={`${props.match.url}/*`} render={notfound}/>
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
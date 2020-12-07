import styled from 'styled-components';
import Header from './components/Header';
import { Component } from 'react';
import Router from './Routes/Router';


class Consumer extends Component{

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
    return(
      <>
        <HeaderLayout>
          <Header login={this.state.IsLoggedOn} LogoutHandler={this.LogoutHandler}/>
        </HeaderLayout>
        <BodyLayout>
          <Router token={this.state.Token} login={this.state.IsLoggedOn} userId={this.state.userId} LoginHandler = {this.LoginHandler}/>
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
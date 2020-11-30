import React, {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

class Header extends Component{
    constructor(props){
        super(props);
    }


    render(){
        return(
            <Container>
                <Element>
                    <LogoWrapper>
                        <Logo>
                            <Link to='/'>
                                Khusinsa
                            </Link>
                        </Logo>
                    </LogoWrapper>
                    <HeaderMenu>
                        <Menu>
                            <Nav>
                                <NavList>
                                    <NavItem><Link to='/search'>상품 검색</Link></NavItem>
                                    <NavItem><Link to ='/orders'>주문 내역</Link></NavItem>
                                    {this.props.login ? <NavItem><Link to ='/user'>회원 정보</Link></NavItem> : ''}
                                </NavList>
                            </Nav>
                            <Sign>
                                {this.props.login ? <Link to = '/'><SignItem onClick={this.props.LogoutHandler}> 로그아웃 </SignItem></Link> : <Link to = '/login'><SignItem> 회원가입/로그인 </SignItem></Link>}
                            </Sign>
                        </Menu>
                    </HeaderMenu>
                </Element>
            </Container>
        )
    }
}


export default Header;


const Container = styled.div`

    a{text-decoration: none; color:white;}
    width: 100%;
    padding-bottom: 1px;
    border-bottom: 4px solid black;
    box-shadow: 2px 2px 5px 2px;
`
const Element = styled.div`
    display: flex;
    padding-left : 15px;
    padding-right : 15px;
    padding-top : 10px;
    padding-bottom: 10px;
    background: linear-gradient( #151515, black 20% )
`
const LogoWrapper = styled.div`
    padding-left : 20px;
    width: 20%;
    display: flex;
`
const Logo = styled.div`
    font-size : 25px;
    font-weight: 800;
    color: white;
    cursor: pointer;
    &:hover{
        color: gray;
        transform:scale(1.05); 
        transition: transform .35s;  
    }
`
const HeaderMenu = styled.div`
    width: 100%;
    order: 2;
    display:flex;
    color: white;
    font-family: 'Song Myung', serif;
    font-size : 12px;
    
`
const Menu = styled.div`
    display:flex;
    position:absolute;
    right: 10px;
`
const Nav = styled.div`
    order: 2;
`
const NavList = styled.ul`
    padding-top: 7px;
    margin: 0 auto;
    display: flex;
`
const NavItem = styled.li`
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    cursor: pointer;
    &:hover{
        color: gray;
        transform:scale(1.1); 
        transition: transform .35s;  
    }
`
const Sign = styled.div`
    text-align: center;
    padding 4px 0px;
    padding-left: 20px;
    order:3;
`
const SignItem = styled.div`
    border : 1.5px solid white;
    border-radius:5px;
    padding-left: 10px;
    padding-right: 10px;
    padding-top: 1px;
    padding-bottom: 2px;
    font-weight:bold;
    cursor: pointer;
    &:hover{
        color: gray;
        border : 1.5px solid gray;
        transform:scale(1.1); 
        transition: transform .35s;  
    }
    
`



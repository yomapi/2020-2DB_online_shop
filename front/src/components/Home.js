import axios from 'axios';
import React,{Component} from 'react';
import './Home.css'

class Home extends Component{

    render(){
        return(
            <main className="HomeTemplate">
                <div className="top">
                    <div className="title">
                        Home
                    </div>
                    <section className="form-wrapper">
                        <div>
                            <h1>khusinsa-home</h1>
                        </div>
                    </section>
                </div>
                <section className="Home-wrapper">
                    <div>
                        홈페이지 입니다.
                    </div>   
                </section>
            </main>
        )
    }
}
export default Home;